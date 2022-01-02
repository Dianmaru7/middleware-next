import { NextResponse } from "next/server";

export default function middleware(req) {
  const { token } = req.cookies;
  //   console.log(req.url);
  if (token && req.url == "/login") {
    return NextResponse.redirect("dashboard");
  }
  console.log(req.cookies);
  const resp = NextResponse.next();
  resp.cookie("session_server", "foobaarfoobar", {
    httpOnly: true,
  });
  return resp;
  //   console.log(resp);
  //   if (req.url === "/") return NextResponse.rewrite("/dashboard");
}
