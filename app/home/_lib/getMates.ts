import { useTokenStore } from "@/stores/tokenStore";
import { PreferredWorkoutTime } from "@/types/user";

export default async function getMates(params: {
  peferredTimes: PreferredWorkoutTime[] | [];
  workoutTypes: string[] | [];
  size?: number;
}) {
  const queryParams = new URLSearchParams();
  const { token } = useTokenStore.getState();

  params.workoutTypes.forEach((type) =>
    queryParams.append("workoutTypes", type),
  );

  params.peferredTimes.forEach((type) =>
    queryParams.append("peferredTimes", type),
  );

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/users/mates?${queryParams.toString()}&size=${params.size || 5}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error("fetch error");
  }

  return response.json();
}
