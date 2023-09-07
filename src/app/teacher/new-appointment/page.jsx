"use client";

import Button from "@/UI/button";
import Heading from "@/UI/heading";
import Hyperlink from "@/UI/hyperlink";
import AppointmentCreateForm from "@/componnents/dashboard/new-appointment/create-form";
import { translations } from "@/utils/translations";
import { useState } from "react";

export default function NewAppointment() {
  const [showForm, setShowForm] = useState(false);
  const [successMsg, setSuccessMsg] = useState();

  const newAppointment = async (newObj) => {
    try {
      const res = await fetch("/api/newAppointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newObj),
      })
      try {
        const resBody = await res.json();
        setSuccessMsg(resBody);
      } catch (e) {
        console.log(e);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const sendToGcal = async (newAppointment, details) => {
    const { student_name, client_name } = details.detailsForCalendar;
    return new Promise(async (resolve, reject) => {
      const url = "/api/calendar/new-event";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          end: {
            dateTime: "2023-09-06T22:00:00.000-06:00",
            timeZone: "America/Tegucigalpa",
          },
          start: {
            dateTime: "2023-09-06T21:00:00.000-06:00",
            timeZone: "America/Tegucigalpa",
          },
          summary: `tutoring with ${student_name}`,
          description: `client: ${client_name}\nstart: ${newAppointment.start}\nend: ${newAppointment.end}`,
        }),
      };
      try {
        const res = await fetch(url, options);
        resolve(res);
      } catch (e) {
        console.log(e);
        reject(e);
      }
    });
  };

  return (
    <>
      <div className="space-y-2 flex flex-col items-center pb-2 w-full">
        <Heading size={"md"}>
          {translations.fieldLabels.teacherNavNewAppointment}
        </Heading>
        {successMsg ? (
          <div className="flex flex-col justify-start">
            new appointment:
            {Object.keys(successMsg).map((key, index) => {
              return <div key={index}>{`${key}: ${successMsg[key]}`}</div>;
            })}
          </div>
        ) : null}
        {showForm ? (
          <AppointmentCreateForm
            hideForm={() => setShowForm(false)}
            submitCreate={async (newObj, details) => {
              try {
                const calendarResult = await sendToGcal(newObj, details);
                try {
                  const calendarResultBody = await calendarResult.json();
                  console.log(calendarResultBody);
                  if (calendarResultBody.data.id) {
                    newAppointment({
                      ...newObj,
                      google_id: calendarResultBody.data.id,
                    });
                  } else {
                    console.log('no google_id generated');
                  }
                } catch (e) {
                  console.log(e);
                }
              } catch (e) {
                console.log(e);
              }
              setShowForm(false);
            }}
          />
        ) : (
          <Button
            action={() => {
              setSuccessMsg(null);
              setShowForm(true);
            }}
          >
            {translations.buttonlabels.createAppointment}
          </Button>
        )}
      </div>
    </>
  );
}

// newAppointment({
//   client_id: 2,
//   teacher_id: "d853b2b2-4e05-4ab5-9000-90d38ad06b75",
//   start: new Date("September 5 2023 10:00 am").valueOf(),
//   end: new Date("September 5 2023 11:00 am").valueOf(),
//   type: "online",
//   student_id: 1,
//   paid: false,
//   location: "",
//   location_type: "near",
//   topic: "topic 2",
//   google_id: "1",
//   price: 45,
// });
