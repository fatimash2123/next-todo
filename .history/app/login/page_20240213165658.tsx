import Input from "@/components/Input";
import Button from "@/components/Button";
import MainHeading from "@/components/MainHeading";
import LoginForm from "@/components/LoginForm";
export default function Register() {
  const login = () => {
    console.log("login press");
  };

  return (
    <>
      <MainHeading title={"Login"} />
      <LoginForm />
    </>
  );
}
