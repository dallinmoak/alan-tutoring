"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useState } from "react";

export default function UpdatePassword() {
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const supabase = createClientComponentClient();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword) {
      const { data, error } = await supabase.auth.updateUser({
        password: newPassword,
      });
      console.log(data, error);
      if (data) {
        setMessage("Password Updated. You are now signed in");
      }
      if (error) {
        setMessage("there was an error");
      }
    }
  };
  return (
    <div>
      <h1>update Password</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newpassword">New Password</label>
        <input
          name="newpassword"
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button>set new password</button>
      </form>
      {message ? (
        <div>
          <p>{message}</p>
          <Link href="/">Home</Link>
        </div>
      ) : null}
    </div>
  );
}
