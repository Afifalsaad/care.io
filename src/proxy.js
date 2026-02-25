import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const privateRoute = ["/dashboard", "/bookingpage"];
export async function proxy(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const isAuthenticated = Boolean(token);
  const reqPath = req.nextUrl.pathname;
  const isPrivateReq = privateRoute.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  if (!isAuthenticated && isPrivateReq) {
    return NextResponse.redirect(
      new URL(`/login?callbackUrl=${reqPath}`, req.url)
    );
  }

  console.log({ token, isAuthenticated, reqPath, isPrivateReq });
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/bookingpage/:path*"],
};
