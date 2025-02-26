"use client";

import OurfitLogo from "@/assets/images/ourfit-logo.svg";
import { Typography } from "@/components/atoms/Typography";
import Header from "@/components/common/Header/Header";
import Tab from "@/components/common/Tab/Tab";
import Tooltip from "@/components/common/Tooltip/Tooltip";
import { useMateInfo } from "@/hooks/queries/useMateInfo";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MatchedMate from "./_components/MachedMate/MachedMate";
import * as S from "./style";

export default function MatePage() {
  const tabs: string[] = ["메이트", "탐색"];
  const [showTooltip, setShowTooltip] = useState(true);
  const [activeTab, setActiveTab] = useState("메이트");
  const router = useRouter();

  const { data: mateInfo, isLoading } = useMateInfo();
  const isMatched = !!mateInfo;

  console.log(mateInfo);

  const handleTabClick = (tab: string) => {
    if (tab === "탐색") {
      setShowTooltip(false);
      router.push("/mate/explore");
    } else {
      router.push("/mate");
    }
  };

  return (
    <S.matePageContainer>
      <Header />
      <S.TabWrapper>
        <Tab tabs={tabs} activeTab={activeTab} onClick={handleTabClick} />
        {showTooltip && activeTab !== "탐색" && (
          <>
            <S.SmallDot $top={8} $left={105} />
            <Tooltip text="메이트를 찾아보세요!" position="left" left={119} />
          </>
        )}
      </S.TabWrapper>
      <S.matePageContent>
        {isMatched ? (
          <MatchedMate
            name={mateInfo.myMate.nickname}
            age={mateInfo.myMate.age}
            startDate="2025-01-25"
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
        )}
      </S.matePageContent>
    </S.matePageContainer>
  );
}
