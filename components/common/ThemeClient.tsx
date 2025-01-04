"use client";
import { ThemeProvider } from "styled-components";
import React from "react";
import theme from "@/styles/Theme";

export default function ThemeClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
