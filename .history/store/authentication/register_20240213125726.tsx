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
  const data = await fetch("/api/route-name", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objectWithData),
  });
}

export { registerOnServer };
