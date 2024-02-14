"use client";
import Input from "./Input";
import Button from "./Button";
import login from "@/store/authentication/login";
import { useFormState } from "react-dom";
export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(login);
  console.log("errorMessage", errorMessage);
  return (
    <form className="max-w-sm mx-auto" action={dispatch}>
      <Input title={"Email"} type={"email"} name={"email"} />
      <Input title={"Password"} type={"password"} name={"password"} />
      {errorMessage && (
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
          role="alert"
        >
          {errorMessage}
        </div>
      )}
      <Button title={"Login"} />
    </form>
  );
}
