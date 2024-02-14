import Input from "./Input";
import Button from "./Button";
export default function RegisterForm() {
    return (
        <form className="max-w-sm mx-auto">
        <Input title={"Name"} type={"text"} name={"name"} />
        <Input title={"Email"} type={"email"} name={"email"} />
        <Input title={"Password"} type={"password"} name={"password"} />
        <Input title={"Confirm Password"} type={"password"} name={"cpassword"} />
        <Button title={"Register"} handleOnClick={register} />
      </form>;
    )
}
