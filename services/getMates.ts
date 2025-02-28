import { api } from "@/services/axiosInterceptor";
import { PreferredWorkoutTime } from "@/types/user";

export default async function getMates({
  preferredTimes,
  workoutTypes,
  size,
}: {
  preferredTimes?: PreferredWorkoutTime;
  workoutTypes?: string[];
  size?: number;
}) {
  const params: Record<string, string | PreferredWorkoutTime | number> = {
    size: size || 5,
  };

  if (preferredTimes) {
    params.preferredTimes = preferredTimes;
  }

  if (workoutTypes?.length) {
    params.workoutTypes = workoutTypes.join(",");
  }
  try {
    const response = await api(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/users/mates`,
      { params },
    );

    return response.data;
  } catch (err) {
    throw err;
  }
}
