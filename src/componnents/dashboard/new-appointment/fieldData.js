import { translations } from "@/utils/translations";
import dateToDateInput from "@/utils/dateToDateInput";

export default function fieldData(newAppointment, setNewAppointment) {
  const patchNewAppointment = (newVals) => {
    setNewAppointment((prev) => {
      return {
        ...prev,
        ...newVals,
      };
    });
  };

  return {
    client: {
      changeAction: (val, details) => {
        patchNewAppointment({
          client_id: val,
          student_id: "",
          type: details ? details.default_appointment_type : "",
          location_type: details ? details.default_location_type : "",
          location: details ? details.default_location : "",
        });
      },
    },
    student: {
      client_id: newAppointment.client_id,
      changeAction: (val) => {
        patchNewAppointment({
          student_id: val,
        });
      },
      value: newAppointment.student_id,
    },
    type: {
      type: "dropdown",
      name: "type",
      label: translations.fieldLabels.appointmentType,
      value: newAppointment.type,
      changeAction: (val) => {
        patchNewAppointment({
          type: val,
        });
      },
      list: Object.keys(translations.fieldValues.appointmentType).map((key) => {
        return {
          id: key,
          value: translations.fieldValues.appointmentType[key],
        };
      }),
      required: true,
    },
    location: {
      type: "text",
      name: "location",
      label: translations.fieldLabels.appointmentLocation,
      value: newAppointment.location,
      changeAction: (val) => {
        patchNewAppointment({
          location: val,
        });
      },
      required: true,
    },
    location_type: {
      type: "dropdown",
      name: "location type",
      label: translations.fieldLabels.appointmentLocationType,
      value: newAppointment.location_type,
      changeAction: (val) => {
        patchNewAppointment({
          location_type: val,
        });
      },
      list: Object.keys(translations.fieldValues.appointmentLocationType).map(
        (key) => {
          return {
            id: key,
            value: translations.fieldValues.appointmentLocationType[key],
          };
        }
      ),
      required: true,
    },
    topic: {
      type: "text",
      name: "topic",
      label: translations.fieldLabels.appointmentTopic,
      value: newAppointment.topic,
      changeAction: (val) => {
        patchNewAppointment({
          topic: val,
        });
      },
    },
    start: {
      type: "datetime-local",
      name: "start",
      label: translations.fieldLabels.appointmentStart,
      value: dateToDateInput(newAppointment.startObj),
      changeAction: (val) => {
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
      },
      required: true,
    },
    duration: {
      type: "number",
      name: "duration",
      label: translations.fieldLabels.appointmentDurationAlt,
      value: newAppointment.duration,
      changeAction: (val) => {
        const endObj = new Date(
          newAppointment.startObj.valueOf() + val * 60 * 1000
        );
        patchNewAppointment({
          duration: val,
          endObj: endObj,
          end: endObj.valueOf(),
        });
      },
      required: true,
    },
    paid: {
      type: "checkbox",
      name: "paid",
      label: translations.fieldLabels.appointmentPaid,
      value: newAppointment.paid,
      changeAction: (val) => {
        patchNewAppointment({
          paid: val,
        });
      },
    },
    price: {
      type: "number",
      name: "price",
      label: translations.fieldLabels.appointmentPriceAlt,
      value: newAppointment.price,
      changeAction: (val) => {
        patchNewAppointment({
          price: val,
        });
      },
      required: true,
    },
  };
}
