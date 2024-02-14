"use server";
import { cookies } from "next/headers";

interface LoginUser {
  email: string;
  password: string;
}
async function login(previousState: any, formData: FormData) {
  console.log("formData", formData);
  try {
    const response = await fetch("http://localhost:3001/api/auth/login", {
      method: "POST",
      credentials: "include",
      body: formData,
    });
    const data = await response.json();
    console.log("login pressed response");
    console.log("response got back=", data);

    if (data.status !== 200) {
      throw new Error("User not Found");
    }
    cookies().set("token", data.token, { secure: true });
    // return "User Found";
  } catch (err: any) {
    console.log(err.message);
    return "User Not Found";
    // throw new Error("User not Found");
  }
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
