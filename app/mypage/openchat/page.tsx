"use client";

import Button from "@/components/common/Button/index";
import Input from "@/components/common/Input/Input";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { INPUT_STATUS, InputStatus } from "@/constants/InputStatus";
import Image from "next/image";

import Header from "@/components/common/Header/Header";
import { queryClient } from "@/components/common/ReactQueryProvider";
import Toast from "@/components/common/Toast/Toast";
import { TOAST_MESSAGES, TOAST_STATUSES, ToastStatus } from "@/constants/Toast";
import { useMyPageInfo } from "@/hooks/queries/useMypageInfo";
import { updateUserProfile } from "@/services/updateUserProfile";
import { usePathname, useRouter } from "next/navigation";
import React, { useDeferredValue, useEffect, useRef, useState } from "react";
import * as S from "./style";

export default function OpenChatPage() {
  const pathname = usePathname();
  const router = useRouter();
  const { data } = useMyPageInfo();
  const introduction = data?.introduction;

  const [linkValue, setLinkValue] = useState(data?.openChatUrl || "");
  const [status, setStatus] = useState<InputStatus>(INPUT_STATUS.DEFAULT);
  const [isTyping, setIsTyping] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showToast, setShowToast] = useState("");
  const [toastStatus, setToastStatus] = useState<ToastStatus>();

  const deferredValue = useDeferredValue(linkValue);

  const hasUnsubmittedData = !isSubmitted && linkValue.trim().length > 0;
  const prevPathnameRef = useRef(pathname);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setLinkValue(inputValue);

    if (inputValue.trim() === "") {
      setStatus(INPUT_STATUS.DEFAULT);
      setIsTyping(false);
    } else {
      setIsTyping(true);
      setStatus(INPUT_STATUS.TYPING);
    }
  };

  const handleInputBlur = () => {
    if (linkValue.trim() !== "") {
      setStatus(INPUT_STATUS.COMPLETE);
    } else {
      setStatus(INPUT_STATUS.DEFAULT);
    }
    setIsTyping(false);
  };

  const handleInputClear = () => {
    setLinkValue("");
    setIsTyping(false);
    setStatus(INPUT_STATUS.DEFAULT);
  };

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleInputBlur();
    }
  };

  const handleSubmit = async () => {
    try {
      await updateUserProfile({
        introduction: introduction || null,
        openChatUrl: linkValue.trim() || null,
      });
      await queryClient.invalidateQueries({
        queryKey: ["myPageInfo"],
        refetchType: "all",
      });
      setShowToast(TOAST_MESSAGES.SUCCESS);
      setToastStatus(TOAST_STATUSES.SUCCESS);
      setTimeout(() => {
        setShowToast("");
      }, 2000);
    } catch (error) {
      console.error("오픈 채팅 링크 등록 실패:", error);
      setShowToast("올바른 형식이 아닙니다.");
      setToastStatus(TOAST_STATUSES.ERROR);
      setTimeout(() => {
        setShowToast("");
      }, 2000);
    }
  };

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsubmittedData) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [hasUnsubmittedData, isSubmitted]);

  useEffect(() => {
    if (data?.openChatUrl) {
      setLinkValue(data.openChatUrl);
    }
  }, [data]);

  return (
    <>
      <Header />
      <S.Container>
        <S.Content>
          <S.Description>
            소통을 위해 <br />
            <S.HighlightText>오픈 채팅 링크</S.HighlightText>를 등록해주세요!
          </S.Description>
          <S.SubDescription>
            오픈 채팅방을 개설해 링크를 등록해주세요.
          </S.SubDescription>
          <S.InputWrapper>
            <S.IconWrapper>
              <S.RoundedImage>
                <Image
                  src="/icons/Kakao_logo.png"
                  alt="카카오톡"
                  width={40}
                  height={40}
                />
              </S.RoundedImage>
            </S.IconWrapper>
            <Input
              value={linkValue}
              deferredValue={deferredValue}
              placeholder="오픈 채팅방 링크 붙여놓기"
              status={status}
              isTyping={isTyping}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onClear={handleInputClear}
              onKeyPress={handleInputKeyPress}
              isNonIcon
            />
          </S.InputWrapper>
        </S.Content>
        <S.SubmitButtonWrapper>
          <Button
            size={BUTTON_SIZES.LARGE}
            variant={BUTTON_VARIANTS.PRIMARY}
            onClick={handleSubmit}
            disabled={
              deferredValue.trim() === "" ||
              deferredValue.trim() === data?.openChatUrl
            }
          >
            등록 완료
          </Button>
        </S.SubmitButtonWrapper>
        {showToast && <Toast message={showToast} status={toastStatus} />}
      </S.Container>
    </>
  );
}
