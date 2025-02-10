import NextAuth from "next-auth";

import { authConfig } from "@/app/(auth)/auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.ico|icon.svg|icon.png|lexa.png|robots.txt|sitemap.xml|manifest.webmanifest|fonts|images|videos).*)",
  ],
};
