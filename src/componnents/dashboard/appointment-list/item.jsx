"use client";

import Button from "@/UI/button";
import Card from "@/UI/card";

import { getClientbyID } from "@/utils/simClients";

export default function AppointmentListItem({ appointment }) {
  const {
    startDateTime,
    endDateTime,
    title,
    description,
    type,
    location,
    clientId,
    googleId,
  } = { ...appointment };

  const client = getClientbyID(clientId);

  function intervalInMinutes(start, end) {
    return Math.round((end - start) / 1000 / 60);
  }

  const timeFormat = {
    hour: "numeric",
    minute: "numeric",
  };
  const extraContents = (
    <>
      {/* meeting duration */}
      <div>
        Duration: {intervalInMinutes(startDateTime, endDateTime)} minutes
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
          {new Intl.DateTimeFormat("default").format(startDateTime)}
        </div>
        <div>
          {new Intl.DateTimeFormat("default", timeFormat).format(startDateTime)}
        </div>
      </div>
      <div>Type: {type}</div>
      {type == "in-person" ? <div>location: {location}</div> : null}
      <div>Client: {`${client.fName} ${client.lName}`}</div>
    </Card>
  );
}
