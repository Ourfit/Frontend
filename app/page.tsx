import Header from "@/components/common/Header/Header";
import Frame from "@/components/layout/Frame";
import { COLORS } from "@/constants/Theme";
import HomeComponent from "./home/_components/HomeComponent/HomeComponent";

export default function Home() {
  return (
    <Frame contentStyle={{ backgroundColor: COLORS.GRAYSCALE_100 }}>
      <Header />
      <HomeComponent />
    </Frame>
  );
}
