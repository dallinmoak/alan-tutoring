"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useState } from "react";
import Button from "@/UI/button";
import Form from "@/UI/form";
import FormInput from "@/UI/input";
import Message from "@/UI/message";
import updateUserPasswword from "@/utils/updateUserPassword";
import { translations } from "@/utils/translations";

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
            content: translations.messages.updatePasswordSuccess,
          })
        })
        .catch((e)=>{
          console.log(e);
          setMessage({
            type: "error",
            content: translations.messages.updatePasswordFailure(JSON.stringify(e))
          })
        })
    }
  };
  return (
    <div className="space-y-4">
      <Form submitAction={handleSubmit}>
        <FormInput
          info={{
            label: translations.fieldLabels.newPassword,
            name: "newpassword",
            changeAction: setNewPassword,
            defaultValue: "",
            type: "password",
          }}
        />
        <Button>{translations.buttonlabels.setNewPassword}</Button>
      </Form>
      <div className="flex flex-col items-center">
        {message ? (
          <>
            <Message type={message.type}>{message.content}</Message>
            <Button>
              <Link href="/">{translations.buttonlabels.home}</Link>
            </Button>
          </>
        ) : null}
      </div>
    </div>
  );
}
