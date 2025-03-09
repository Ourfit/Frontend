"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const isExcept =
    pathname !== "/" &&
    pathname !== "/auth/login" &&
    pathname !== "/auth/signup";
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) setIsLogin(true);

    if (!token && isExcept) {
      router.replace("/auth/login");
    }
  }, [isExcept]);

  if (!isLogin && isExcept) return null;

  return <>{children}</>;
}
