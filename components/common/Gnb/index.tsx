"use client";

import * as S from "./Gnb.style";
import HomeIcon from "@/assets/images/home.svg";
import MateIcon from "@/assets/images/mate.svg";
import ChallengeIcon from "@/assets/images/challenge.svg";
import BellIcon from "@/assets/images/bell.svg";
import SettingIcon from "@/assets/images/setting.svg";
import { GNB_LABELS, GNB_TAB_IDS } from "@/constants/Gnb";
import { useState } from "react";

const GNB_TABS = [
  { id: GNB_TAB_IDS.HOME, label: GNB_LABELS.HOME, icon: <HomeIcon /> },
  { id: GNB_TAB_IDS.MATE, label: GNB_LABELS.MATE, icon: <MateIcon /> },
  {
    id: GNB_TAB_IDS.CHALLENGE,
    label: GNB_LABELS.CHALLENGE,
    icon: <ChallengeIcon />,
  },
  {
    id: GNB_TAB_IDS.NOTIFICATIONS,
    label: GNB_LABELS.NOTIFICATIONS,
    icon: <BellIcon />,
  },
  {
    id: GNB_TAB_IDS.SETTINGS,
    label: GNB_LABELS.SETTINGS,
    icon: <SettingIcon />,
  },
];

const Gnb = () => {
  const [activeTabId, setActiveTabId] = useState<number>(GNB_TAB_IDS.HOME);
  return (
    <S.GnbContainer>
      {GNB_TABS.map((tab) => (
        <S.GnbTabWrapper
          key={tab.id}
          isActive={tab.id === activeTabId}
          onClick={() => setActiveTabId(tab.id)}
        >
          {tab.icon}
          {tab.label}
        </S.GnbTabWrapper>
      ))}
    </S.GnbContainer>
  );
};

export default Gnb;
