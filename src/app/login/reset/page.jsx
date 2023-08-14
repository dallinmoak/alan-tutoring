"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import getURL from "@/utils/getURL";
import Button from "@/UI/button";
import Form from "@/UI/form";
import FormInput from "@/UI/input";
import Message from "@/UI/message";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const searchParams = useSearchParams();
  const supabase = createClientComponentClient();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const options = {
      redirectTo: getURL("/update-password"),
    };
    console.log("reset options", options);
    supabase.auth.resetPasswordForEmail(email, options)
      .then(()=>{
        setMessage(`check the inbox of ${email} for a password reset link`)
      });
    ;
  };

  useEffect(() => {
    setEmail(searchParams.get("email"));
  }, []);

  return (
    <>
      <Form submitAction={handleResetPassword}>
        <FormInput
          info={{
            label: "Email",
            name: "email",
            changeAction: setEmail,
            defaultValue: email,
            type: "text",
          }}
        />
        <Button>reset password</Button>
      </Form>
      <div className="flex flex-col items-center">
        {message ? <Message type="success">{message}</Message> : null}
      </div>
    </>
  );
}
