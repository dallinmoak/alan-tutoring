"use client";

import Button from "@/UI/button";
import FormInput from "@/UI/input";
import { useEffect, useState } from "react";
import SelectClient from "./select-client";
import { translations } from "@/utils/translations";
import Dropdown from "@/UI/dropdown";
import dateToDateInput from "@/utils/dateToDateInput";
import Checkbox from "@/UI/checkbox";
import SelectStudent from "./select-student";

export default function AppointmentCreateForm({ hideForm, submitCreate }) {
  const defaultDuration = 60;
  const defaultStartObj = new Date();
  const defaultEndObj = new Date(
    defaultStartObj.valueOf() + defaultDuration * 60 * 1000
  );

  const appointmentDefault = {
    teacher_id: "TODO",
    client_id: null,
    startObj: defaultStartObj,
    start: defaultStartObj.valueOf(),
    duration: defaultDuration,
    endObj: defaultEndObj,
    end: defaultEndObj.valueOf(),
    type: null,
    paid: false,
    location: null,
    topic: null,
    price: 0,
    google_id: "TODO",
  };

  const [formIsValid, setIsValid] = useState(false);
  const [newAppointment, setNewAppointment] = useState(appointmentDefault);

  const submit = (e) => {
    e.preventDefault();
    vali;
    if (formIsValid) {
      submitCreate({ newAppointment });
    }
  };

  const validateFieldChange = () => {
    if (!newAppointment.client_id) {
      console.log("no client");
      setIsValid(false);
    } else if (!newAppointment.student_id) {
      console.log("no student");
      setIsValid(false);
    } else if (!newAppointment.start) {
      console.log("no start date");
      setIsValid(false);
    } else if (newAppointment.start - new Date().valueOf() <= 60 * 1000 * 30) {
      console.log("start date is less that 30 minutes away");
      setIsValid(false);
    } else if (newAppointment.end - newAppointment.start <= 0) {
      console.log("duration is less than 0 minutes");
      setIsValid(false);
    } else if (!newAppointment.type) {
      console.log("no type");
      setIsValid(false);
    } else if (newAppointment.type == "in-person" && !newAppointment.location) {
      console.log("type is in-person and no location");
      setIsValid(false);
    } else if (!newAppointment.price) {
      console.log("no price");
    } else {
      console.log("all good");
      setIsValid(true);
    }
  };

  const patchNewAppointment = (newVals) => {
    setNewAppointment((prev) => {
      return {
        ...prev,
        ...newVals,
      };
    });
  };

  const prepAppointmentTypeList = () => {
    return Object.keys(translations.fieldValues.appointmentType).map((key) => {
      return {
        id: key,
        value: translations.fieldValues.appointmentType[key],
      };
    });
  };

  const handleClientChange = (val) => {
    patchNewAppointment({
      client_id: val,
      student_id: "",
    });
  };
  const handleStudentChange = (val) => {
    patchNewAppointment({
      student_id: val,
    });
  };
  const handleStartChange = (val) => {
    const startObj = new Date(val);
    const endObj = new Date(startObj.valueOf() + (newAppointment.duration * 60 * 1000));
    patchNewAppointment({
      start: startObj.valueOf(),
      startObj: startObj,
      end: endObj.valueOf(),
      endObj: endObj,
    });
  };
  const handleDurationChange = (val) => {
    const endObj = new Date(
      newAppointment.startObj.valueOf() + val * 60 * 1000
    );
    patchNewAppointment({
      duration: val,
      endObj: endObj,
      end: endObj.valueOf(),
    });
  };

  const handleTypeChange = (val) => {
    patchNewAppointment({
      type: val,
    });
  };

  const handleLocationChange = (val) => {
    patchNewAppointment({
      location: val,
    });
  };

  const handlePaidChange = (val) => {
    patchNewAppointment({
      paid: val,
    });
  };

  const handlePriceChange = (val) => {
    patchNewAppointment({
      price: val,
    });
  };

  useEffect(() => {
    validateFieldChange();
  }, [newAppointment]);

  return (
    <>
      <div className="space-y-2 p-3 border border-light-shades- rounded-md w-[95%] max-w-md mx-1">
        {formIsValid ? "✅" : "❌"}
        <form className="space-y-2" onSubmit={submit}>
          <SelectClient setSelection={handleClientChange} />
          {newAppointment.client_id ? (
            <SelectStudent
              client_id={newAppointment.client_id}
              changeAction={handleStudentChange}
              value={newAppointment.student_id}
            />
          ) : null}
          <FormInput
            info={{
              name: "start",
              label: translations.fieldLabels.appointmentStart,
              changeAction: handleStartChange,
              defaultValue: dateToDateInput(defaultStartObj),
              type: "datetime-local",
            }}
          />
          <FormInput
            info={{
              name: "duration",
              label: translations.fieldLabels.appointmentDurationAlt,
              changeAction: handleDurationChange,
              defaultValue: defaultDuration,
              type: "number",
            }}
          />
          <Dropdown
            name={"type"}
            label={translations.fieldLabels.appointmentType}
            list={prepAppointmentTypeList()}
            changeAction={handleTypeChange}
            value={newAppointment.type}
          />
          {newAppointment.type == "in-person" ? (
            <FormInput
              info={{
                name: "location",
                label: translations.fieldLabels.appointmentLocation,
                changeAction: handleLocationChange,
                defaultValue: appointmentDefault.location,
                type: "text",
              }}
            />
          ) : null}
          <Checkbox
            label={translations.fieldLabels.appointmentPaid}
            action={handlePaidChange}
            editable={true}
            value={appointmentDefault.paid}
          />
          <FormInput
            info={{
              name: "price",
              label: translations.fieldLabels.appointmentPriceAlt,
              changeAction: handlePriceChange,
              defaultValue: appointmentDefault.price,
              type: "number",
            }}
          />
          <div className="flex justify-between">
            <Button btype="danger" action={hideForm}>
              {translations.buttonlabels.cancelForm}
            </Button>
            <Button btype="success" type="submit">
              {translations.buttonlabels.formSubmit}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
