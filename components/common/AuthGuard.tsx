"use client";

import { useTokenStore } from "@/stores/tokenStore";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { token } = useTokenStore();
  const router = useRouter();
  const pathname = usePathname();
  const isExcept =
    pathname !== "/" &&
    pathname !== "/auth/login" &&
    pathname !== "/auth/signup";

  useEffect(() => {
    if (!token && isExcept) {
      router.replace("/auth/login");
    }
  }, [token]);

  if (!token && isExcept) return null;

  return <>{children}</>;
}
