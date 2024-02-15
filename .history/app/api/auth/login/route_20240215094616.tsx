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
  password: string;
}

export async function POST(request: NextRequest) {
  const body = await request.formData();
  const email = body.get("email");
  const password = body.get("password");

  const users = await fetch("http://localhost:3000/users");
  const usersGot = await users.json();

  const userFound = usersGot.filter(
    (user: User) => user.email === email && user.password === password
  );
  if (usersGot.length !== 0) {
    try {
      const token = await jwt.sign(userFound[0], "abcdefghij");
      return NextResponse.json({ token }, { status: 200 });
    } catch (err: any) {
      return NextResponse.json({ error: "User not Found" }, { status: 404 });
    }
  }
  return NextResponse.json({ error: "server error" }, { status: 500 });
}
