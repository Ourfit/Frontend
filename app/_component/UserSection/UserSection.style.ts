import { TypographyCss } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const UserSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

export const UserSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 20px;
  padding-right: 20px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  & > span:last-child {
    color: ${COLORS.GRAYSCALE_600};
  }
`;

export const SeeMoreButton = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
  color: ${COLORS.GRAYSCALE_700};
  cursor: pointer;
`;

export const UserListContainer = styled.div`
  display: flex;
  gap: 12px;
  padding-left: 20px;
  overflow: hidden;
`;

export const UserWrapper = styled.div`
  background-color: #ffffff;
  min-width: 154px;
  height: 161px;
  padding: 24px 20px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const ProfileBadge = styled.div`
  position: relative;
`;

export const ProfileImageWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const IconWrapper = styled.div`
  background-color: ${COLORS.BLUE_500};
  width: 18px;
  height: 18px;
  border-radius: 50%;
  position: absolute;
  top: 30px;
  left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    width: 12px;
    height: 12px;
    color: #ffffff;
  }
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 3px;
  align-items: center;

  & > span {
    &:first-child {
      color: ${COLORS.GRAYSCALE_900};
    }

    &:last-child {
      color: ${COLORS.GRAYSCALE_600};
    }
  }
`;

export const ExercisePreferences = styled.div`
  display: flex;
  gap: 6px;
`;

export const PreferenceBadge = styled.div`
  ${TypographyCss.H6Md}

  background-color: ${COLORS.GRAYSCALE_100};
  color: ${COLORS.GRAYSCALE_700};
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 4px 8px;
  border-radius: 8px;
`;
