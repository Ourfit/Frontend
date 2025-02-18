import Frame from "@/components/layout/Frame";
import HomeComponent from "./home/_components/HomeComponent/HomeComponent";
import { COLORS } from "@/constants/Theme";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "아워핏",
  openGraph: {
    title: "아워핏",
  },
};

export default function Home() {
  return (
    <Frame contentStyle={{ backgroundColor: COLORS.GRAYSCALE_100 }}>
      <HomeComponent />
    </Frame>
  );
}
