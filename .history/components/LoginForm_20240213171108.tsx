"use-client";
import Input from "./Input";
import Button from "./Button";
import login from "@/store/authentication/login";
import { FormEvent } from "react";
export default function LoginForm() {
  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <form className="max-w-sm mx-auto">
      <Input title={"Email"} type={"email"} name={"email"} />
      <Input title={"Password"} type={"password"} name={"password"} />
      <Button title={"Login"} handleOnClick={login} />
    </form>
  );
}
