"use-client";
import Input from "./Input";
import Button from "./Button";
export default function LoginForm() {
  const login = () => {
    console.log("login press");
  };
  return (
    <form className="max-w-sm mx-auto">
      <Input title={"Email"} type={"email"} name={"email"} />
      <Input title={"Password"} type={"password"} name={"password"} />
      <Button title={"Login"} handleOnClick={login} />
    </form>
  );
}
