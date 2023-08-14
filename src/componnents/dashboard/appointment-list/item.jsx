"use client";

import Button from "@/UI/button";
import Card from "@/UI/card";

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
    subject,
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
    <Card type="inv">
      <div className="flex justify-between text-xl">
        <div>
          {new Intl.DateTimeFormat("default").format(start)}
        </div>
        <div>
          {new Intl.DateTimeFormat("default", timeFormat).format(start)}
        </div>
      </div>
      <div>Type: {type}</div>
      {type == "in-person" ? <div>location: {location}</div> : null}
      <div>Client: {`${f_name} ${l_name}`}</div>
      {/* <div>teacher_id: {teacher_id}</div> */}
      {/* <div>id: {id}</div> */}
    </Card>
  );
}
