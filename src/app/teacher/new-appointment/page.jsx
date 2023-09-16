"use client";

import Button from "@/UI/button";
import Heading from "@/UI/heading";
import Hyperlink from "@/UI/hyperlink";
import AppointmentCreateForm from "@/componnents/dashboard/new-appointment/create-form";
import { translations } from "@/utils/translations";
import Link from "next/link";
import { useState } from "react";

export default function NewAppointment() {
  const [showForm, setShowForm] = useState(false);
  const [successMsg, setSuccessMsg] = useState();
  const [loadingState, setloadingState] = useState();

  const newAppointment = async (newObj) => {
    setloadingState("database");
    try {
      const res = await fetch("/api/newAppointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newObj),
      });
      try {
        const resBody = await res.json();
        setloadingState("");
        setSuccessMsg(resBody);
      } catch (e) {
        console.log(e);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getZoomMtg = async (teacher_id) => {
    try {
      const res = await fetch(`/api/teacher/meeting?teacher_id=${teacher_id}`);
      console.log(res);
      const resBody = await res.json();
      console.log(resBody);
      return resBody[0].meeting_link;
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  const sendToGcal = async (newAppointment, details) => {
    const { student_name, client_name } = details.detailsForCalendar;
    return new Promise(async (resolve, reject) => {
      const url = "/api/calendar/new-event";
      const summaryTopic = newAppointment.topic
        ? newAppointment.topic
        : "tutoring";
      let location;
      if (newAppointment.type == "online") {
        location = await getZoomMtg(newAppointment.teacher_id);
      } else {
        location = newAppointment.location;
      }
      const isoWithOffset = (date) => {
        const offset = "-06:00";
        return new Date(date).toISOString().replace("z", offset);
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          start: {
            // dateTime: "2023-09-06T21:00:00.000-06:00",
            dateTime: isoWithOffset(newAppointment.start),
            timeZone: "America/Tegucigalpa",
          },
          end: {
            // dateTime: "2023-09-06T22:00:00.000-06:00",
            dateTime: isoWithOffset(newAppointment.end),
            timeZone: "America/Tegucigalpa",
          },
          summary: `${summaryTopic} with ${student_name}`,
          description: `Client: ${client_name}`,
          location: location,
        }),
      };
      try {
        console.log(options);
        const res = await fetch(url, options);
        resolve(res);
      } catch (e) {
        console.log(e);
        reject(e);
      }
    });
  };

  const create = async (newObj, details) => {
    setloadingState("calendar");
    try {
      const calendarResult = await sendToGcal(newObj, details);
      try {
        const calendarResultBody = await calendarResult.json();
        console.log(calendarResultBody);
        setloadingState("");
        if (calendarResultBody.data.id) {
          newAppointment({
            ...newObj,
            google_id: calendarResultBody.data.id,
          });
        } else {
          console.log("no google_id generated");
        }
      } catch (e) {
        console.log(e);
      }
    } catch (e) {
      console.log(e);
    }
    setShowForm(false);
  };

  const appForm = (
    <AppointmentCreateForm
      hideForm={() => setShowForm(false)}
      submitCreate={create}
    />
  );

  const createButton = (
    <Button
      action={() => {
        setSuccessMsg(null);
        setShowForm(true);
      }}
    >
      {translations.buttonlabels.createAppointment}
    </Button>
  );

  const successContent = successMsg ? (
    <div>
      <div>{`✅ ${translations.messages.newAppointmentSuccess}`}</div>
      <Hyperlink target={`/appointments/${successMsg.id}`} >{translations.buttonlabels.seeNewAppointment}</Hyperlink>
    </div>
  ) : null;

  const loadingMsg = () => {
    const msg = translations.messages.loading.newAppointment[loadingState];
    return <div>{`${msg}...`}</div>;
  };

  return (
    <>
      <div className="space-y-2 flex flex-col items-center pb-2 w-full">
        <Heading size={"md"}>
          {translations.fieldLabels.teacherNavNewAppointment}
        </Heading>
        {loadingState ? loadingMsg() : null}
        {successMsg ? successContent : null}
        {showForm ? appForm : createButton}
      </div>
    </>
  );
}
