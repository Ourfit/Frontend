"use client";

import OurfitLogo from "@/assets/images/ourfit-logo.svg";
import { Typography } from "@/components/atoms/Typography";
import Header from "@/components/common/Header/Header";
import Tab from "@/components/common/Tab/Tab";
import * as S from "./style";

export default function matePage() {
  const tabs: string[] = ["메이트", "탐색"];

  return (
    <S.matePageContainer>
      <Header />
      <Tab tabs={tabs} />
      <S.matePageContent>
        <S.alertTitle>
          <Typography.H4Md color="#8A92A3">
            👀 현재는 메이트가 없어요!
          </Typography.H4Md>
        </S.alertTitle>
        <S.mateView>
          <OurfitLogo width="54" height="25" fill="#DCE0EA" />
        </S.mateView>
      </S.matePageContent>
    </S.matePageContainer>
  );
}
