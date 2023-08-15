"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useState } from "react";
import Button from "@/UI/button";
import Form from "@/UI/form";
import FormInput from "@/UI/input";
import Message from "@/UI/message";
import updateUserPasswword from "@/utils/updateUserPassword";

export default function UpdatePassword() {
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState({});

  const supabase = createClientComponentClient();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword) {
      updateUserPasswword(newPassword)
        .then((res)=>{
          console.log(res);
          setMessage({
            type: "success",
            content: "Password Updated. You are now signed in",
          })
        })
        .catch((e)=>{
          console.log(e);
          setMessage({
            type: "error",
            content: `update error: ${JSON.stringify(e)}`
          })
        })
    }
  };
  return (
    <div className="space-y-4">
      <Form submitAction={handleSubmit}>
        <FormInput
          info={{
            label: "New Password",
            name: "newpassword",
            changeAction: setNewPassword,
            defaultValue: "",
            type: "password",
          }}
        />
        <Button>set new password</Button>
      </Form>
      <div className="flex flex-col items-center">
        {message ? (
          <>
            <Message type={message.type}>{message.content}</Message>
            <Button>
              <Link href="/">Home</Link>
            </Button>
          </>
        ) : null}
      </div>
    </div>
  );
}
