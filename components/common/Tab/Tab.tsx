"use client";

import { Typography } from "@/components/atoms/Typography";
import * as S from "./Tab.style";

interface TabProps {
  tabs: string[];
  activeTab: string;
  onClick?: (tab: string) => void;
}

export default function Tab({ tabs, activeTab, onClick }: TabProps) {
  return (
    <S.TabContainer>
      <S.Tablist>
        {tabs.map((tab, index) => (
          <S.TabItem
            key={index}
            $isActive={tab === activeTab}
            onClick={() => onClick && onClick(tab)}
          >
            <Typography.H3Bd>{tab}</Typography.H3Bd>
          </S.TabItem>
        ))}
      </S.Tablist>
    </S.TabContainer>
  );
}
