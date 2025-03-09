"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
const GA_TRACKING_ID = `${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`;

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window.gtag !== "function") return;

    const pagePath =
      pathname + (searchParams.toString() ? `?${searchParams}` : "");
    window.gtag("config", GA_TRACKING_ID, {
      page_path: pagePath,
    });
  }, [pathname, searchParams]);

  return null;
}
