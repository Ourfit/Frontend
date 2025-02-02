"use client";

import { useState } from "react";
import * as S from "./Tab.style";
import { Typography } from "@/components/atoms/Typography";

// TabProps는 외부에서 정의합니다.
interface TabProps {
  tabs: string[];
  onClick?: (tab: string) => void;
}

export default function Tab({ tabs, onClick }: TabProps) {
  const [prevTab, setPrevTab] = useState(0);

  const handleTabClick = (tab: string, index: number) => {
    setPrevTab(index);
    if (onClick) {
      onClick(tab);  // 클릭된 탭을 부모에게 전달
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
