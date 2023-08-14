"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/UI/button";
import Form from "@/UI/form";
import FormInput from "@/UI/input";
import Message from "@/UI/message";
import signInPassword from "@/utils/signInPassword";

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loginError, setLoginError] = useState("");

  const supabase = createClientComponentClient();

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    signInPassword({email: email, password: password})
      .then(()=>{
        router.push('/');
      })
      .catch(e=>{
        setLoginError(`sign in error: ${JSON.stringify(e)}`);
      })
  };
  const handleResetPassword = () => {
    const params = new URLSearchParams({ email: email }).toString();
    router.push(`/login/reset?${params}`);
  };
  return (
    <div className="space-y-4">
      <Form submitAction={handleSubmit}>
        <FormInput
          info={{
            label: "Email",
            name: "email",
            changeAction: setEmail,
            defaultValue: "",
            type: "text",
          }}
        />
        <FormInput
          info={{
            label: "Password",
            name: "password",
            changeAction: setPassword,
            defaultValue: "",
            type: "password",
          }}
        />
        <Button>login</Button>
        {loginError ? <Message type="error">{loginError}</Message> : null}
      </Form>
      <div className="flex flex-col items-center">
        <Button action={handleResetPassword}>reset password</Button>
      </div>
    </div>
  );
}
