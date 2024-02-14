import { NextResponse } from "next/server";
export async function GET(request: Request) {
  // const {email,password}=await request.body
  const users = await fetch("http://localhost:3000/users");
  const usersGot = await users.json();

  return NextResponse.json({ users }, { status: 200 });
}
