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
  location_type: null,
  topic: null,
  price: 0,
  google_id: "TODO",
  defaultOnlinePrice: 400,
  defaultInPersonPrice: {
    near: 500,
    far: 600,
  },
};

export default appointmentDefault;
