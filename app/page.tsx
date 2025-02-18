import Header from "@/components/common/Header/Header";
import Frame from "@/components/layout/Frame";
import Banner from "./home/_components/Banner/Banner";
import NotificationBanner from "./home/_components/NotificationBanner/NotificationBanner";
import QuickMenuBar from "./home/_components/QuickMenuBar/QuickMenuBar";
import UserSection from "./home/_components/UserSection/UserSection";
import HomeComponent from "./home/_components/HomeComponent/HomeComponent";
import { COLORS } from "@/constants/Theme";
import MainContent from "./home/_components/MainContent/MainContent";
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
      <Header />
      <HomeComponent>
        <Banner />
        <MainContent>
          <QuickMenuBar />
          <NotificationBanner />
          <UserSection />
        </MainContent>
      </HomeComponent>
    </Frame>
  );
}
