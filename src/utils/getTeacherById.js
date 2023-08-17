import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();

const getTeacherById = async (id) => {
  return new Promise((resolve, reject) => {
    supabase
      .from("teachers")
      .select("*")
      .eq("user_id", id)
      .then((res) => {
        if (res.data) {
          resolve(res.data[0]);
        } else {
          reject(res.error);
        }
      });
  });
};

export default getTeacherById;
