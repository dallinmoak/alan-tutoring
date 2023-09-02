"use client";

import Button from "@/UI/button";
import { useEffect, useState } from "react";
import SelectClient from "./select-client";
import { translations } from "@/utils/translations";
import SelectStudent from "./select-student";
import checkList from "@/utils/createClientValidationChecklist";
import Field from "./field";
import fieldData from "./fieldData";
import appointmentDefault from "./defaults";

export default function AppointmentCreateForm({ hideForm, submitCreate }) {
  const [formIsValid, setIsValid] = useState(false);
  const [newAppointment, setNewAppointment] = useState(appointmentDefault);
  const [formErrors, setFormErrors] = useState();

  const submit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      submitCreate({
        teacher_id: newAppointment.teacher_id,
        start: newAppointment.start,
        end: newAppointment.end,
        type: newAppointment.type,
        paid: newAppointment.paid,
        price: newAppointment.price,
        location: newAppointment.location,
        location_type: newAppointment.location_type,
        topic: newAppointment.topic,
        client_id: newAppointment.client_id,
        student_id: newAppointment.student_id,
        duration: newAppointment.duration,
      });
    }
  };

  const validateForm = () => {
    setFormErrors(null);

    let formErrors;
    const addFormError = (e) => {
      if (!formErrors) formErrors = [e];
      else formErrors.push(e);
    };

    checkList(newAppointment).forEach((check) => {
      if (check.condition) {
        addFormError(check.msg);
        setIsValid(false);
      }
    });

    setFormErrors(formErrors);
    if (!formErrors) {
      setIsValid(true);
      return true;
    } else {
      return false;
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

  const fieldDataObj = fieldData(newAppointment, setNewAppointment);

  const handleClientChange = fieldDataObj.client.changeAction;

  const selectStudentData = fieldDataObj.student;
  const typeFieldData = fieldDataObj.type;
  const locationFieldData = fieldDataObj.location;
  const LocationTypeFieldData = fieldDataObj.location_type;
  const topicFieldData = fieldDataObj.topic;
  const StartDateFieldData = fieldDataObj.start;
  const durationFieldData = fieldDataObj.duration;
  const paidFieldData = fieldDataObj.paid;
  const priceFieldData = fieldDataObj.price;

  useEffect(() => {
    let newPrice;
    if (newAppointment.type == "online") {
      newPrice = appointmentDefault.defaultOnlinePrice;
    } else if (newAppointment.type == "in-person") {
      if (newAppointment.location_type == "near") {
        newPrice = appointmentDefault.defaultInPersonPrice.near;
      } else if ((newAppointment.location_type = "far")) {
        newPrice = appointmentDefault.defaultInPersonPrice.far;
      }
    }
    if (newPrice) {
      patchNewAppointment({
        price: newPrice,
      });
    }
  }, [
    newAppointment.location_type,
    newAppointment.location,
    newAppointment.type,
  ]);

  return (
    <>
      <div className="space-y-2 p-3 border  border-dark-shades- dark:border-light-shades- rounded-md w-[95%] max-w-md mx-1">
        {formIsValid ? "✅" : null}
        <form className="space-y-2" onSubmit={submit}>
          <SelectClient setSelection={handleClientChange} />
          <SelectStudent data={selectStudentData} />
          <Field data={typeFieldData} />
          {newAppointment.type == "in-person" ? (
            <>
              <Field data={locationFieldData} />
              <Field data={LocationTypeFieldData} />
            </>
          ) : null}
          <Field data={topicFieldData} />
          <Field data={StartDateFieldData} />
          <Field data={durationFieldData} />
          <Field data={paidFieldData} />
          <Field data={priceFieldData} />
          {formIsValid ? null : (
            <div className="flex flex-col items-end text-danger-darker dark:text-danger- text-end">
              {formErrors?.map((error, index) => {
                return <div key={index}>{error}</div>;
              })}
            </div>
          )}
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
