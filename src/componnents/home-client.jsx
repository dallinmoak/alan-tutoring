"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Loading from "@/app/loading";
import Logout from "./logout";
import TeacherDash from "./dashboard/teacher";
import ClientDash from "./dashboard/client";
import getUserWithRole from "@/utils/getUserWithRole";

export default function HomeClient() {
  const sendToLogin = (router) => {
    router.push("/login");
  };

  const checkUser = async (router) => {
    getUserWithRole()
      .then((res) => {
        setUser(res);
      })
      .catch((e) => {
        console.log(e);
        sendToLogin(router);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  useEffect(() => {
    checkUser(router);
  }, []);

  const displayDashboards = {
    teacher: <TeacherDash user={user} />,
    client: <ClientDash user={user}/>,
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col items-center gap-1">
          {displayDashboards[user.appRole]}
          <div>
            <Logout setUser={setUser} />
          </div>
        </div>
      )}
    </div>
  );
}
