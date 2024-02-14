interface RegisterUser {
  name: string;
  email: String;
  password: string;
}
async function registerOnServer({ name, email, password }: RegisterUser) {
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
  console.log("register response=", registerOnServer);
}

export default registerOnServer;
