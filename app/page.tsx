import Header from "@/components/common/Header/Header";
import Frame from "@/components/layout/Frame";
import Banner from "./_component/Banner/Banner";
import QuickMenuBar from "./_component/QuickMenuBar/QuickMenuBar";
import NotificationBanner from "./_component/NotificationBanner/NotificationBanner";
import UserSection from "./_component/UserSection/UserSection";

export default function Home() {
  return (
    <Frame>
      <Header />
      <Banner />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "28px",
          paddingTop: "24px",
        }}
      >
        <QuickMenuBar />
        <NotificationBanner />
        <UserSection />
      </div>
    </Frame>
  );
}
