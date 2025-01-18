"use client";

import Button from "@/components/common/Button/index";
import Input from "@/components/common/Input/Input";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { INPUT_STATUS, InputStatus } from "@/constants/InputStatus";
import Image from "next/image";

import Toast from "@/components/common/Toast/Toast";
import React, { useDeferredValue, useEffect, useState } from "react";
import * as S from "./style";

export default function OpenChatPage() {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<InputStatus>(INPUT_STATUS.DEFAULT);
  const [isTyping, setIsTyping] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const deferredValue = useDeferredValue(value);

  const hasUnsubmittedData = !isSubmitted && value.trim().length > 0;
  console.log(hasUnsubmittedData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    if (inputValue.trim() === "") {
      setStatus(INPUT_STATUS.DEFAULT);
      setIsTyping(false);
    } else {
      setIsTyping(true);
      setStatus(INPUT_STATUS.TYPING);
    }
  };

  const handleInputBlur = () => {
    if (value.trim() !== "") {
      setStatus(INPUT_STATUS.COMPLETE);
    } else {
      setStatus(INPUT_STATUS.DEFAULT);
    }
    setIsTyping(false);
  };

  const handleInputClear = () => {
    setValue("");
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
      await navigator.clipboard.writeText(value);
      setIsSubmitted(true);
      console.log("등록 완료 버튼 클릭 및 링크 복사 완료");
    } catch (error) {
      console.error("클립보드 복사 실패", error);
    }
  };

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (hasUnsubmittedData) {
        setShowToast(true);

        setTimeout(() => {
          setShowToast(false);
        }, 4000);

        window.history.pushState(null, "", window.location.href);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [hasUnsubmittedData]);

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
  }, [hasUnsubmittedData]);

  return (
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
            value={value}
            deferredValue={deferredValue}
            placeholder="오픈 채팅방 링크 붙여놓기"
            status={status}
            isTyping={isTyping}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onClear={handleInputClear}
            onKeyPress={handleInputKeyPress}
          />
        </S.InputWrapper>
      </S.Content>
      <S.SubmitButtonWrapper>
        <Button
          size={BUTTON_SIZES.LARGE}
          variant={BUTTON_VARIANTS.PRIMARY}
          onClick={handleSubmit}
          disabled={deferredValue.trim() === ""}
        >
          등록 완료
        </Button>
      </S.SubmitButtonWrapper>

      {showToast && (
        <Toast
          message="등록 완료 버튼을 눌러 등록 내용을 저장해주세요"
          status="error"
        />
      )}
    </S.Container>
  );
}
