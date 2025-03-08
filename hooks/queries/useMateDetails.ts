import { getMateDetail } from "@/services/mate/getMateDetail";
import { useQuery } from "@tanstack/react-query";

export function useMateDetail(userId?: number) {
  return useQuery({
    queryKey: ["mateDetail", userId],
    queryFn: () => {
      if (!userId) throw new Error("userId가 없습니다.");
      return getMateDetail(userId);
    },
    enabled: !!userId,
    staleTime: 60 * 1000,
    retry: false,
  });
}
