import Header from "@/components/common/Header/Header";
import ChevronRight from "@/assets/images/chevron-right.svg";
import * as S from "./EditBasicInfo.style";
import { useState } from "react";
import { SIGNUP_STEPS, STEPS_LABEL } from "@/constants/Signup";
import { useRouter } from "next/navigation";

interface EditBasicInfoProps {
  handleEditBasicInfo: () => void;
}

export default function EditBasicInfo({
  handleEditBasicInfo,
}: EditBasicInfoProps) {
  const [currentPage, setCurrentPage] = useState<number>(-1);
  const router = useRouter();

  const data = [
    "중수다람쥐",
    "송파구 신천동",
    { age: 16, gender: "여성" },
    "초보",
  ];

  const INFO_LABEL = {
    NICKNAME: "닉네임 변경",
    GENDER_AGE: "나이 변경",
    REGION: "지역 변경",
    FITNESS_LEVEL: "운동 실력 변경",
    LOGOUT: "로그아웃",
    LEAVE: "탈퇴하기",
  } as const;

  const handleListItemClick = (selectCategory: keyof typeof INFO_LABEL) => {
    if (selectCategory === "LOGOUT") router.replace("/");

    if (selectCategory in STEPS_LABEL) {
      const index = SIGNUP_STEPS.findIndex(
        (e) =>
          e.name === STEPS_LABEL[selectCategory as keyof typeof STEPS_LABEL],
      );
      setCurrentPage(index);
    }
  };

  const handleHeaderClick = () => {
    if (currentPage < 0) handleEditBasicInfo();
    else setCurrentPage(-1);
  };

  const CurrentComponent = SIGNUP_STEPS[currentPage]?.component;

  return (
    <>
      <Header title="기본 정보 편집" onClick={handleHeaderClick} />
      <S.ListContainer>
        {currentPage < 0 ? (
          Object.entries(INFO_LABEL).map(([key, label]) => (
            <S.ListItem
              key={key}
              onClick={() =>
                handleListItemClick(key as keyof typeof INFO_LABEL)
              }
            >
              {label}
              <ChevronRight />
            </S.ListItem>
          ))
        ) : (
          <S.ComponentWrapper>
            <CurrentComponent value={data[currentPage]} />
          </S.ComponentWrapper>
        )}
      </S.ListContainer>
    </>
  );
}
