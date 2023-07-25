"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function Logout({ setUser }) {
  const supabase = createClientComponentClient();

  const router = useRouter();

  const logout = async () => {
    const logoutAttepmt = await supabase.auth.signOut();
    setUser({});
    router.push('/login')
  };

  return <button onClick={logout}>sign out</button>;
}
