import Header from "@/components/common/Header/Header";
import ChevronRight from "@/assets/images/chevron-right.svg";
import * as S from "./EditBasicInfo.style";
import Nickname from "@/components/auth/signup/steps/Nickname/Nickname";
import GenderAge from "@/components/auth/signup/steps/GenderAge/GenderAge";
import Region from "@/components/auth/signup/steps/Region/Region";
import FitnessLevel from "@/components/auth/signup/steps/FitnessLevel/FitnessLevel";
import { useState } from "react";

interface EditBasicInfoProps {
  handleEditBasicInfo: () => void;
}

export default function EditBasicInfo({
  handleEditBasicInfo,
}: EditBasicInfoProps) {
  const [currentPage, setCurrentPage] = useState(null);
  const BasicInfoList = [
    { label: "닉네임 변경", component: Nickname },
    { label: "나이 변경", component: GenderAge },
    { label: "지역 변경", component: Region },
    { label: "운동 실력 변경", component: FitnessLevel },
    { label: "로그아웃" },
    { label: "탈퇴하기" },
  ];

  return (
    <>
      <Header title="기본 정보 편집" onClick={handleEditBasicInfo} />
      <S.ListContainer>
        {BasicInfoList.map((item) => (
          <S.ListItem key={item.label}>
            {item.label}
            <ChevronRight />
          </S.ListItem>
        ))}
      </S.ListContainer>
    </>
  );
}
