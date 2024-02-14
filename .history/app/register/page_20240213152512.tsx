import MainHeading from "../../components/MainHeading";
import RegisterForm from "@/components/RegisterForm";
import registerOnServer from "@/store/authentication/register";

export  default async function Register() {
  const register = () => {
    //console.log("name=", nameRef);
   await registerOnServer({
      name: "fatima",
      email: "fatima@gmail.com",
      password: "abc",
   
  })
  return (
    <>
      <MainHeading title={"Register"} />
      <RegisterForm register={register}/>
    </>
  );
}
