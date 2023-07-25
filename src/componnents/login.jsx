"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loginError, setLoginError] = useState("");

  const supabase = createClientComponentClient();

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let signInAttempt = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (signInAttempt.error) {
      setLoginError("sign in attempt error");
    } else {
      router.push("/");
    }
  };
  const handleResetPassword = () => {
    const params = new URLSearchParams({ email: email }).toString();
    router.push(`/login/reset?${params}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input name="email" onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">password</label>
        <input name="password" onChange={(e) => setPassword(e.target.value)} />
        <button>login</button>
        {loginError ? <p>{loginError}</p> : null}
      </form>
      <a onClick={handleResetPassword}>reset password</a>
    </div>
  );
}
