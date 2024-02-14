"use client";
import Input from "./Input";
import Button from "./Button";
import login from "@/store/authentication/login";
import { useFormState, useFormStatus } from "react-dom";
export default function LoginForm() {
  // @ts-ignore
  const [errorMessage, dispatch] = useFormState(login, undefined);
  return (
    <form className="max-w-sm mx-auto" action={login}>
      <Input title={"Email"} type={"email"} name={"email"} />
      <Input title={"Password"} type={"password"} name={"password"} />
      {/* <button type="submit">Login</button> */}
      <Button title={"Login"} />
    </form>
  );
}
