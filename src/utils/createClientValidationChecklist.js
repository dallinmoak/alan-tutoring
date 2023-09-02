import { translations } from "./translations";

const checkList = (newAppointment) =>{
  return [
    {
      field: "client",
      condition: !newAppointment.client_id,
      msg: `"${translations.fieldLabels.appointmentClient}" es obligatorio`,
    },
    {
      field: "student",
      condition: newAppointment.client_id && !newAppointment.student_id,
      msg: `"${translations.fieldLabels.appointmentStudentName}" es obligatorio`,
    },
    {
      field: "start",
      condition: !newAppointment.start,
      msg: `"${translations.fieldLabels.appointmentStart}" es obligatorio`,
    },
    {
      field: "start",
      condition:
        newAppointment.start - new Date().valueOf() <= 60 * 1000 * 30,
      msg: `"${translations.fieldLabels.appointmentStart}" debe ser más de 30 minutes en el futuro`,
    },
    {
      field: "duration",
      condition: newAppointment.end - newAppointment.start <= 0,
      msg: `"${translations.fieldLabels.appointmentDurationAlt2}" debe ser más de 0 minutos`,
    },
    {
      field: "duration",
      condition: !newAppointment.duration,
      msg: `"${translations.fieldLabels.appointmentDurationAlt2}" es obligatorio`,
    },
    {
      field: "type",
      condition: !newAppointment.type,
      msg: `"${translations.fieldLabels.appointmentType}" es obligatorio`,
    },
    {
      field: "location_type",
      condition: newAppointment.type == 'in-person' && !newAppointment.location_type,
      msg: `"${translations.fieldLabels.appointmentLocationType}" es obligatorio cuando "${translations.fieldLabels.appointmentType}" es "${translations.fieldValues.appointmentType["in-person"]}"`
    },
    {
      field: "location",
      condition:
        newAppointment.type == "in-person" && !newAppointment.location,
      msg: `"${translations.fieldLabels.appointmentLocation}" es obligatorio cuando "${translations.fieldLabels.appointmentType}" es "${translations.fieldValues.appointmentType["in-person"]}"`,
    },
    {
      field: "price",
      condition: !newAppointment.price,
      msg: `"${translations.fieldLabels.appointmentPriceAlt2}" es obligatorio`,
    },
  ];
} 

export default checkList