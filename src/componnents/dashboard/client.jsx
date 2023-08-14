"use client";

import { useEffect } from "react";
import Heading from "@/UI/heading";

export default function ClientDash({ user }) {
  useEffect(() => {
    document.title = "Client Dashboard | Alan Tutoring";
  }, []);

  return (
    <div className="w-full max-w-lg">
      <Heading size="lg">Client Dashboard</Heading>
      <div className="flex justify-center">
        <div>Welcome, {user.email}</div>
      </div>
    </div>
  );
}
