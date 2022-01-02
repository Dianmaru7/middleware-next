// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextResponse } from "next/server";

export default function middleware(req, res) {
  const { token } = req.cookies;
  // if (!token) return NextResponse.redirect("/login");
  return new Response("hello");
}
