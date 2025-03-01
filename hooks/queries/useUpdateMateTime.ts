import {
  updateMateTime,
  UpdateMateTimePayload,
} from "@/services/mate/setWorkoutTime";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateMateTime = (mateId: number) => {
  const queryClient = useQueryClient();

  return useMutation<unknown, Error, UpdateMateTimePayload>({
    mutationFn: (payload) => updateMateTime(mateId, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mateInfo"] });
    },
  });
};
