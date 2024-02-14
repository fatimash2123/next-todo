"use server";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const jwt = require("jsonwebtoken");

interface Payload {
  email: string;
  password: string;
}

interface User {
  name: string;
  email: string;
  password: String;
}

export async function POST(request: NextRequest) {
  const body = await request.formData();
  console.log(body.get("email"));
  console.log("body:", body);
  return NextResponse.json({ error: "server error" }, { status: 200 });
  //   const users = await fetch("http://localhost:3000/users");
  //   const usersGot = await users.json();

  //   const userFound = usersGot.filter((user: User) => user.email === body?.email);
  //   if (usersGot.length != 0) {
  //     try {
  //       const token = await jwt.sign(userFound[0], "abcdefghij");
  //       //set cookie
  //       cookies().set({
  //         name: "token",
  //         value: token,
  //         // httpOnly: true,
  //         // path: '/',
  //       });
  //       return NextResponse.json({ token }, { status: 200 });
  //     } catch (err) {
  //       console.log(err);
  //       return NextResponse.json({ error: "User not Found" }, { status: 404 });
  //     }
  //   }
  //   return NextResponse.json({ error: "server error" }, { status: 500 });
}
