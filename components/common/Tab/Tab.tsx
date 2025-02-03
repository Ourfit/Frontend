"use client";

import { Typography } from "@/components/atoms/Typography";
import { useState } from "react";
import * as S from "./Tab.style";

interface TabProps {
  tabs: string[];
  onClick?: (tab: string) => void;
}

export default function Tab({ tabs, onClick }: TabProps) {
  const [prevTab, setPrevTab] = useState(0);

  const handleTabClick = (tab: string, index: number) => {
    setPrevTab(index);
    if (onClick) {
      onClick(tab);
    }
  };

  return (
    <S.TabContainer>
      <S.Tablist>
        {tabs.map((tab, index) => (
          <S.TabItem
            key={index}
            $prevTab={prevTab === index}
            onClick={() => handleTabClick(tab, index)}
          >
            <Typography.H3Bd>{tab}</Typography.H3Bd>
          </S.TabItem>
        ))}
      </S.Tablist>
    </S.TabContainer>
  );
}
