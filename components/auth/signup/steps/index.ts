import Nickname from "@/components/auth/signup/steps/Nickname";
import Region from "@/components/auth/signup/steps/Region";
import GenderAge from "@/components/auth/signup/steps/GenderAge";
import FitnessLevel from "@/components/auth/signup/steps/FitnessLevel";
import TimePreference from "@/components/auth/signup/steps/TimePreference";
import SportsPreference from "@/components/auth/signup/steps/SportsPreference";
import Welcome from "@/components/auth/signup/steps/Welcome";

export const SIGNUP_STEPS = [
  {
    id: 1,
    name: "nickname",
    component: Nickname,
  },
  {
    id: 2,
    name: "region",
    component: Region,
  },
  {
    id: 3,
    name: "genderAge",
    component: GenderAge,
  },
  {
    id: 4,
    name: "fitnessLevel",
    component: FitnessLevel,
  },
  {
    id: 5,
    name: "timePreference",
    component: TimePreference,
  },
  {
    id: 6,
    name: "sportPreference",
    component: SportsPreference,
  },
  {
    id: 7,
    name: "welcome",
    component: Welcome,
  },
];
