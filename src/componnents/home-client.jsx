"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Loading from "@/app/loading";
import Logout from "./logout";
import TeacherDash from "./dashboard/teacher";
import ClientDash from "./dashboard/client";

export default function HomeClient() {
  const supabase = createClientComponentClient();
  const sendToLogin = (router) => {
    router.push("/login");
  };

  const checkUser = async (router) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      sendToLogin(router);
    } else {
      // #TODO get user application role from role table here
      if(true){
        setUser({...user, appRole: "teacher"});
      } else {
        setUser(user);
      }
      setLoading(false);
    }
  };

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  useEffect(() => {
    setLoading(true);
    checkUser(router);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col items-center gap-1">
          {user.appRole== "teacher" ? <TeacherDash user={user} /> : <ClientDash />}
          <div>
            <Logout setUser={setUser} />
          </div>
        </div>
      )}
    </div>
  );
}
