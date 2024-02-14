"use-client";
import Input from "./Input";
import Button from "./Button";
import login from "@/store/authentication/login";
import { FormEvent } from "react";
export default function LoginForm() {
  return (
    <form className="max-w-sm mx-auto" action={login}>
      <Input title={"Email"} type={"email"} name={"email"} />
      <Input title={"Password"} type={"password"} name={"password"} />
      <button type="submit">Login</button>
      {/* <Button title={"Login"} handleOnClick={login} /> */}
    </form>
  );
}
