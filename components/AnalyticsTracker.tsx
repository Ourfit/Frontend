"use client";

import { useUserInfoStore } from "@/stores/userInfoStore";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
const GA_TRACKING_ID = `${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`;

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { userInfo } = useUserInfoStore();

  useEffect(() => {
    if (typeof window.gtag !== "function") return;

    const pagePath =
      pathname + (searchParams.toString() ? `?${searchParams}` : "");
    if (userInfo?.id) {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: pagePath,
        user_id: String(userInfo.id),
      });
    }
  }, [pathname, searchParams, userInfo]);

  return null;
}
