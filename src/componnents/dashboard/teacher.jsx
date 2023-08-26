"use client";

import { useEffect, useState } from "react";
import AppointmentList from "./appointment-list/list";
import Heading from "@/UI/heading";
import { translations } from "@/utils/translations";
import getTeacherById from "@/utils/getTeacherById";

export default function TeacherDash({ user, children }) {
  return (
    <div className="w-full max-w-lg">
      <div className="pt-1">
        <div className="flex flex-col items-center">{children}</div>
      </div>
    </div>
  );
}
