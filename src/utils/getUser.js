import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();

const getUser = async () =>{
  return new Promise ((resolve, reject)=>{
    supabase.auth.getUser()
    .then(res=>{
      if(res.data.user){
        resolve(res.data.user);
      } else {
        reject(res.error);
      }
    })
  })
}

export default getUser;