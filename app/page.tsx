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

  return <HomeComponent />;
}
