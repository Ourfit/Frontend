import { api } from "@/services/axiosInterceptor";
import { PreferredWorkoutTime } from "@/types/user";

export default async function getMates(params: {
  peferredTimes: PreferredWorkoutTime[] | [];
  workoutTypes: string[] | [];
  size?: number;
}) {
  const queryParams = new URLSearchParams();

  params.workoutTypes.forEach((type) =>
    queryParams.append("workoutTypes", type),
  );

  params.peferredTimes.forEach((type) =>
    queryParams.append("peferredTimes", type),
  );

  try {
    const response = await api(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/users/mates?${queryParams.toString()}&size=${params.size || 5}`,
    );

    return response.data;
  } catch (err) {
    throw err;
  }
}
