"use client";

import Button from "@/UI/button";
import Heading from "@/UI/heading";
import AppointmentCreateForm from "@/componnents/dashboard/new-appointment/create-form";
import { translations } from "@/utils/translations";
import { useState } from "react";

export default function NewAppointment() {
  const [showForm, setShowForm] = useState(false);

  const newAppointment = async (newObj) => {
    fetch("/api/newAppointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newObj),
    })
      .then((res) => {
        res
          .json()
          .then((resBody) => console.log(resBody))
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div className="space-y-2 flex flex-col items-center pb-2 w-full">
        <Heading size={"md"}>
          {translations.fieldLabels.teacherNavNewAppointment}
        </Heading>
        {showForm ? (
          <AppointmentCreateForm hideForm={()=> setShowForm(false)} submitCreate={(newObj) => newAppointment(newObj)}/>
        ) : (
          <Button
            action={() => {
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
//   topic: "topic 2",
//   google_id: "1",
//   price: 45,
// });
