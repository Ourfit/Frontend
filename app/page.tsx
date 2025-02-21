import HomeComponent from "./home/_components/HomeComponent/HomeComponent";
import AuthRouter from "./(beforeLogin)/auth/_components/AuthRouter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "아워핏",
  openGraph: {
    title: "아워핏",
  },
};

type Props = {
  searchParams: Promise<{ oAuthId?: string; status?: string }>;
};

export default async function Home({ searchParams }: Props) {
  const query = await searchParams;

  if (Object.keys(query).length) return <AuthRouter query={query} />;

  return <HomeComponent />;
}
