"use client";

import styled from "styled-components";

export const facilityContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;
  height: 229px;
  min-height: 229px;

  gap: 36px;
`;

export const facilityContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;

  width: 390px;
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
  justify-content: center;

  width: 100%;
  height: auto;
`;

export const ResultList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 16px;
  padding: 0px 20px;
  box-sizing: border-box;

  width: 350px;
  height: auto;
`;

export const ResultItem = styled.div`
  display: flex;
  justify-content: center;
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
