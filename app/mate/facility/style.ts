"use client";

import styled from "styled-components";

export const facilityContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;
  height: 100%;

  gap: 36px;
`;

export const facilityContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  height: 100%;

  gap: 36px;
  overflow-y: auto;
`;

export const facilityContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;

  width: 100%;
  max-width: 450px;
  height: auto;

  padding: 48px 20px 0px 20px;
  box-sizing: border-box;
`;

export const facilityTitle = styled.div`
  width: 350px;
  height: 64px;

  white-space: pre-line;
  word-break: break-word;
`;

export const HighlightedText = styled.span`
  color: #004dff;
`;

export const PlaceHolderWrapper = styled.div`
  display: flex;

  width: 100%;
  padding: 0px 20px;
  box-sizing: border-box;

  height: auto;
`;

export const ResultList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 16px;

  box-sizing: border-box;

  width: 100%;
  max-width: 450px;

  padding: 0px 20px;
  box-sizing: border-box;
  height: auto;

  max-height: 800px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c4c4c4;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const ResultItem = styled.div`
  display: flex;

  gap: 12px;

  width: 100%;
  height: 43px;
`;

export const FacilityInfo = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;

  width: 298px;
  height: 100%;
`;

export const AddText = styled.div`
  display: flex;
  padding: 0px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  color: var(--Blue-500, #004eff);

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.14px;
`;
