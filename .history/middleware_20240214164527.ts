import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
 
export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')
  console.log("token in middleware=",token)
  console.log("request url=",request.url)

 // return NextResponse.redirect(new URL('/todo', request.url))
 console.log((request.url)=="http://localhost:3001/todo")
 console.log(token?.value)
  if (token?.value ) {
    return NextResponse.redirect(new URL('/todo', request.url))
  }
  return NextResponse.redirect(new URL('/login', request.url))
}
 
export const config = {
  matcher: ['/'],
}