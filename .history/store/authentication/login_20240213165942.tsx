"use server";
interface LoginUser {
  email: String;
  password: string;
}
async function login({ email, password }: LoginUser) {
  const body: LoginUser = {
    email,
    password,
  };

  console.log("login pressed response");
}

export default login;
