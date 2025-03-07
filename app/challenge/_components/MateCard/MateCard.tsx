import { Typography } from "@/components/atoms/Typography";
import ProfileImgBadge from "@/components/common/DefaultProfileImg/ProfileImgBadge";
import EmptyComponent from "../EmptyComponet/EmptyComponent";
import * as S from "./MateCard.style";
import { useRouter } from "next/navigation";
import { Challenge, ChallengeUserInfo } from "@/types/challenge";
import { skillLevelMap } from "@/constants/User";
import ChallengeInfo from "../ChallengeInfo/ChallengeInfo";
import MoreIcon from "@/assets/images/moreButton.svg";
import { useState } from "react";
import { COLORS } from "@/constants/Theme";
import deleteChallenge from "@/services/challenge/deleteChallenge";
import { queryClient } from "@/components/common/ReactQueryProvider";
import { useMutation } from "@tanstack/react-query";
import Toast from "@/components/common/Toast/Toast";
import { TOAST_STATUSES } from "@/constants/Toast";

interface MateCardProps {
  info: ChallengeUserInfo;
  challenge: Challenge | null;
  mateId: number;
}

export default function MateCard({ info, challenge, mateId }: MateCardProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState("");

  const mutation = useMutation({
    mutationFn: () => deleteChallenge(challenge?.challengeId),
    onSuccess: (status) => {
      if (status === 200) {
        queryClient.invalidateQueries({ queryKey: ["myChallenge"] });
        queryClient.invalidateQueries({ queryKey: ["challengeRecord"] });
      }
    },
    onError: () => {
      setToast("잠시 후 다시 시도해주세요.");
      setTimeout(() => setToast(""), 3000);
    },
  });

  const handleSelectClick = async (option: string) => {
    if (option === "수정") {
      router.push("/challenge/edit");
    } else {
      mutation.mutate();
    }
  };

  return (
    <S.CardContainer>
      <S.CardWrapper>
        <S.MateProfile>
          <S.BasicInfoWrapper>
            <ProfileImgBadge imageUrl={info.profileUrl} />
            <S.BasicInfo>
              <Typography.H4Sb>{info.nickname}</Typography.H4Sb>
              <Typography.H5Md>
                {info.gender === "F" ? "여" : "남"}, {info.age}세
              </Typography.H5Md>
            </S.BasicInfo>
          </S.BasicInfoWrapper>
          {!challenge ? (
            <S.LevelBadge>{skillLevelMap[info.skillLevel]}</S.LevelBadge>
          ) : info.isMine ? (
            <S.MoreButton>
              <MoreIcon onClick={() => setIsOpen((prev) => !prev)} />
              <S.SelectOption $isOpen={isOpen}>
                {["수정", "삭제"].map((option, index) => (
                  <S.Option
                    key={index}
                    onClick={() => handleSelectClick(option)}
                  >
                    <Typography.H4Md
                      color={
                        option === "삭제"
                          ? COLORS.POINT_ERROR
                          : COLORS.GRAYSCALE_900
                      }
                    >
                      챌린지 {option}하기
                    </Typography.H4Md>
                  </S.Option>
                ))}
              </S.SelectOption>
            </S.MoreButton>
          ) : null}
        </S.MateProfile>
        <S.Divider />
        <S.MainContent>
          {challenge ? (
            <ChallengeInfo challenge={challenge} />
          ) : (
            <EmptyComponent
              title="아직 등록한 챌린지가 없어요!"
              buttonContent="챌린지 등록"
              onClick={() => router.push(`/challenge/registration/${mateId}`)}
              isMine={info.isMine}
            />
          )}
        </S.MainContent>
      </S.CardWrapper>
      {toast && <Toast message={toast} status={TOAST_STATUSES.ERROR} />}
    </S.CardContainer>
  );
}
