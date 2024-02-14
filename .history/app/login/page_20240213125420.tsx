import Input from "@/components/Input";
import Button from "@/components/Button";
import MainHeading from "@/components/MainHeading";
export default function Register() {
  const register = () => {};

  return (
    <>
      <MainHeading title={"Login"} />
      <form className="max-w-sm mx-auto">
        <Input title={"Email"} type={"email"} name={"email"} />
        <Input title={"Password"} type={"password"} name={"password"} />
        <Button title={"Login"} handleOnClick={register} />
      </form>
    </>
  );
}
