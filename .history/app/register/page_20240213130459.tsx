import Input from "../../components/Input";
import Button from "../../components/Button";
import MainHeading from "../../components/MainHeading";
import registerOnServer from "@/store/authentication/register";
export default async function Register() {
  const register = async () => {
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
