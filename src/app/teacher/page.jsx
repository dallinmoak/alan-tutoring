"use client";

import Heading from "@/UI/heading";
import getUser from "@/utils/getUser";
import getTeacherById from "@/utils/getTeacherById";
import { translations } from "@/utils/translations";
import { useEffect, useState } from "react";
import Button from "@/UI/button";

export default function TeacherPage() {
  const [teacherName, setTeacherName] = useState({ first: "", last: "" });
  const [userId, setUserId] = useState();
  const [zoomMtg, setZoomMtg] = useState();

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

  const testCreate = async () => {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          start: {
            dateTime: "2023-09-16T06:10:00.000Z",
            timeZone: "America/Tegucigalpa",
          },
          end: {
            dateTime: "2023-09-16T07:10:00.000Z",
            timeZone: "America/Tegucigalpa",
          },
          summary: "tutoring with Jeffery Doe",
          description: "Client: John Doe",
          location: "876 calle road",
        }),
      };
      const res = await fetch("/api/calendar/test", options);
      console.log("fetch testCreate res", res);
      try {
        const resBody = await res.text();
        console.log("fetch testCreate resBody", resBody);
      } catch (e) {
        console.log('error testCreate resBody', e);
      }
    } catch (e) {
      console.log("error testCreate", e);
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
      <Button action={getZoomMtg}>get zoom</Button>
      <div>{zoomMtg}</div>
      <Button action={testCreate}>create test cal event</Button>
    </div>
  );
}
