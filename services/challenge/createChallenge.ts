import { FormDataType } from "@/app/challenge/registration/_components/ChallengeForm";
import { dateFormat } from "@/utils/monthList";
import { api } from "../axiosInterceptor";

export async function createChallenge(mateId: number, formData: FormDataType) {
  const {
    goalWorkoutCount,
    goalWorkoutDayOfWeeks,
    challengeDurationInMonths,
    startAt,
  } = formData;

  const startDate = new Date(startAt!);
  const endDate = new Date(startDate);
  endDate.setMonth(startDate.getMonth() + Number(challengeDurationInMonths));
  const endAt = dateFormat(endDate);

  try {
    const response = await api.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/challenges`,
      {
        mateId,
        goalWorkoutCount,
        goalWorkoutDayOfWeeks,
        challengeDurationInMonths: Number(challengeDurationInMonths),
        startAt,
        endAt,
      },
    );

    return response.status;
  } catch (err) {
    throw err;
  }
}
