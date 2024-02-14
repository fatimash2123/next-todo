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

// export async function authenticate(formData: FormData) {
//     try {
//       await login('credentials', formData)
//     } catch (error) {
//       if (error) {
//         switch (error.type) {
//           case 'CredentialsSignin':
//             return 'Invalid credentials.'
//           default:
//             return 'Something went wrong.'
//         }
//       }
//       throw error
//     }
//   }

export default login;
