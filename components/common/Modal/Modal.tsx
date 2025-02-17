"use client";

import React from "react";
import * as S from "./Modal.style";
import { Typography } from "@/components/atoms/Typography";

interface ModalContainerProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

interface ModalProps {
  show: boolean;
  onClose: () => void;
  title: string;
  confirmText: string;
  onConfirm: () => void;
  children: React.ReactNode;
  contentStyle?: React.CSSProperties;
}

function ModalContainer({ show, onClose, children }: ModalContainerProps) {
  if (!show) return null;

  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalContainer onClick={(e) => e.stopPropagation()}>
        <S.ModalContent>{children}</S.ModalContent>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
}

export default function Modal({
  show,
  onClose,
  title,
  confirmText,
  onConfirm,
  children,
  contentStyle,
}: ModalProps) {
  return (
    <ModalContainer show={show} onClose={onClose}>
      <S.ModalAlert>
        <S.ModalAlertHeader>
          <Typography.H2Sb color="#27282D">{title}</Typography.H2Sb>
        </S.ModalAlertHeader>

        <S.ModalAlertContent style={{ ...contentStyle }}>
          {children}
        </S.ModalAlertContent>
      </S.ModalAlert>

      <S.ModalButtonWrapper>
        <S.StyledButton onClick={onClose}>취소</S.StyledButton>
        <S.StyledButton onClick={onConfirm}>{confirmText}</S.StyledButton>
      </S.ModalButtonWrapper>
    </ModalContainer>
  );
}
