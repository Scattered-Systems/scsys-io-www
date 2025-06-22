/*
  Appellation: middleware <module>
  Contrib: @FL03
*/
// imports
import { NextRequest, NextResponse } from 'next/server';
// project
import { logger } from '@/lib/logger';

export const middleware = async (request: NextRequest) => {
  // deconstruct the request
  const { url: requestUrl,} = request;
  // log the request url
  logger.trace(request, 'applying middleware for request: %s', requestUrl);

  const response = NextResponse.next();
  // Set the response headers
  response.headers.set('x-content-type-options', 'nosniff');
  response.headers.set('x-frame-options', 'DENY');
  response.headers.set('x-xss-protection', '1; mode=block');
  response.headers.set('referrer-policy', 'same-origin');
  response.headers.set('strict-transport-security', 'max-age=31536000; includeSubDomains; preload');
  // Return the response
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};