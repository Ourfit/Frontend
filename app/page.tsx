import Header from "@/components/common/Header/Header";
import Frame from "@/components/layout/Frame";
import { COLORS } from "@/constants/Theme";
import HomeComponent from "./home/_components/HomeComponent/HomeComponent";
import { redirect } from "next/navigation";
import TokenHandler from "./(beforeLogin)/auth/_components/TokenHandler";

type Props = {
  searchParams: Promise<{ oAuthId?: string; status?: string }>;
};

export default async function Home({ searchParams }: Props) {
  const query = await searchParams;
  if (query.status === "new") {
    redirect("/auth/signup");
  }

  if (query.status === "registered" && query.oAuthId) {
    return <TokenHandler oAuthId={query.oAuthId} />;
  }

  return (
    <Frame contentStyle={{ backgroundColor: COLORS.GRAYSCALE_100 }}>
      <Header />
      <HomeComponent />
    </Frame>
  );
}
