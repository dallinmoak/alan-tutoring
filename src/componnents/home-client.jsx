"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Loading from "@/app/loading";
import Logout from "./logout";

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
      setUser(user);
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
        <div>
          Welcome, {user.email}
          <Logout setUser={setUser}/>
        </div>
      )}
    </div>
  );
}
