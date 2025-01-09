import Nickname from "@/components/auth/signup/steps/Nickname";
import Region from "@/components/auth/signup/steps/Region";
import GenderAge from "@/components/auth/signup/steps/GenderAge";
import FitnessLevel from "@/components/auth/signup/steps/FitnessLevel";
import TimePreference from "@/components/auth/signup/steps/TimePreference";
import SportsPreference from "@/components/auth/signup/steps/SportsPreference";
import Welcome from "@/components/auth/signup/steps/Welcome";
import { StepProps } from "@/types/step";

export const STEPS_LABEL = {
  NICKNAME: "nickname",
  REGION: "region",
  GENDER_AGE: "genderAge",
  FITNESS_LEVEL: "fitnessLevel",
  TIME_PREFERENCES: "timePreferences",
  SPORTS_PREFERENCES: "sportsPreferences",
  WELCOME: "Welcome",
} as const;

export type StepLabel = (typeof STEPS_LABEL)[keyof typeof STEPS_LABEL];

export const SPORTS_LABEL = {
  GYM: "헬스",
  PILATES: "필라테스",
  SWIMMING: "수영",
  DANCE: "댄스",
  SQUASH: "스쿼시",
  BOXING: "복싱",
  GOLF: "골프",
  TENNIS: "테니스",
  YOGA: "요가",
  CROSSFIT: "크로스핏",
  CLIMBING: "클라이밍",
  TAEKWONDO: "태권도",
  HAPKIDO: "합기도",
  AEROBICS: "에어로빅",
  BALLET: "발레",
  DANCING: "무용",
  BADMINTON: "배드민턴",
  BOWLING: "볼링",
  JIUJITSU: "주짓수",
  BASKETBALL: "농구",
  SOCCER: "축구",
  VOLLEYBALL: "배구",
  TABLE_TENNIS: "탁구",
  JUDO: "유도",
  KENDO: "검도",
} as const;

export const TIME_PREFERENCES = {
  WEEKDAY: [
    { label: "평일 아침", icon: "MorningIcon" },
    { label: "평일 낮", icon: "AfternoonIcon" },
    { label: "평일 저녁", icon: "EveningIcon" },
  ],
  WEEKEND: [
    { label: "주말 아침", icon: "MorningIcon" },
    { label: "주말 낮", icon: "AfternoonIcon" },
    { label: "주말 저녁", icon: "EveningIcon" },
  ],
} as const;

export const GENDER = {
  FEMALE: "여성",
  MALE: "남성",
} as const;

export const FITNESS_LEVELS = {
  BEGINNER: {
    label: "초보",
    description: "운동 이제 막 시작한 단계! 운동에 조금씩 적응 중",
  },
  INTERMEDIATE: {
    label: "중수",
    description: "운동이 생활의 일부가 된 단계! 운동이 꽤 익숙해요",
  },
  ADVANCED: {
    label: "고수",
    description: "운동이 이제 완전 내 몸 같은 단계! 고난도 동작도 척척",
  },
} as const;

export const SIGNUP_STEPS: {
  id: number;
  name: StepLabel;
  component: React.FC<StepProps>;
}[] = [
  {
    id: 1,
    name: STEPS_LABEL.NICKNAME,
    component: Nickname,
  },
  {
    id: 2,
    name: STEPS_LABEL.REGION,
    component: Region,
  },
  {
    id: 3,
    name: STEPS_LABEL.GENDER_AGE,
    component: GenderAge,
  },
  {
    id: 4,
    name: STEPS_LABEL.FITNESS_LEVEL,
    component: FitnessLevel,
  },
  {
    id: 5,
    name: STEPS_LABEL.TIME_PREFERENCES,
    component: TimePreference,
  },
  {
    id: 6,
    name: STEPS_LABEL.SPORTS_PREFERENCES,
    component: SportsPreference,
  },
  {
    id: 7,
    name: STEPS_LABEL.WELCOME,
    component: Welcome,
  },
];
