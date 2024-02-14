"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function login(previousState: any, formData: FormData) {
  let redirectpath = "/login";
  try {
    const response = await fetch("http://localhost:3001/api/auth/login", {
      method: "POST",
      credentials: "include",
      body: formData,
    });
    const data = await response.json();

    if (response.status !== 200) {
      throw new Error("User not Found");
    }
    cookies().set("token", data.token, { secure: true });
    redirectpath = "todo";
  } catch (err: any) {
    console.log(err.message);
    return "User Not Found";
  } finally {
    redirect(redirectpath);
  }
}

export default login;
