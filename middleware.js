import { NextRequest, NextResponse } from 'next/server'

/** @param {NextRequest} request */
export function middleware(request,response) {
  const requestHeaders = new Headers(request.headers,response);

  requestHeaders.set('x-pathname', request.nextUrl.pathname);
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    }
  });
}

export const config = {
  matcher: [
      '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};