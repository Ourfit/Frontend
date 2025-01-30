"use client";

import OurfitLogo from "@/assets/images/ourfit-logo.svg";
import { Typography } from "@/components/atoms/Typography";
import Header from "@/components/common/Header/Header";
import Tab from "@/components/common/Tab/Tab";
import Tooltip from "@/components/common/Tooltip/Tooltip";
import { useState } from "react";
import ExploreMate from "./_components/ExploreMate/ExploreMate";
import MatchedMate from "./_components/MachedMate/MachedMate";
import * as S from "./style";

export default function MatePage() {
  const tabs: string[] = ["메이트", "탐색"];
  const [showTooltip, setShowTooltip] = useState(true);
  const [isMatched, setIsMatched] = useState(true);
  const [activeTab, setActiveTab] = useState("메이트");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (tab === "탐색") {
      setShowTooltip(false);
    }
  };

  return (
    <S.matePageContainer>
      <Header />
      <S.TabWrapper>
        <Tab tabs={tabs} onClick={handleTabClick} />
        {showTooltip && (
          <>
            <S.SmallDot />
            <Tooltip text="메이트를 찾아보세요!" position="left" />
          </>
        )}
      </S.TabWrapper>
      <S.matePageContent>
        {activeTab === "메이트" ? (
          isMatched ? (
            <MatchedMate
              name="준영"
              age={26}
              startDate="2025-01-25"
              setIsMatched={setIsMatched}
            />
          ) : (
            <>
              <S.alertTitle>
                <Typography.H4Md color="#8A92A3">
                  👀 현재는 메이트가 없어요!
                </Typography.H4Md>
              </S.alertTitle>
              <S.mateView>
                <OurfitLogo width="54" height="25" fill="#DCE0EA" />
              </S.mateView>
            </>
          )
        ) : (
          <ExploreMate />
        )}
      </S.matePageContent>
    </S.matePageContainer>
  );
}
