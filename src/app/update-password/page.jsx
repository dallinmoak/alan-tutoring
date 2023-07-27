"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useState } from "react";
import Button from "@/UI/button";
import Form from "@/UI/form";
import FormInput from "@/UI/input";
import Message from "@/UI/message";

export default function UpdatePassword() {
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState({});

  const supabase = createClientComponentClient();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword) {
      const { data, error } = await supabase.auth.updateUser({
        password: newPassword,
      });
      console.log(data, error);
      if (data) {
        setMessage({
          type: "success",
          content: "Password Updated. You are now signed in",
        });
      }
      if (error) {
        setMessage({ type: "error", content: "there was an error" });
      }
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
            type: "text",
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
