"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [hasPWReset, setHasPWReset ] = useState(false);

  const supabase = createClientComponentClient();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`submitting ${email}, ${password}`);
    let signInAttempt = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log(signInAttempt);
  };
  const handleResetPassword = async ()=> {
    if(email){
      console.log(email);
      await supabase.auth.resetPasswordForEmail(email);
      setHasPWReset(true);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input name="email" onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">password</label>
        <input name="password" onChange={(e)=> setPassword(e.target.value)} />
        <button>login</button>
      </form>
      <a onClick={handleResetPassword}>reset password</a>
      {hasPWReset? <p>password reset email request for {email} sent to supabase</p>: null}
    </div>
  );
}
