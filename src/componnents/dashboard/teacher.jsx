"use client";

import { useEffect, useState } from "react";
import AppointmentList from "./appointment-list/list";
import Heading from "@/UI/heading";
import { translations } from "@/utils/translations";
import getTeacherById from "@/utils/getTeacherById";

export default function TeacherDash({ user }) {
  const [teacherName, setTeacherName] = useState({ first: "", last: "" });

  useEffect(() => {
    document.title = translations.teacherDashboardTitle(teacherName.first);
  }, [teacherName]);

  const getTeacherName = async () => {
    getTeacherById(user.id)
      .then((res) => {
        setTeacherName({ first: res.f_name, last: res.l_name });
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getTeacherName();
  }, []);

  return (
    <div className="w-full max-w-lg">
      <Heading size="lg">{translations.teacherDashboardHeading}</Heading>
      <div className="flex justify-center">
        <div>{translations.teacherDashboardGreeting(teacherName.first + " " + teacherName.last)}</div>
      </div>
      <div className="pt-1">
        <AppointmentList />
      </div>
    </div>
  );
}
