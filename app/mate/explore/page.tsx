import Header from "@/components/common/Header/Header";
import { fetchMates } from "@/services/mate/searchMate";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ExploreMate from "../_components/ExploreMate/ExploreMate";

export default async function ExplorePage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["mates"],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => fetchMates({ pageParam }),
  });

  const isEditingProfile = false;

  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <Header isEditingProfile={isEditingProfile} />
      <HydrationBoundary state={dehydratedState}>
        <ExploreMate />
      </HydrationBoundary>
    </>
  );
}
