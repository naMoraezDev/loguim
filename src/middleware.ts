import { NextRequest, NextResponse, userAgent } from "next/server";

export const middleware = (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const state = searchParams.get("state");
  const clientId = searchParams.get("client_id");
  const redirectUri = searchParams.get("redirect_uri");

  const allowedOrigin = process.env.PRIVATE_ALLOWED_ORIGIN ?? "###";
  const allowedClientId = process.env.PRIVATE_ALLOWED_CLIENT_ID ?? "###";

  if (!state || !clientId || !redirectUri) {
    return NextResponse.rewrite(new URL("/access-denied", request.url));
  }

  if (clientId !== allowedClientId || !redirectUri.includes(allowedOrigin)) {
    return NextResponse.rewrite(new URL("/access-denied", request.url));
  }

  const { device } = userAgent(request);
  const url = request.nextUrl.clone();
  const isDesktop = device.type !== "mobile";
  if (isDesktop && !url.pathname.includes("api")) {
    url.pathname = `/desktop${request.nextUrl.pathname}`;
    return NextResponse.rewrite(url);
  }
};

export const config = { matcher: "/((?!.*\\.).*)" };
