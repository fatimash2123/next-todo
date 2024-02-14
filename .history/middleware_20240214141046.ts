import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')
  console.log("token in middleware=",token)
  console.log("request url=",request.url)
  const response=NextResponse.next()
  response.cookies.set("name","fatima")
  return response
 // return NextResponse.redirect(new URL('/todo', request.url))
//   if (token) {
//     return NextResponse.redirect(new URL('/todo', request.url))
//   }
//   return NextResponse.redirect(new URL('/login', request.url))
}
 
export const config = {
  matcher: ['/todo'],
}