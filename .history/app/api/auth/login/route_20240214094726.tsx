import { NextResponse } from "next/server";
export async function POST(request: Request) {
  const body = await request.body;
  const users = await fetch("http://localhost:3000/users");
  const usersGot = await users.json();
  console.log(usersGot);

  return NextResponse.json({ user: usersGot }, { status: 200 });
}
