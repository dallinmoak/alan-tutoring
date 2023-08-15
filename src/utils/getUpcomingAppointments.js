import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();

const getUpcomingAppointments = async () => {
  return new Promise((resolve, reject) => {
    supabase
      .from("appointments_w_clients")
      .select("*")
      .gt("start", new Date().valueOf())
      .then((res) => {
        if (res.data) {
          resolve(res.data);
        } else {
          reject(res.error);
        }
      });
  });
};

export default getUpcomingAppointments;