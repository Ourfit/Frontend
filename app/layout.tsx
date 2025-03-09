import AnalyticsTracker from "@/components/AnalyticsTracker";
import AuthGuard from "@/components/common/AuthGuard";
import ReactQueryProvider from "@/components/common/ReactQueryProvider";
import ThemeClient from "@/components/common/ThemeClient";
import GlobalStyle from "@/styles/GlobalStyle";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
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
  metadataBase: new URL("https://ourfit.life"),
  openGraph: {
    title: "아워핏",
    description: "운동 메이트 매칭 서비스",
    url: "https://ourfit.life",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "아워핏",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className={`${pretendard.variable} font-pretendard`}>
        <ReactQueryProvider>
          <ThemeClient>
            <GlobalStyle />
            <AuthGuard>
              <AnalyticsTracker />
              {children}
            </AuthGuard>
          </ThemeClient>
        </ReactQueryProvider>
      </body>
      <KakaoScript />
    </html>
  );
}
