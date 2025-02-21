import HomeComponent from "./home/_components/HomeComponent/HomeComponent";
import AuthRouter from "./(beforeLogin)/auth/_components/AuthRouter";

type Props = {
  searchParams: Promise<{ oAuthId?: string; status?: string }>;
};

export default async function Home({ searchParams }: Props) {
  const query = await searchParams;

  if (query) return <AuthRouter query={query} />;

  return <HomeComponent />;
}
