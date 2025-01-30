import Frame from "@/components/layout/Frame";

export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Frame style={{ height: "100svh" }}>{children}</Frame>;
}
