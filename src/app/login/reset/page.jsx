"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'
import getURL from "@/utils/getURL";

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage ] = useState('');

  const searchParams = useSearchParams()
  const supabase = createClientComponentClient();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: getURL("/update-password"),
    });
    setMessage(`check the inbox of ${email} for a password reset link`);
  };

  useEffect(()=>{
    setEmail(searchParams.get('email'))
  },[])

  return (
    <>
    
    <form onSubmit={handleResetPassword}>
      <label htmlFor="email">Email</label>
      <input type="text" name="email" onChange={(e)=> setEmail(e.target.value)} defaultValue={email} />
      <button>reset password</button>
    </form>
    {message? <p>{message}</p>: null}
    </>
  );
}
