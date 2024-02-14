import Input from "../components/Input";
import Button from "../components/Button";
import MainHeading from "../components/MainHeading";

 async function registerOnServer{
  const data = await fetch("/api/route-name", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objectWithData),
  });
};

export default async function Register() {
  const register = () => {};

  return (
    <>
      <MainHeading title={"Register"} />
      <form className="max-w-sm mx-auto">
        <Input title={"Name"} type={"text"} name={"name"} />
        <Input title={"Email"} type={"email"} name={"email"} />
        <Input title={"Password"} type={"password"} name={"password"} />
        <Input
          title={"Confirm Password"}
          type={"password"}
          name={"cpassword"}
        />
        <Button title={"Register"} handleOnClick={register} />
      </form>
    </>
  );
}
