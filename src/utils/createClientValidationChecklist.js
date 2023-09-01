import { translations } from "./translations";

const checkList = (newAppointment) =>{
  return [
    {
      name: "no client",
      condition: !newAppointment.client_id,
      msg: `"${translations.fieldLabels.appointmentClient}" es obligatorio`,
    },
    {
      name: "no student",
      condition: !newAppointment.student_id,
      msg: `"${translations.fieldLabels.appointmentStudentName}" es obligatorio`,
    },
    {
      name: "no start date",
      condition: !newAppointment.start,
      msg: `"${translations.fieldLabels.appointmentStart}" es obligatorio`,
    },
    {
      name: "start date in past",
      condition:
        newAppointment.start - new Date().valueOf() <= 60 * 1000 * 30,
      msg: `"${translations.fieldLabels.appointmentStart}" debe ser más de 30 minutes en el futuro`,
    },
    {
      name: "no duration",
      condition: !newAppointment.duration,
      msg: `"${translations.fieldLabels.appointmentDurationAlt2}" es obligatorio`,
    },
    {
      name: "duration too short",
      condition: newAppointment.end - newAppointment.start <= 0,
      msg: `"${translations.fieldLabels.appointmentDurationAlt2}" debe ser más de 0 minutos`,
    },
    {
      name: "no type",
      condition: !newAppointment.type,
      msg: `"${translations.fieldLabels.appointmentType}" es obligatorio`,
    },
    {
      name: "no location type when in-person",
      condition: newAppointment.type == 'in-person' && !newAppointment.location_type,
      msg: `"${translations.fieldLabels.appointmentLocationType}" es obligatorio cuando "${translations.fieldLabels.appointmentType}" es "${translations.fieldValues.appointmentType["in-person"]}"`
    },
    {
      name: "no location when in-person",
      condition:
        newAppointment.type == "in-person" && !newAppointment.location,
      msg: `"${translations.fieldLabels.appointmentLocation}" es obligatorio cuando "${translations.fieldLabels.appointmentType}" es "${translations.fieldValues.appointmentType["in-person"]}"`,
    },
    {
      name: "no price",
      condition: !newAppointment.price,
      msg: `"${translations.fieldLabels.appointmentPriceAlt2}" es obligatorio`,
    },
  ];
} 

export default checkList