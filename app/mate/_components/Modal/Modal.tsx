"use client";

import React from "react";
import * as S from "./Modal.style";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ show, onClose, children }: ModalProps) {
  if (!show) return null;

  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalContainer>
        <S.ModalContent>{children}</S.ModalContent>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
}
