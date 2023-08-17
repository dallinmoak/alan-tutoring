"use client";

import { useEffect } from "react";
import AppointmentList from "./appointment-list/list";
import Heading from "@/UI/heading";
import { translations } from "@/utils/translations";

export default function TeacherDash({ user }) {
  useEffect(() => {
    document.title = translations.teacherDashboardTitle;
  }, []);
  return (
    <div className="w-full max-w-lg">
      <Heading size="lg">{translations.teacherDashboardHeading}</Heading>
      <div className="flex justify-center">
        <div>{translations.teacherDashboardGreeting(user.email)}</div>
      </div>
      <div className="p-1">
        <AppointmentList />
      </div>
    </div>
  );
}
