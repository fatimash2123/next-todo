"use client";
import Input from "./Input";
import Button from "./Button";
import login from "@/store/authentication/login";
import { useFormState, useFormStatus } from "react-dom";
export default function LoginForm() {
  // @ts-ignore
  const [errorMessage, dispatch] = useFormState(login);
  console.log("errorMessage", errorMessage);
  return (
    <form className="max-w-sm mx-auto" action={dispatch}>
      <Input title={"Email"} type={"email"} name={"email"} />
      <Input title={"Password"} type={"password"} name={"password"} />
      {/*  @ts-ignore */}
      {/* <div>{errorMessage && <p>{errorMessage} ii</p>}</div> */}
      {errorMessage && (
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <span className="font-medium">Danger alert!</span> Change a few things
          up and try submitting again.
        </div>
      )}
      <Button title={"Login"} />
      <LoginButton />
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  console.log("pending=", pending);
  return (
    <button aria-disabled={pending} type="submit">
      Login
    </button>
  );
}
