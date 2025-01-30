"use client";

import { COLORS } from "@/constants/Theme";
import { styled } from "styled-components";

export const ExploreMateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const FilterWrapper = styled.div`
  width: 100%;
  height: 64px;
  padding: 16px 20px 12px 20px;
  box-sizing: border-box;

  display: flex;
  justify-content: flex-start;

  gap: 8px;
`;

export const MateFilterTrigger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 4px;

  width: auto;
  height: 36px;
  padding: 8px 10px;
  box-sizing: border-box;

  border-radius: 12px;
  border: 1.2px solid ${COLORS.GRAYSCALE_200};

  background-color: #ffffff;
`;

export const MateList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;

  gap: 16px;

  width: 350px;
  max-height: 100%;
  overflow-y: auto;

  padding-top: 8px;
  padding-bottom: 20px;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const MateListItem = styled.div`
  display: flex;
  justify-content: center;

  gap: 12px;

  width: 350px;
  height: 124px;

  padding: 20px;
  box-sizing: border-box;

  border: 1.2px solid ${COLORS.GRAYSCALE_200};
  border-radius: 20px;
`;

export const MateProfileImageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
`;

export const MateInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: flex-start;

  gap: 12px;

  width: 250px;
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
`;

export const PreferenceTags = styled.div`
  display: flex;
  gap: 6px;

  width: auto;
  min-width: 117px;
  height: 26px;
`;

export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

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

export const ProfileImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;

  background-color: ${COLORS.GRAYSCALE_300};
`;
