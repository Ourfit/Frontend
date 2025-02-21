import { FormDataType } from "@/components/auth/signup/SignupForm";
import {
  FITNESS_LEVELS,
  SPORTS_LABEL,
  TIME_PREFERENCES,
} from "@/constants/Signup";

export async function signup(formData: FormDataType) {
  const nickname = formData.nickname;
  const region = formData.region?.split(" ");
  const region1 = region![0];
  const region2 = region![1];
  const region3 = region![2];
  const gender = formData.genderAge?.gender === "남성" ? "M" : "F";
  const age = Number(formData.genderAge?.age.slice(0, -1));
  const skillLevel = Object.entries(FITNESS_LEVELS).filter(
    ([, { label }]) => label === formData.fitnessLevel,
  )[0][0];
  const preferredWorkoutTime = formData.timePreferences?.map((time) => {
    return Object.values(TIME_PREFERENCES)
      .flat()
      .filter((v) => v.label === time)[0].key;
  });
  const favoriteWorkouts = formData.sportsPreferences?.map((sport) => {
    return Object.entries(SPORTS_LABEL).filter(
      ([, value]) => value === sport,
    )[0][0];
  });

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/vi/users`,
      {
        method: "POST",
        body: JSON.stringify({
          oAuthId: "57291628",
          provider: "KAKAO",
          nickname,
          region1,
          region2,
          region3,
          gender,
          age,
          skillLevel,
          preferredWorkoutTime,
          favoriteWorkouts,
        }),
      },
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  } catch (err) {
    console.log(err);
  }
}
