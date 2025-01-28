"use client";

import { useState } from "react";
import * as S from "./Tab.style";
import { Typography } from "@/components/atoms/Typography";

export default function Tab({ tabs }: { tabs: string[] }) {
  const [prevTab, setPrevTab] = useState(0);

  return (
    <S.TabContainer>
      <S.Tablist>
        {tabs.map((tab, index) => (
          <S.TabItem
            key={index}
            $prevTab={prevTab === index}
            onClick={() => setPrevTab(index)}
          >
            <Typography.H3Bd>{tab}</Typography.H3Bd>
          </S.TabItem>
        ))}
      </S.Tablist>
    </S.TabContainer>
  );
};