import MainHeading from "../../components/MainHeading";
import RegisterForm from "@/components/RegisterForm";

interface RegisterUser {
  name: string;
  email: String;
  password: string;
}

export default async function Register() {
  return (
    <>
      <MainHeading title={"Register"} />
      <RegisterForm />
    </>
  );
}
