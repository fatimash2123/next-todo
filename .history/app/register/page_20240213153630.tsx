import MainHeading from "../../components/MainHeading";
import RegisterForm from "@/components/RegisterForm";

interface RegisterUser {
  name: string;
  email: String;
  password: string;
}
async function registerOnServer({ name, email, password }: RegisterUser) {
  "use server";
  const body: RegisterUser = {
    name,
    email,
    password,
  };
  const data = await fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  console.log("register response=", data);
}

export default async function Register() {
  return (
    <>
      <MainHeading title={"Register"} />
      <RegisterForm register={registerOnServer} />
    </>
  );
}
