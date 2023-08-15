"use client";

import AppointmentListItem from "./item";
import Heading from "@/UI/heading";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";
import getUpcomingAppointments from "@/utils/getUpcomingAppointments";

export default function AppointmentList() {
  const [loading, setLoading] = useState(true);
  const [apList, setApList] = useState([]);

  
  useEffect(() => {
    const fetchAppts = async () => {
      getUpcomingAppointments()
        .then((res) => {
          setApList(res);
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchAppts();
  }, []);

  return (
    <>
      <Heading size="md">Upcoming Appointments</Heading>
      <div className="p-2 space-y-1">
        <>
          {loading ? (
            <Loading />
          ) : apList ? (
            apList.map((appointment, index) => {
              return (
                <AppointmentListItem key={index} appointment={appointment} />
              );
            })
          ) : null}
        </>
      </div>
    </>
  );
}
