"use client";

import appointments from "@/utils/simAppointments";
import AppointmentListItem from "./item";
import Heading from "@/UI/heading";
import Card from "@/UI/card";

export default function AppointmentList() {
  const apList = appointments;
  return (
    <Card>
      <Heading size="md">Upcoming Appointments</Heading>
      <div className="p-2 space-y-1">
        <>
          {apList.map((appointment, index) => {
            return (
              <AppointmentListItem key={index} appointment={appointment} />
            );
          })}
        </>
      </div>
    </Card>
  );
}
