"use client";

import TeacherDash from "@/componnents/dashboard/teacher";
import { useEffect, useState } from "react";
import Loading from "../loading";
import getUserWithRole from "@/utils/getUserWithRole";
import Logout from "@/componnents/logout";

export default function TeacherPage() {
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

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <TeacherDash user={user} />
          <Logout  setUser={setUser} />
        </>
      )}
    </>
  );
}
