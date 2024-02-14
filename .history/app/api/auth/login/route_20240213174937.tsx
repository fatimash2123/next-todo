import { NextResponse } from "next/server";
export async function GET(request: Request) {
  const users = await fetch("http://localhost:3000/users");
  console.log(users.json());
  return NextResponse.json({ users }, { status: 200 });
}
