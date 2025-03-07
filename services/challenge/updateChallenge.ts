import { DayLabel } from "@/constants/Challenge";
import { api } from "@/services/axiosInterceptor";

export default async function updateChallenge(days: DayLabel[], id?: number) {
  if (!id) {
    throw Error("id가 없습니다.");
  }

  try {
    const response = await api.patch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/challenges/${id}`,
      {
        goalWorkoutDayOfWeeks: days,
      },
    );

    return response.status;
  } catch (err) {
    throw err;
  }
}
