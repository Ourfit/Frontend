"use client";

import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
  height: 748px;
  max-height: 748px;
`;

export const ProfileSection = styled.section<{ $isEditingProfile: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 8px;

  width: 100%;
  height: 300px;
  padding: 12px 0px 32px 0px;
  background-color: #ffffff;
  border-bottom: ${(props) =>
    props.$isEditingProfile ? "0px solid #F9F9FA" : "10px solid #F9F9FA"};
`;

export const ProfileImage = styled.div`
  width: 72px;
  height: 72px;
  min-height: 72px;
  max-height: 72px;

  border-radius: 50%;
  border: 1px solid gray;

  margin-bottom: 16px;

  img {
    width: 100%;
    height: 100%;
  }
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

  padding: 0px 20px;
  box-sizing: border-box;
`;

export const InfoSection = styled.section`
  display: flex;
  justify-content: flex-start;

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
