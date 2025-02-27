import { fetchWorkoutTypes } from "@/services/workoutTypes";
import { useQuery } from "@tanstack/react-query";

export function useWorkoutTypes() {
  return useQuery({
    queryKey: ["workoutTypes"],
    queryFn: fetchWorkoutTypes,
    staleTime: 60 * 1000, // 1분 동안 데이터 캐싱
  });
}
