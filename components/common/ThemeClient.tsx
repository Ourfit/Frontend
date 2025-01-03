"use client";

import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";

export default function ThemeClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
