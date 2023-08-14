"use client";
import Button from "@/UI/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function Logout({ setUser }) {
  const supabase = createClientComponentClient();

  const router = useRouter();

  const logout = async () => {
    supabase.auth.signOut()
      .then(()=>{
        setUser({});
        router.push("/login");
      })
      .catch(e=>console.log(e));
  };

  return (
    <>
      <Button action={logout}>sign out</Button>
    </>
  );
}
