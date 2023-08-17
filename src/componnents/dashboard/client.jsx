"use client";

import { useEffect, useState } from "react";
import Heading from "@/UI/heading";
import { translations } from "@/utils/translations";
import getClientById from "@/utils/getClientById";

export default function ClientDash({ user }) {
  const [clientName, setClientName] = useState({ first: "", last: "" });

  useEffect(() => {
    document.title = translations.clientDashboardTitle(clientName.first);
  }, [clientName]);

  const getClientName = async () => {
    getClientById(user.id, "user_id")
      .then((res) => {
        setClientName({ first: res.f_name, last: res.l_name });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getClientName();
  }, []);

  return (
    <div className="w-full max-w-lg">
      <Heading size="lg">{translations.clientDashboardHeading}</Heading>
      <div className="flex justify-center">
        <div>
          {translations.clientDashboardGreeting(
            clientName.first + " " + clientName.last
          )}
        </div>
      </div>
    </div>
  );
}
