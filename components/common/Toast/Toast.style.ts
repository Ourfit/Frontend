"use client";

import { Typography } from "@/components/atoms/Typography";

import styled from "styled-components";

export const ToastContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  gap: 8px;
  padding: 12px 24px 12px 20px;
  border-radius: 40px;
  box-sizing: border-box;
  white-space: nowrap;

  height: 45px;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);

  position: absolute;
  top: 109px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1999;
`;

export const Message = styled(Typography.H6Md)`
  padding: 1.5px 3px;
  box-sizing: border-box;
  flex-shrink: 0;

  color: #ffffff;
`;
