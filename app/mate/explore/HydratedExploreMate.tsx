"use client";

import ExploreMate from "@/app/mate/_components/ExploreMate/ExploreMate";
import { DehydratedState, HydrationBoundary } from "@tanstack/react-query";

export default function HydratedExploreMate({
  dehydratedState,
}: {
  dehydratedState: DehydratedState;
}) {
  return (
    <HydrationBoundary state={dehydratedState}>
      <ExploreMate />
    </HydrationBoundary>
  );
}
