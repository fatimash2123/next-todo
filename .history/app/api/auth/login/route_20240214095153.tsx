import { NextRequest, NextResponse } from "next/server";

interface Payload {
  email: string;
  password: string;
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log("body:", body);
  const users = await fetch("http://localhost:3000/users");
  const usersGot = await users.json();
  console.log(usersGot);

  return NextResponse.json({ user: usersGot }, { status: 200 });
}
