import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();

const getClientById = async (id, idType) => {
  return new Promise((resolve, reject) => {
    supabase
      .from("clients")
      .select("*")
      .eq(idType, id)
      .then((res) => {
        if (res.data) {
          resolve(res.data[0]);
        } else {
          reject(res.error);
        }
      });
  });
};

export default getClientById;
