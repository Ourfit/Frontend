"use client";

import BellIcon from "@/assets/images/bell.svg";
import ChallengeIcon from "@/assets/images/challenge.svg";
import HomeIcon from "@/assets/images/home.svg";
import MateIcon from "@/assets/images/mate.svg";
import SettingIcon from "@/assets/images/setting.svg";
import { GNB_LABELS, GNB_TAB_IDS } from "@/constants/Gnb";
import { usePathname, useRouter } from "next/navigation";
import * as S from "./Gnb.style";

const GNB_TABS = [
  {
    id: GNB_TAB_IDS.HOME,
    label: GNB_LABELS.HOME,
    path: "/",
    icon: <HomeIcon />,
  },
  {
    id: GNB_TAB_IDS.MATE,
    label: GNB_LABELS.MATE,
    path: "/mate",
    icon: <MateIcon />,
  },
  {
    id: GNB_TAB_IDS.CHALLENGE,
    label: GNB_LABELS.CHALLENGE,
    path: "/challenge",
    icon: <ChallengeIcon />,
  },
  {
    id: GNB_TAB_IDS.NOTIFICATIONS,
    label: GNB_LABELS.NOTIFICATIONS,
    path: "/notifications",
    icon: <BellIcon />,
  },
  {
    id: GNB_TAB_IDS.SETTINGS,
    label: GNB_LABELS.SETTINGS,
    path: "/mypage",
    icon: <SettingIcon />,
  },
];

const Gnb = () => {
  const router = useRouter();

  const pathname = usePathname();

  const handleTabClick = (path: string) => {
    if (pathname !== path) {
      router.push(path);
    }
  };
  return (
    <S.GnbContainer>
      {GNB_TABS.map((tab) => (
        <S.GnbTabWrapper
          key={tab.id}
          $isActive={tab.path === pathname}
          onClick={() => handleTabClick(tab.path)}
        >
          {tab.icon}
          {tab.label}
        </S.GnbTabWrapper>
      ))}
    </S.GnbContainer>
  );
};

export default Gnb;
