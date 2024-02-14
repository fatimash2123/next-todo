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

  const userFound = usersGot.filter((user: User) => user.email === body?.email);
  if (usersGot.length != 0) {
    return NextResponse.json({ user: userFound }, { status: 200 });
  }
  return NextResponse.json({ error: "User not Found" }, { status: 500 });
}
