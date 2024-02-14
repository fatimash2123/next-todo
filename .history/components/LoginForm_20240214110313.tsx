"use client";
import Input from "./Input";
import Button from "./Button";
import login from "@/store/authentication/login";
import { useFormState, useFormStatus } from "react-dom";
export default function LoginForm() {
  // @ts-ignore
  const [errorMessage, dispatch] = useFormState(login, undefined);
  console.log("errorMessage", errorMessage);
  return (
    <form className="max-w-sm mx-auto" action={login}>
      <Input title={"Email"} type={"email"} name={"email"} />
      <Input title={"Password"} type={"password"} name={"password"} />
      {/*  @ts-ignore */}
      <div>{errorMessage && <p>{errorMessage} ii</p>}</div>
      {/* <Button title={"Login"} /> */}
      <LoginButton />
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button aria-disabled={pending} type="submit">
      Login
    </button>
  );
}
