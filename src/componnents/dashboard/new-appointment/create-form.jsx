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
import getUser from "@/utils/getUser";

export default function AppointmentCreateForm({ hideForm, submitCreate }) {
  const [formIsValid, setIsValid] = useState(false);
  const [newAppointment, setNewAppointment] = useState(appointmentDefault);
  const [formErrors, setFormErrors] = useState();

  const submit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      hideForm();
      try {
        const user = await getUser();
        const teacher_id = user.id;
        if (teacher_id) {
          submitCreate({
            teacher_id: teacher_id,
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
            // duration: newAppointment.duration,
            google_id: "TODO",
          },{ detailsForCalendar: {
            student_name: newAppointment.student_name,
            client_name: newAppointment.client_name,
          }});
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const validateForm = () => {
    setFormErrors(null);

    let formErrors;
    const addFormError = (e) => {
      if (!formErrors) formErrors = e;
      else formErrors = { ...formErrors, ...e };
    };

    checkList(newAppointment).forEach((check) => {
      if (check.condition) {
        let error = {};
        error[check.field] = check.msg;
        addFormError(error);
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

  const selectClientData = fieldDataObj.client;
  const selectStudentData = fieldDataObj.student;
  const typeFieldData = fieldDataObj.type;
  const locationFieldData = fieldDataObj.location;
  const locationTypeFieldData = fieldDataObj.location_type;
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
        {/* {formIsValid ? "✅" : null} */}
        <form className="space-y-2" onSubmit={submit}>
          <SelectClient
            data={{
              ...selectClientData,
              error: {
                state: formErrors?.client ? true : false,
                msg: formErrors?.client ? formErrors?.client : "",
              },
            }}
          />
          <SelectStudent
            data={{
              ...selectStudentData,
              error: {
                state: formErrors?.student ? true : false,
                msg: formErrors?.student ? formErrors?.student : "",
              },
            }}
          />
          <Field
            data={{
              ...typeFieldData,
              error: {
                state: formErrors?.type ? true : false,
                msg: formErrors?.type ? formErrors?.type : "",
              },
            }}
          />
          {newAppointment.type == "in-person" ? (
            <>
              <Field
                data={{
                  ...locationFieldData,
                  error: {
                    state: formErrors?.location ? true : false,
                    msg: formErrors?.location ? formErrors?.location : "",
                  },
                }}
              />
              <Field
                data={{
                  ...locationTypeFieldData,
                  error: {
                    state: formErrors?.location_type ? true : false,
                    msg: formErrors?.location_type
                      ? formErrors?.location_type
                      : "",
                  },
                }}
              />
            </>
          ) : null}
          <Field
            data={{
              ...topicFieldData,
              error: {
                state: formErrors?.topic ? true : false,
                msg: formErrors?.topic ? formErrors?.topic : "",
              },
            }}
          />
          <Field
            data={{
              ...StartDateFieldData,
              error: {
                state: formErrors?.start ? true : false,
                msg: formErrors?.start ? formErrors?.start : "",
              },
            }}
          />
          <Field
            data={{
              ...durationFieldData,
              error: {
                state: formErrors?.duration ? true : false,
                msg: formErrors?.duration ? formErrors?.duration : "",
              },
            }}
          />
          <Field data={paidFieldData} />
          <Field
            data={{
              ...priceFieldData,
              error: {
                state: formErrors?.price ? true : false,
                msg: formErrors?.price ? formErrors?.price : "",
              },
            }}
          />
          {formIsValid ? null : (
            <div className="flex flex-col items-end text-danger-darker dark:text-danger- text-end">
              {formErrors
                ? Object.values(formErrors).map((error, index) => {
                    return <div key={index}>{`${error}`}</div>;
                  })
                : null}
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
