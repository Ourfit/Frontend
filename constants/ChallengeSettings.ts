import ExerciseNumber from "@/components/challenge/Register/steps/ExerciseNumber/ExerciseNumber";
import ExercisePeriod from "@/components/challenge/Register/steps/ExercisePeriod/ExercisePeriod";
import ExerciseDay from "@/components/challenge/Register/ExerciseDay/ExerciseDay";
import StartDate from "@/components/challenge/Register/steps/StartDate/StartDate";
import { ChallengeRegisterStepProps } from "@/types/step";

export const REGISTER_STEPS_LABEL = {
  EXERCISE_NUMBER: "exerciseNumber",
  EXERCISE_PERIOD: "exercisePeriod",
  EXERCISE_DAY: "exerciseDay",
  START_DATE: "startDate",
} as const;

export type ChallengeRegisterStepLabel =
  (typeof REGISTER_STEPS_LABEL)[keyof typeof REGISTER_STEPS_LABEL];

export const REGISTER_STEPS: {
  id: number;
  name: ChallengeRegisterStepLabel;
  component: React.FC<ChallengeRegisterStepProps>;
}[] = [
  {
    id: 1,
    name: REGISTER_STEPS_LABEL.EXERCISE_NUMBER,
    component: ExerciseNumber,
  },
  {
    id: 2,
    name: REGISTER_STEPS_LABEL.EXERCISE_DAY,
    component: ExerciseDay,
  },
  {
    id: 3,
    name: REGISTER_STEPS_LABEL.EXERCISE_PERIOD,
    component: ExercisePeriod,
  },
  {
    id: 4,
    name: REGISTER_STEPS_LABEL.START_DATE,
    component: StartDate,
  },
];
