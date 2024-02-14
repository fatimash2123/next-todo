import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  console.log("token in middleware=",token)
  console.log("request url=",request.url)
  console.log("new url=",(new URL('/todo', request.url)))
  //return NextResponse.redirect(new URL('/todo', request.url))
//   if (token) {
//     return NextResponse.redirect(new URL('/todo', request.url))
//   }
//   return NextResponse.redirect(new URL('/login', request.url))
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)','/login'],
}