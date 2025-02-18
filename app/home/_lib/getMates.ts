import { PreferredWorkoutTime } from "@/types/user";

export async function getMates(params: {
  peferredTimes: PreferredWorkoutTime[] | [];
  workoutTypes: string[] | [];
}) {
  const queryParams = new URLSearchParams();

  params.peferredTimes.forEach((time) =>
    queryParams.append("peferredTimes", time),
  );
  params.workoutTypes.forEach((type) =>
    queryParams.append("workoutTypes", type),
  );

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/users/mates?${queryParams.toString()}`,
  );

  if (!response.ok) {
    throw new Error("fetch error");
  }

  return response.json();
}
