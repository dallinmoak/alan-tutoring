"use client";

import Heading from "@/UI/heading";
import getUser from "@/utils/getUser";
import getTeacherById from "@/utils/getTeacherById";
import { translations } from "@/utils/translations";
import { useEffect, useState } from "react";
import Button from "@/UI/button";

export default function TeacherPage() {
  const [teacherName, setTeacherName] = useState({ first: "", last: "" });
  const [ userId, setUserId ] = useState();
  const [zoomMtg, setZoomMtg ] = useState();

  useEffect(() => {
    document.title = translations.teacherDashboardTitle(teacherName.first);
  }, [teacherName]);

  const getTeacherName = async () => {
    getUser().then((res) => {
      const user = res;
      setUserId(user.id);
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


  const getZoomMtg = async () => {
    try {
      const res = await fetch(`/api/teacher/meeting?teacher_id=${userId}`);
      const resBody = await res.json();
      setZoomMtg(resBody[0].meeting_link);
    } catch (e) {
      console.log(e);
    }
  };

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
      <Button action={getZoomMtg} >get zoom</Button>
      <div>{zoomMtg}</div>
    </div>
  );
}
