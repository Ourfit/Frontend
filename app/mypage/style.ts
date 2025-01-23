"use client";

import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  background-color: #ffffff;
  height: 100%;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ProfileOverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 328px;
  padding: 0px 20px;
  box-sizing: border-box;
`;

export const PreferenceSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;
  height: auto;
`;

export const PreferenceFacilityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 100%;
  height: auto;
`;

export const PreferenceTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 100%;
  height: auto;
`;

export const ProfileSection = styled.section<{ $isEditingProfile: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: auto;
  max-height: 300px;
  padding: 12px 0px 32px 0px;
  box-sizing: border-box;
  background-color: #ffffff;
  border-bottom: ${(props) =>
    props.$isEditingProfile ? "0px solid #F9F9FA" : "10px solid #F9F9FA"};
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;

  width: 350px;
  height: 102px;

  margin-top: 29px;
`;

export const DescriptionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 24px;
`;

export const DescriptionTitle = styled.div`
  width: 59px;
  height: 24px;

  font-size: 16px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.16px;
`;

export const DescriptionEdit = styled.div`
  width: 39px;
  height: 20px;

  font-size: 13px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.13px;

  color: ${COLORS.BLUE_500};
  cursor: pointer;
`;

export const DescriptionContent = styled.textarea`
  width: 100%;
  height: 72px;
  max-height: 72px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: horizontal;
  word-wrap: break-word;
  word-break: break-all;

  margin-top: 6px;

  padding: 16px 24px;
  box-sizing: border-box;

  border: 1px solid ${COLORS.GRAYSCALE_200};
  border-radius: 16px;

  font-size: 13px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.13px;

  outline: none;
  resize: none;
  background: transparent;
`;

export const PreferenceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 350px;
  max-width: 350px;
  height: auto;

  margin-top: 16px;
`;

export const PreferenceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 24px;
`;

export const PreferenceTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: auto;
  height: 24px;

  font-size: 16px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.16px;
`;

export const PreferenceEdit = styled.div`
  width: 39px;
  height: 20px;

  font-size: 13px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.13px;

  color: ${COLORS.BLUE_500};
  cursor: pointer;
`;

export const PreferenceContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  width: 100%;
  height: 41px;
`;

export const PreferenceBadge = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;

  width: auto;
  height: 41px;

  padding: 10px 16px 10px 10px;

  border-radius: 12px;
  border: 1px solid ${COLORS.GRAYSCALE_200};
`;

export const PreferencePlaceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: auto;

  gap: 16px;
`;

export const PreferencePlaceInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  height: 73px;

  padding: 16px 20px;
  box-sizing: border-box;

  border-radius: 16px;
  border: 1px solid ${COLORS.GRAYSCALE_200};
`;

export const PreferencePlaceName = styled.strong`
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.14px;
`;

export const PreferencePlaceAddress = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.12px;

  color: ${COLORS.GRAYSCALE_600};
`;

export const PreferenceTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  height: 73px;

  padding: 16px 20px;
  box-sizing: border-box;

  border-radius: 16px;
  border: 1px solid ${COLORS.GRAYSCALE_200};
`;

export const PreferenceTimeTitle = styled.strong`
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.14px;
`;

export const PreferenceTimeRange = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.12px;

  color: ${COLORS.GRAYSCALE_600};
`;

export const ProfileImageWrapper = styled.div<{ $isEditingProfile: boolean }>`
  position: relative;
  width: 72px;
  height: 72px;
  border-radius: 50%;

  overflow: hidden;

  ${({ $isEditingProfile }) =>
    $isEditingProfile &&
    `
    &:hover .background-img {
      filter: blur(4px); 
      opacity: 0.5;
    }

    &:hover .overlay {
      opacity: 1; 
    }
  `}
`;

export const BackgroundImage = styled.img`
  width: 100%;
  max-width: 72px;
  height: 100%;
  max-height: 72px;

  transition: all 0.3s ease;
`;

export const OverlayImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  opacity: 0;
  transition: all 0.3s ease;
`;

export const ProfileName = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.18px;

  margin: 5px 0;
  color: #27282d;
`;

export const ProfileInfo = styled.p`
  font-size: 14px;
  color: #888888;
`;

export const ManagementSection = styled.section`
  background-color: #ffffff;
  border-top: 1px solid #e6e6e6;

  width: 100%;
  height: 432px;
  max-height: 432px;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  padding: 0px 20px;
  box-sizing: border-box;
`;

export const InfoSection = styled.section`
  display: flex;
  justify-content: flex-start;
  position: sticky;
  bottom: 0;

  margin-top: 10px;
  font-size: 12px;
  color: #888888;
  background-color: #ffffff;
  padding: 12px 20px;
  box-sizing: border-box;

  width: 100%;
  height: 42px;
  max-height: 42px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f6f6f8;

  width: 100%;
  height: 75px;
  max-height: 75px;

  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.14px;

  &:last-child {
    border-bottom: none;
  }

  svg {
    color: #babfcc;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 13px;
  width: 100%;

  font-size: 12px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.12px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;

  width: 295px;
  height: 44px;

  margin-top: 15px;
`;

export const PrimaryButton = styled.button`
  padding: 8px 10px;
  width: 68px;
  height: 34px;
  margin-top: 16px;

  font-size: 12px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.12px;

  box-sizing: border-box;

  color: ${COLORS.BLUE_500};

  background-color: ${COLORS.BLUE_50};
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const SecondaryButton = styled.button`
  padding: 12px 24px;
  width: 140px;
  height: 100%;

  font-size: 13px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.13px;

  color: #27282d;

  box-sizing: border-box;

  background-color: #ffffff;
  border: 1px solid #e6e7ee;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f6f6f6;
  }
`;
