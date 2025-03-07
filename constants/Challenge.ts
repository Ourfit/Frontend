import FitnessCount from "@/app/challenge/registration/_components/steps/FitnessCount";
import FitnessPeriod from "@/app/challenge/registration/_components/steps/FitnessPeriod";
import FitnessStart from "@/app/challenge/registration/_components/steps/FitnessStart";
import Welcome from "@/app/challenge/registration/_components/steps/Welcome";
import { ChallengeStepProps } from "@/types/step";

export const STEPS_LABEL = {
  START: "start",
  FITNESS_COUNT: "goalWorkoutCount",
  FITNESS_DAYS: "goalWorkoutDayOfWeeks",
  FITNESS_PERIOD: "challengeDurationInMonths",
  FITNESS_START: "startAt",
  COMPLETE: "complete",
} as const;

export type StepLabel = (typeof STEPS_LABEL)[keyof typeof STEPS_LABEL];

export const COUNT_OPTIONS = [
  [1, 2, 3],
  [4, 5, 6, 7],
];

export const DAYS_OPTIONS = [
  ["월", "화", "수"],
  ["목", "금", "토", "일"],
];

const DAY_LABEL_ENTRIES = [
  ["월", "MONDAY"],
  ["화", "TUESDAY"],
  ["수", "WEDNESDAY"],
  ["목", "THURSDAY"],
  ["금", "FRIDAY"],
  ["토", "SATURDAY"],
  ["일", "SUNDAY"],
] as const;

export const DAY_LABEL = Object.fromEntries(DAY_LABEL_ENTRIES);
export const DAY_REVERSE_LABEL = Object.fromEntries(
  DAY_LABEL_ENTRIES.map(([kor, eng]) => [eng, kor]),
);

export type DayKey = keyof typeof DAY_LABEL;

export type DayLabel = (typeof DAY_LABEL)[keyof typeof DAY_LABEL];

export const CHALLENGE_STEPS: {
  id: number;
  name: StepLabel;
  component: React.FC<ChallengeStepProps>;
}[] = [
  {
    id: 1,
    name: STEPS_LABEL.START,
    component: Welcome,
  },
  {
    id: 2,
    name: STEPS_LABEL.FITNESS_COUNT,
    component: FitnessCount,
  },
  {
    id: 3,
    name: STEPS_LABEL.FITNESS_DAYS,
    component: FitnessCount,
  },
  {
    id: 4,
    name: STEPS_LABEL.FITNESS_PERIOD,
    component: FitnessPeriod,
  },
  {
    id: 5,
    name: STEPS_LABEL.FITNESS_START,
    component: FitnessStart,
  },
  {
    id: 6,
    name: STEPS_LABEL.COMPLETE,
    component: Welcome,
  },
];
