"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export default function KakaoScript() {
  const [kakaoKey, setKakaoKey] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/kakao-key")
      .then((res) => res.json())
      .then((data) => {
        if (data.apiKey) {
          setKakaoKey(data.apiKey);
        }
      });
  }, []);

  useEffect(() => {
    if (kakaoKey && window.Kakao) {
      window.Kakao.init(kakaoKey);
    }
  }, [kakaoKey]);

  return (
    <Script
      src={process.env.NEXT_PUBLIC_KAKAO_SCRIPT_SRC}
      integrity={process.env.NEXT_PUBLIC_KAKAO_INTEGRITY}
      crossOrigin="anonymous"
    />
  );
}
