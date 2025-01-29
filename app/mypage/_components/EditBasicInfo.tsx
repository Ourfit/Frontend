import Header from "@/components/common/Header/Header";
import ChevronRight from "@/assets/images/chevron-right.svg";
import * as S from "./EditBasicInfo.style";

interface EditBasicInfoProps {
  handleEditBasicInfo: () => void;
}

export default function EditBasicInfo({
  handleEditBasicInfo,
}: EditBasicInfoProps) {
  const BasicInfoList = [
    { label: "닉네임 변경" },
    { label: "나이 변경" },
    { label: "지역 변경" },
    { label: "운동 실력 변경" },
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
