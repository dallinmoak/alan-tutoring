import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();

const getAllItems = async (from,select = "*") => {
  return new Promise((resolve, reject) =>{
    supabase
      .from(from)
      .select(select)
      .then((res)=>{
        if(res.data) {
          resolve(res.data);
        } else {
          reject(res.error);
        }
      });
  });
};

export default getAllItems;