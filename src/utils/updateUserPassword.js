import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
const supabase = createClientComponentClient();

const updateUserPasswword = async (password) =>{
  return new Promise((resolve, reject)=>{
    supabase.auth.updateUser({password: password})
      .then((res)=>{
        if(res.data.user){
          resolve(res.data.user);
        } else {
          reject(res.error);
        }
      })
  })
}

export default updateUserPasswword;