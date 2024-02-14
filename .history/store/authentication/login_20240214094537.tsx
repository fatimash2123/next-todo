"use server";
interface LoginUser {
  email: string;
  password: string;
}
async function login({ email, password }: LoginUser) {
  const body = JSON.stringify({
    email,
    password,
  });
  const data = await fetch("http://localhost:3001/api/auth/login", {
    method: "POST",
    body: body,
  });
  console.log("login pressed response");
  console.log("response got back=", await data.json());
}

// export async function authenticate({ email, password }: LoginUser) {
//   try {
//     var formData = new FormData();
//     formData.append("email", email);
//     formData.append("phone", password);
//     await login("credentials", formData);
//   } catch (error) {
//     if (error) {
//       switch (error.type) {
//         case "CredentialsSignin":
//           return "Invalid credentials.";
//         default:
//           return "Something went wrong.";
//       }
//     }
//     throw error;
//   }
// }

export default login;
