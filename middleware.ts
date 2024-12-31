//로그인 과정에서 로그인되지 않은 사용자가 특정 페이지에 접근하지 못하도록 차단하는 용도의 파일
import { NextResponse } from "next/server";

export function middleware(req: Request) {
  // Middleware 로직 추가
  return NextResponse.next(); // 요청을 계속 진행
}

export const config = {
  matcher: ["/api/:path*", "/another-path"], // 적용 경로
};
