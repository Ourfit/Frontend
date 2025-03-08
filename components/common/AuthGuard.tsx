"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const isLogin = localStorage.getItem("token");
  const router = useRouter();
  const pathname = usePathname();
  const isExcept =
    pathname !== "/" &&
    pathname !== "/auth/login" &&
    pathname !== "/auth/signup";

  useEffect(() => {
    if (!isLogin && isExcept) {
      router.replace("/auth/login");
    }
  }, [isLogin, isExcept]);

  if (!isLogin && isExcept) return null;

  return <>{children}</>;
}
