"use client";

import ExploreMate from "@/app/mate/_components/ExploreMate/ExploreMate";
import { HydrationBoundary } from "@tanstack/react-query";

export default function HydratedExploreMate({
  dehydratedState,
}: {
  dehydratedState: unknown;
}) {
  return (
    <HydrationBoundary state={dehydratedState}>
      <ExploreMate />
    </HydrationBoundary>
  );
}
