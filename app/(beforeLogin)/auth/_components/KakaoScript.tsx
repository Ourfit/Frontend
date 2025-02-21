"use client";

import Script from "next/script";

export default function KakaoScript() {
  const onLoad = () => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
  };

  return (
    <Script
      src={process.env.NEXT_PUBLIC_KAKAO_SCRIPT_SRC}
      integrity={process.env.NEXT_PUBLIC_KAKAO_INTEGRITY}
      crossOrigin="anonymous"
      onLoad={onLoad}
    />
  );
}
