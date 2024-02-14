import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
 
export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')
  console.log("token in middleware=",token)
  console.log("request url=",request.url)
  console.log("next url=",request.nextUrl)

 // return NextResponse.redirect(new URL('/todo', request.url))
 console.log(token?.value)
 console.log((request.url)=="http://localhost:3001/login")
  if (token?.value && request.nextUrl.href=="http://localhost:3001/login") {
    return NextResponse.redirect(new URL('/todo', request.url))
  }
  else if(request.url=="http://localhost:3001/login"){
  return NextResponse.redirect(new URL('/login', request.url))
  }
}
 
export const config = {
  matcher: ['/login','/todo'],
}