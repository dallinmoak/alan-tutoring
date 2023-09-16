"use client";

import TeacherDash from "@/componnents/dashboard/teacher";
import ClientDash from "./client";
import { useEffect, useState } from "react";
import getUserWithRole from "@/utils/getUserWithRole";
import Logout from "@/componnents/logout";
import Loading from "@/app/loading";

export default function UserDash({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const getUserWithRoleWrapper = () => {
    getUserWithRole()
      .then((res) => {
        setUser(res);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getUserWithRoleWrapper();
  }, []);

  const userDashboards = {
    client: <ClientDash user={user}>{children}</ClientDash>,
    teacher: <TeacherDash user={user}>{children}</TeacherDash>,
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {userDashboards[user.appRole]}
          <Logout setUser={setUser} />
        </>
      )}
    </>
  );
}
