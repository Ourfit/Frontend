import AuthGuard from "@/components/common/AuthGuard";
import ReactQueryProvider from "@/components/common/ReactQueryProvider";
import ThemeClient from "@/components/common/ThemeClient";
import GlobalStyle from "@/styles/GlobalStyle";
import type { Metadata } from "next";
import localFont from "next/font/local";
import React from "react";
import KakaoScript from "./(beforeLogin)/auth/_components/KakaoScript";
import "./globals.css";

declare global {
  interface Window {
    Kakao: any;
  }
}

const pretendard = localFont({
  src: "../assets/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "아워핏",
  description: "운동 메이트 매칭 서비스",
  openGraph: {
    title: "아워핏",
    description: "운동 메이트 매칭 서비스",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "아워핏",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable} font-pretendard`}>
        <ReactQueryProvider>
          <ThemeClient>
            <GlobalStyle />
            <AuthGuard>{children}</AuthGuard>
          </ThemeClient>
        </ReactQueryProvider>
      </body>
      <KakaoScript />
    </html>
  );
}
