import NextAuth from "next-auth";

import { authConfig } from "@/app/(auth)/auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  matcher: [
    /*
     * match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - and more
     */
    "/((?!_next/static|_next/image|favicon.ico|icon.ico|icon.svg|icon.png|lexa.png|robots.txt|sitemap.xml|manifest.webmanifest|fonts|images|videos).*)",
    // "/",
    // "/:id",
    // "/api/:path*",
    // "/login",
    // "/register",
  ],
};
