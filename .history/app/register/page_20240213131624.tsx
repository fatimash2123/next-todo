"use client";
import Input from "../../components/Input";
import Button from "../../components/Button";
import MainHeading from "../../components/MainHeading";
import registerOnServer from "@/store/authentication/register";
import { useRef } from "react";
export default async function Register() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const cpasswordRef = useRef();

  const register = async () => {
    console.log("name=", nameRef);
    await registerOnServer({
      name: "fatima",
      email: "fatima@gmail.com",
      password: "abc",
    });
  };

  return (
    <>
      <MainHeading title={"Register"} />
      <form className="max-w-sm mx-auto">
        <Input title={"Name"} type={"text"} name={"name"} ref={nameRef} />
        <Input title={"Email"} type={"email"} name={"email"} ref={emailRef} />
        <Input
          title={"Password"}
          type={"password"}
          name={"password"}
          ref={passwordRef}
        />
        <Input
          title={"Confirm Password"}
          type={"password"}
          name={"cpassword"}
          ref={cpasswordRef}
        />
        <Button title={"Register"} handleOnClick={register} />
      </form>
    </>
  );
}
