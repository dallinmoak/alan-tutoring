"use client";

import Heading from "@/UI/heading";
import getUser from "@/utils/getUser";
import getTeacherById from "@/utils/getTeacherById";
import { translations } from "@/utils/translations";
import { useEffect, useState } from "react";

export default function TeacherPage() {
  const [teacherName, setTeacherName] = useState({ first: "", last: "" });

  useEffect(() => {
    document.title = translations.teacherDashboardTitle(teacherName.first);
  }, [teacherName]);

  const getTeacherName = async () => {
    getUser().then((res) => {
      const user = res;
      getTeacherById(user.id)
        .then((res) => {
          setTeacherName({ first: res.f_name, last: res.l_name });
        })
        .catch((e) => console.log(e));
    });
  };

  useEffect(() => {
    getTeacherName();
  }, []);
  return (
    <div className="flex items-center flex-col">
      <Heading size="lg">{translations.teacherDashboardHeading}</Heading>
      <div className="w-fit">
        {translations.teacherDashboardGreeting(
          teacherName.first + " " + teacherName.last
        )}
      </div>
      <div className="py-5">
        Possible content:
        <ul className="list-disc">
          <li>notifications</li>
          <li>quick links</li>
          <li>action buttons</li>
        </ul>
      </div>
    </div>
  );
}
