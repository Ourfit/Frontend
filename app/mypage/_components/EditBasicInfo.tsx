import Header from "@/components/common/Header/Header";
import ChevronRight from "@/assets/images/chevron-right.svg";
import * as S from "./EditBasicInfo.style";
import { useState } from "react";
import { SIGNUP_STEPS, STEPS_LABEL } from "@/constants/Signup";
import Modal from "@/components/common/Modal/Modal";
import { Typography } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import { deleteAccount, deleteToken } from "../_lib/deleteAuth";

interface EditBasicInfoProps {
  handleEditBasicInfo: () => void;
}

export default function EditBasicInfo({
  handleEditBasicInfo,
}: EditBasicInfoProps) {
  const [currentPage, setCurrentPage] = useState<number>(-1);
  const [title, setTitle] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleLogout = async () => {
    await deleteToken();
  };

  const handleLeave = async () => {
    await deleteAccount();
  };

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
    if (selectCategory === "LOGOUT") handleLogout();

    if (selectCategory === "LEAVE") setShowModal(true);

    if (selectCategory in STEPS_LABEL) {
      setTitle(INFO_LABEL[selectCategory]);
      const index = SIGNUP_STEPS.findIndex(
        (e) =>
          e.name === STEPS_LABEL[selectCategory as keyof typeof STEPS_LABEL],
      );
      setCurrentPage(index);
    }
  };

  const handleHeaderClick = () => {
    if (currentPage < 0) handleEditBasicInfo();
    else {
      setCurrentPage(-1);
      setTitle("");
    }
  };

  const CurrentComponent = SIGNUP_STEPS[currentPage]?.component;

  return (
    <>
      <Header title={title || "기본 정보 편집"} onClick={handleHeaderClick} />
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
      <Modal
        show={showModal}
        onClose={handleModalClose}
        title="정말 탈퇴하시겠어요? 😢"
        confirmText="탈퇴"
        onConfirm={() => handleLeave()}
        contentStyle={{ color: COLORS.GRAYSCALE_600 }}
      >
        <Typography.H4Md>
          탈퇴 시 서비스의 모든 정보가
          <br />
          삭제 처리 되며 이는 복구할 수 없어요.
        </Typography.H4Md>
      </Modal>
    </>
  );
}
