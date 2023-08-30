"use client";

import AppointmentListItem from "./item/item";
import Heading from "@/UI/heading";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";
import getUpcomingAppointments from "@/utils/getUpcomingAppointments";
import { translations } from "@/utils/translations";

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
      <Heading size="md">{translations.upcommingAppointmentsHeading}</Heading>
      <div className="px-[0.125rem] py-2 space-y-1 w-full max-w-md">
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
