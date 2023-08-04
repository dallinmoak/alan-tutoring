"use client";

import { useEffect } from "react";
import AppointmentList from "./appointment-list/list";
import Heading from "@/UI/heading";

export default function TeacherDash({ user }) {
  useEffect(() => {
    document.title = "Teacher Dashboard | Alan Tutoring";
  }, []);
  return (
    <div className="w-full max-w-lg">
      <Heading size="lg">Teacher Dashboard</Heading>
      <div className="flex justify-center">
        <div>Welcome, {user.email}</div>
      </div>
      <div className="p-1">
        <AppointmentList />
      </div>
    </div>
  );
}
