"use server";
interface LoginUser {
  email: string;
  password: string;
}
async function login({ email, password }: LoginUser) {
  const body: LoginUser = {
    email,
    password,
  };
  const data = await fetch("http://localhost:3000/api/auth/login", {
    body: JSON.stringify(body),
  });
  console.log("response got back=", await data.json());

  console.log("login pressed response");
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
