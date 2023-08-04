const appointmentsRaw = [
  {
    startDateTime: new Date("August 1, 2023 13:30:00 GMT-6:00"),
    endDateTime: new Date("August 1, 2023 14:00:00 GMT-6:00"),
    title: "",
    description: "",
    type: "online",
    location: "",
    clientId: "1",
    googleId: "1",
  },
  {
    startDateTime: new Date("August 1, 2023 09:00:00 GMT-6:00"),
    endDateTime: new Date("August 1, 2023 09:30:00 GMT-6:00"),
    title: "",
    description: "",
    type: "in-person",
    location: "123 Main Street",
    clientId: "1",
    googleId: "1",
  },
  {
    startDateTime: new Date("August 3, 2023 12:30:00 GMT-6:00"),
    endDateTime: new Date("August 3, 2023 13:00:00 GMT-6:00"),
    title: "",
    description: "",
    type: "online",
    location: "",
    clientId: "2",
    googleId: "1",
  }
];

const appointments = appointmentsRaw.sort((a,b) => a.startDateTime.valueOf() - b.startDateTime.valueOf());

export default appointments;