import {
  updateMatePlace,
  UpdateMatePlacePayload,
} from "@/services/mate/setWorkoutPlace";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateMatePlace = (mateId: number) => {
  const queryClient = useQueryClient();

  return useMutation<unknown, Error, UpdateMatePlacePayload>({
    mutationFn: (payload) => updateMatePlace(mateId, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mateInfo"] });
    },
  });
};
