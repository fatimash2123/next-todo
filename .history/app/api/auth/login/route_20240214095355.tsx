import { NextRequest, NextResponse } from "next/server";

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
  const body = await request.json();
  console.log("body:", body);
  const users = await fetch("http://localhost:3000/users");
  const usersGot = await users.json();

  const userFound = usersGot.filter((user) => user.email === body?.email);
  console.log(usersGot);

  return NextResponse.json({ user: usersGot }, { status: 200 });
}
