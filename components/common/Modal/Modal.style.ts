"use client";

import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;

  width: 100%;
  max-width: 450px;
  height: 100vh;

  background: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 10000;

  transform: translate(-50%, -50%);
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 12px;

  width: 290px;
  height: 204px;
  box-sizing: border-box;
  border-radius: 20px;

  padding: 28px 0px 20px 0px;

  background-color: #ffffff;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  align-items: center;
`;

export const ModalAlert = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const ModalAlertHeader = styled.div`
  display: flex;
  justify-content: center;
  color: ${COLORS.GRAYSCALE_900};
`;

export const HighlightText = styled.span`
  color: #fa6767;
`;

export const ModalAlertContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 50px;

  gap: 12px;
`;

export const StyledButton = styled.button`
  width: 120px;
  height: 50px;
  border-radius: 16px;
  border: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #545862;

  &:last-child {
    background-color: #004dff;
    color: #ffffff;
  }

  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.16px;
`;
