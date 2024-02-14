import Input from "../components/Input";
import Button from "../components/Button";
import MainHeading from "../components/MainHeading";
export default function Register() {
  const register = () => {};

  return (
    <>
      <MainHeading title={"Login"} />
      <form className="max-w-sm mx-auto">
        <Input title={"Name"} type={"text"} name={"name"} />
        <Input title={"Email"} type={"email"} name={"email"} />
        <Input title={"Password"} type={"password"} name={"password"} />
        <Input
          title={"Confirm Password"}
          type={"password"}
          name={"cpassword"}
        />
        <Button title={"Login"} handleOnClick={register} />
      </form>
    </>
  );
}
