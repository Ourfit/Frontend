import { TypographyCss } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const UserListContainer = styled.div`
  padding-left: 20px;
  height: 193px;
  display: flex;
  align-items: center;
`;

export const UserListWrapper = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: scroll;

  & > div:last-child {
    margin-right: 20px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const UserWrapper = styled.div`
  background-color: #ffffff;
  min-width: 154px;
  height: 161px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const PreferenceBadge = styled.div<{
  $isHighlighted: boolean;
}>`
  ${TypographyCss.H6Md}

  background-color: ${(props) =>
    props.$isHighlighted ? COLORS.BLUE_50 : COLORS.GRAYSCALE_100};
  color: ${(props) =>
    props.$isHighlighted ? COLORS.BLUE_500 : COLORS.GRAYSCALE_700};
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 4px 8px;
  border-radius: 8px;
  white-space: nowrap;

  & > svg {
    width: 14px;
    height: 14px;
  }
`;

export const EmptyContainer = styled.div`
  ${TypographyCss.H6Md}

  width: 154px;
  height: 162px;
  border-radius: 16px;
  background-color: ${COLORS.GRAYSCALE_50};
  color: ${COLORS.GRAYSCALE_500};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px dashed #dce0ea;
`;
