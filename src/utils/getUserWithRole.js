import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import getUser from "./getUser";

const supabase = createClientComponentClient();

const getRole = async (id) =>{
  return new Promise((resolve, reject)=>{
    supabase
      .from('app_roles')
      .select("*")
      .eq("user_id", id)
      .then((res)=>{
        if(res.data){
          resolve(res.data);
        } else {
          reject(res.error);
        }
      })
      .catch(e=>console.log(e));
  })
}

const getUserWithRole = async () => {
  return new Promise ((resolve, reject)=>{
    getUser()
      .then((res)=>{
        const user = res;
        getRole(user.id)
          .then((res)=>{
            resolve({...user, appRole: res[0].role});
          })
          .catch((e)=>{
            reject(e);
          })
      })
      .catch(e=>reject({msg: "not authenticated (user not found)", error: e}));
  })
};

export default getUserWithRole