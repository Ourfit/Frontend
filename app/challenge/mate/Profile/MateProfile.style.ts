import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LeftContainer = styled.div`
  display: flex;
  width: 70%;
  padding: 20px 0px 16px 24px;
  gap: 16px;
`;

export const RigthContainer = styled.div`
  display: flex;
  padding: 0px 24px 16px 24px;
  position: relative;
`;

export const MateCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-radius: 16px;
  background-color: ${COLORS.BASE_WHITE};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const ProfileName = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.14px;
  color: ${COLORS.GRAYSCALE_900};
`;

export const ProfileInfo = styled.p`
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.13px;
  color: ${COLORS.GRAYSCALE_600};
`;

export const SelectBox = styled.div`
  position: absolute;
  right: 50px;
  top: -5px;
  padding: 10px;
  background-color: ${COLORS.BASE_WHITE};
  border: 1px solid ${COLORS.GRAYSCALE_200};
  border-radius: 15px;
`;

export const SelectOption = styled.div<{ color: string }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  align-self: stretch;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.14px;
  color: ${(props) => props.color};
  &:hover {
    background-color: ${COLORS.GRAYSCALE_200};
  }
`;

export const PrimaryButton = styled.button`
  display: flex;
  padding: 8px 10px;
  margin-right: 20px;
  justify-content: center;
  align-items: center;
  gap: 2px;

  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.12px;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  color: ${COLORS.BLUE_500};
  background-color: ${COLORS.BLUE_50};
`;

export const CheckButton = styled.button`
  display: flex;
  padding: 10px 14px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.13px;
  border: none;
  cursor: pointer;
  border-radius: 12px;

  color: ${COLORS.BASE_WHITE};
  background-color: ${COLORS.BLUE_500};
`;

export const MoreButton = styled.button<{ $isMateChallengePage: boolean }>`
  display: flex;
  width: 24px;
  height: 24px;

  svg {
    width: 100%;
    height: 100%;
  }

  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  background-color: ${COLORS.BASE_WHITE};
`;

export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;
