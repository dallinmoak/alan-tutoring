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
import checkList from "@/utils/createClientValidationChecklist";

export default function AppointmentCreateForm({ hideForm, submitCreate }) {
  const defaultDuration = 60;
  const defaultStartObj = new Date();
  const defaultEndObj = new Date(
    defaultStartObj.valueOf() + defaultDuration * 60 * 1000
  );
  const defaultOnlinePrice = 400;
  const defaultInPersonPrice = {
    near: 500,
    far: 600,
  };

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
    location_type: null,
    topic: null,
    price: 0,
    google_id: "TODO",
  };

  const [formIsValid, setIsValid] = useState(false);
  const [newAppointment, setNewAppointment] = useState(appointmentDefault);
  const [formErrors, setFormErrors] = useState();

  const submit = (e) => {
    e.preventDefault();
    if (formIsValid) {
      submitCreate({ newAppointment });
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

    if (!formErrors) setIsValid(true);
    setFormErrors(formErrors);
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

  const handleClientChange = (val, details) => {
    patchNewAppointment({
      client_id: val,
      student_id: "",
      type: details ? details.default_appointment_type : "",
      location_type: details ? details.default_location_type : "",
      location: details ? details.default_location : "",
    });
  };

  const handleStudentChange = (val) => {
    patchNewAppointment({
      student_id: val,
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

  const handleLocationTypeChange = (val) => {
    patchNewAppointment({
      location_type: val,
    });
  };

  const handleTopicChange = (val) => {
    patchNewAppointment({
      topic: val,
    });
  };

  const handleStartChange = (val) => {
    const startObj = new Date(val);
    const endObj = new Date(
      startObj.valueOf() + newAppointment.duration * 60 * 1000
    );
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
    let newPrice;
    if (newAppointment.type == "online") {
      newPrice = defaultOnlinePrice;
    } else if (newAppointment.type == "in-person") {
      if (newAppointment.location_type == "near") {
        newPrice = defaultInPersonPrice.near;
      } else if ((newAppointment.location_type = "far")) {
        newPrice = defaultInPersonPrice.far;
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
          {newAppointment.client_id ? (
            <SelectStudent
              client_id={newAppointment.client_id}
              changeAction={handleStudentChange}
              value={newAppointment.student_id}
            />
          ) : null}
          <Dropdown
            name={"type"}
            label={translations.fieldLabels.appointmentType}
            list={prepAppointmentTypeList()}
            changeAction={handleTypeChange}
            value={newAppointment.type}
          />
          {newAppointment.type == "in-person" ? (
            <>
              <FormInput
                info={{
                  name: "location",
                  label: translations.fieldLabels.appointmentLocation,
                  changeAction: handleLocationChange,
                  defaultValue: appointmentDefault.location,
                  value: newAppointment.location,
                  type: "text",
                }}
              />
              <Dropdown
                name={"location type"}
                label={translations.fieldLabels.appointmentLocationType}
                list={[
                  {
                    id: "near",
                    value:
                      translations.fieldValues.appointmentLocationType.near,
                  },
                  {
                    id: "far",
                    value: translations.fieldValues.appointmentLocationType.far,
                  },
                ]}
                changeAction={handleLocationTypeChange}
                value={newAppointment.location_type}
              />
            </>
          ) : null}
          <FormInput
            info={{
              name: "topic",
              label: translations.fieldLabels.appointmentTopic,
              changeAction: handleTopicChange,
              defaultValue: appointmentDefault.topic,
              value: newAppointment.topic,
              type: "text",
            }}
          />
          <FormInput
            info={{
              name: "start",
              label: translations.fieldLabels.appointmentStart,
              changeAction: handleStartChange,
              defaultValue: dateToDateInput(defaultStartObj),
              value: dateToDateInput(newAppointment.startObj),
              type: "datetime-local",
            }}
          />
          <FormInput
            info={{
              name: "duration",
              label: translations.fieldLabels.appointmentDurationAlt,
              changeAction: handleDurationChange,
              defaultValue: defaultDuration,
              value: newAppointment.duration,
              type: "number",
            }}
          />
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
              value: newAppointment.price,
              type: "number",
            }}
          />
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
            <div className="flex space-x-1">
              <Button action={validateForm}>validate</Button>
              <Button btype="success" type="submit">
                {translations.buttonlabels.formSubmit}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
