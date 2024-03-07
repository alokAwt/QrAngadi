import { NextResponse } from 'next/server'
 
export function middleware(request) {
    let token = request.cookies.get('token')

  if (request.nextUrl.pathname.startsWith('/gamification')) {
    if (token?.value===undefined) {
        return NextResponse.rewrite(new URL('/Login', request.url))
      }
  }
 
  if (request.nextUrl.pathname.startsWith('/Analytics')) {
    if (token?.value===undefined) {
        return NextResponse.rewrite(new URL('/Login', request.url))
      }
  }
  if (request.nextUrl.pathname.startsWith('/Profile')) {
    if (token?.value===undefined) {
        return NextResponse.rewrite(new URL('/Login', request.url))
      }
  }
  if (request.nextUrl.pathname.startsWith('/QRcodesolution')) {
    if (token?.value===undefined) {
        return NextResponse.rewrite(new URL('/Login', request.url))
      }
  }

  return NextResponse.next()
}