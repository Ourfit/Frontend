"use client";

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
