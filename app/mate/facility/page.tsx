"use client";

import { Typography } from "@/components/atoms/Typography";
import Header from "@/components/common/Header/Header";
import Placeholder from "@/components/common/Placeholder/Placeholder";
import { useState } from "react";
import * as S from "./style";

export default function SportFacility() {
  const [facilityValue, setFacilityValue] = useState("");
  /* 카카오톡 API 연동 및 시설 검색 시 debounce 적용 고려*/
  return (
    <>
      <Header />
      <S.facilityContainer>
        <S.facilityContent>
          <S.facilityTitle>
            <Typography.H1Sb>
              <S.HighlightedText>함께 운동하는</S.HighlightedText> <br /> 시설이
              어디인가요?
            </Typography.H1Sb>
          </S.facilityTitle>
          <Typography.H4Md color="#8A92A3">
            같은 동네 메이트를 매치해드려요.
          </Typography.H4Md>
        </S.facilityContent>
        <S.PlaceHolderWrapper>
          <Placeholder text="시설 명을 검색해주세요." />
        </S.PlaceHolderWrapper>
      </S.facilityContainer>
    </>
  );
}
