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