import { fetchWorkoutTypes } from "@/services/workoutTypes";
import { useQuery } from "@tanstack/react-query";

export function useWorkoutTypes() {
  return useQuery({
    queryKey: ["workoutTypes"],
    queryFn: fetchWorkoutTypes,
    staleTime: 60 * 1000 * 20,
  });
}
