"use client";

import { useEffect } from "react";
import Heading from "@/UI/heading";
import { translations } from "@/utils/translations";

export default function ClientDash({ user }) {
  useEffect(() => {
    document.title = translations.clientDashboardTitle;
  }, []);

  return (
    <div className="w-full max-w-lg">
      <Heading size="lg">{translations.clientDashboardHeading}</Heading>
      <div className="flex justify-center">
        <div>{translations.clientDashboardGreeting(user.email)}</div>
      </div>
    </div>
  );
}
