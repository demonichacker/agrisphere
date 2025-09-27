import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the pathname of the request (e.g. /, /dashboard, /sensors)
  const path = request.nextUrl.pathname

  // Define paths that require authentication
  const protectedPaths = ["/sensors", "/analytics", "/alerts", "/settings"]

  // Check if the current path is protected
  const isProtectedPath = protectedPaths.some((protectedPath) => path.startsWith(protectedPath))

  // Temporarily disable auth check for demo
  // if (isProtectedPath) {
  //   // Check for auth token in cookies (simulated)
  //   const authToken = request.cookies.get("auth-storage")?.value

  //   if (!authToken) {
  //     // Redirect to auth page if not authenticated
  //     return NextResponse.redirect(new URL("/auth", request.url))
  //   }

  //   try {
  //     // Parse the auth storage to check if user is authenticated
  //     const authData = JSON.parse(authToken)
  //     if (!authData.state?.isAuthenticated) {
  //       return NextResponse.redirect(new URL("/auth", request.url))
  //     }
  //   } catch {
  //     // If parsing fails, redirect to auth
  //     return NextResponse.redirect(new URL("/auth", request.url))
  //   }
  // }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/sensors/:path*", "/analytics/:path*", "/alerts/:path*", "/settings/:path*"],
}
