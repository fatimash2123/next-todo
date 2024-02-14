import MainHeading from "../../components/MainHeading";
import RegisterForm from "@/components/RegisterForm";
import registerOnServer from "@/store/authentication/register";

const register = async () => {
  await registerOnServer({
    name: "fatima",
    email: "fatima@gmail.com",
    password: "abc",
  });
};

export default async function Register() {
  return (
    <>
      <MainHeading title={"Register"} />
      <RegisterForm register={register} />
    </>
  );
}
