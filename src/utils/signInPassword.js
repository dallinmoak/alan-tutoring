import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
const supabase = createClientComponentClient();

const signInPassword = async(loginObj) =>{
  return new Promise((resolve, reject)=>{
    supabase.auth.signInWithPassword(loginObj)
      .then(res=>{
        if(!res.error){
          resolve(res.data);
        } else{
          reject(res.error);
        }
      })
  })
}

export default signInPassword;