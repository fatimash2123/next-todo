import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
 
export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  if (token && request.nextUrl.pathname!=="/todo") {
    return NextResponse.redirect(new URL('/todo', request.url))
  }
  else if(!token && request.nextUrl.pathname!=="/login"){
    return NextResponse.redirect(new URL('/login', request.url))
  }

  
}
 
export const config = {
  matcher: ['/login','/todo'],
}