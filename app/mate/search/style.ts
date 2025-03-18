"use client";

import { COLORS } from "@/constants/Theme";
import { styled } from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  width: 100%;
  height: 100%;
`;

export const MateList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  flex-grow: 1;

  gap: 16px;

  width: 100%;
  max-width: 390px;
  height: 100%;

  padding-top: 8px;
  padding-bottom: 20px;

  padding-left: 20px;
  padding-right: 20px;

  box-sizing: border-box;
`;

export const MateListItem = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 12px;

  width: 100%;
  height: 124px;

  padding: 20px;
  box-sizing: border-box;

  border: 1.2px solid ${COLORS.GRAYSCALE_200};
  border-radius: 20px;
`;

export const PlaceHolderWrapper = styled.div`
  width: 100%;
  height: 52px;

  padding: 0px 20px;
  box-sizing: border-box;

  margin-top: 19px;
`;

export const MateInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: flex-start;

  gap: 12px;

  width: 100%;
  height: 84px;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 4px;

  width: auto;
  height: 46px;
`;

export const ProfileInfoTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  width: auto;
  height: 24px;
  color: ${COLORS.GRAYSCALE_900};
`;

export const PreferenceTags = styled.div`
  display: flex;
  gap: 6px;

  width: 100%;
  height: 26px;
`;

export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2px;

  width: auto;
  height: 100%;

  border-radius: 8px;
  padding: 4px 8px;

  background-color: ${COLORS.GRAYSCALE_100};
`;

export const TimeTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2px;

  width: auto;
  height: 100%;

  border-radius: 8px;
  padding: 4px 8px;
  box-sizing: border-box;

  background-color: ${COLORS.GRAYSCALE_100};
`;

export const ProfileText = styled.div`
  max-width: 235px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: ${COLORS.GRAYSCALE_600};
`;
