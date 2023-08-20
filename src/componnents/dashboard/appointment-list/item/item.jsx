"use client";

import Button from "@/UI/button";
import Card from "@/UI/card";
import { translations } from "@/utils/translations";
import ItemMainContent from "./main-content";

export default function AppointmentListItem({ appointment }) {
  const {
    id,
    teacher_id,
    start,
    end,
    type,
    location,
    client_id,
    google_id,
    f_name,
    l_name,
    topic,
    student_f_name,
    student_l_name,
    price,
    paid,
  } = { ...appointment };

  function intervalInMinutes(istart, iend) {
    return Math.round((iend - istart) / 1000 / 60);
  }

  const timeFormat = {
    hour: "numeric",
    minute: "numeric",
  };
  const extraContents = (
    <>
      {/* meeting duration */}
      <div>
        Duration: {intervalInMinutes(start, end)} minutes
      </div>
      {/* Meeting link */}
      {type == "online" ? (
        <Button>
          <a href="zoom.com">Join</a>
        </Button>
      ) : null}
    </>
  );

  return (
    <>
      <ItemMainContent appointment={appointment} />
    </>
  );
}
