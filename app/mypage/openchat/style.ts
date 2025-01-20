"use client";

import { TypographyCss } from "@/components/atoms/Typography";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  min-height: 870px;
  width: 100%;
  background-color: #ffffff;

  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 48px 20px 0px 20px;
  width: 100%;
`;

export const Description = styled.div`
  gap: 4px;
  width: 350px;
  height: auto;

  ${TypographyCss.H1Sb};
`;

export const HighlightText = styled.span`
  color: #004dff;
`;

export const SubDescription = styled.div`
  ${TypographyCss.H4Md}

  color: #8a92a3;
  margin-top: 8px;
  margin-bottom: 24px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 16px;
  margin-top: 12px;
`;

export const SubmitButtonWrapper = styled.div`
  margin-bottom: 20px;
  width: 350px;
  height: 53px;

  position: sticky;
  bottom: 104px;
`;

export const InputText = styled.p`
  font-size: 14px;
  color: #999999;
`;

export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fae300;
  border-radius: 9.23px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const RoundedImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 9.23px;
  overflow: hidden;
`;
