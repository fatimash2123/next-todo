"use server";
interface LoginUser {
  email: string;
  password: string;
}
async function authenticate({ email, password }: LoginUser) {
  console.log("login pressed response");
  if (email === "fshahzad2123@gmail.com" && password === "abc") {
    return true;
  } else {
    throw new Error("Not authenticated");
  }
}

export async function login({ email, password }: LoginUser) {
  try {
    var formData = new FormData();
    formData.append("email", email);
    formData.append("phone", password);
    // await authenticate("credentials", formData); //api call
    authenticate({ email, password });
  } catch (error) {
    if (error) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export default login;
