import Header from "@/components/common/Header/Header";
import { fetchMates } from "@/services/mate/searchMate";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import HydratedExploreMate from "./HydratedExploreMate";

export default async function ExplorePage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["mates"],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => fetchMates({ pageParam }),
  });

  console.log(
    "💡 prefetch 완료 후 데이터:",
    queryClient.getQueryData(["mates"]),
  );

  const isEditingProfile = false;

  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <Header isEditingProfile={isEditingProfile} />
      <HydratedExploreMate dehydratedState={dehydratedState} />
    </>
  );
}
