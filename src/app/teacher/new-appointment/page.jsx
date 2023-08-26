"use client";

import Button from "@/UI/button";
import Heading from "@/UI/heading";
import { translations } from "@/utils/translations";

export default function NewAppointment() {
  return (
    <>
      <div className="space-y-2 flex flex-col items-center pb-2">
        <Heading size={"md"}>
          {translations.fieldLabels.teacherNavNewAppointment}
        </Heading>
        <Button action={() => {}}>
          {translations.buttonlabels.createAppointment}
        </Button>
      </div>
    </>
  );
}
