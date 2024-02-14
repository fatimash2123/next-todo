import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
 
export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')
  console.log("token in middleware=",token?.value)
  console.log("request url=",request.url)

 // return NextResponse.redirect(new URL('/todo', request.url))
  if (token?.value) {
     NextResponse.redirect(new URL('/todo', request.url))
  }
  return NextResponse.redirect(new URL('/login', request.url))
}
 
export const config = {
  matcher: ['/todo'],
}