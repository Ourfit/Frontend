"use client";

import { useTokenStore } from "@/stores/tokenStore";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { token } = useTokenStore();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!token) {
      router.replace("/auth/login");
    }
  }, [token]);

  if (pathname !== "/auth/login" && !token) return null;

  return <>{children}</>;
}
