"use client";

import ChevroRightIcon from "@/assets/images/chevron-right.svg";
import DumbbellsIcon from "@/assets/images/dumbbells.svg";
import { Typography } from "@/components/atoms/Typography";
import * as S from "./NotificationBanner.style";
import { useMutation, useQuery } from "@tanstack/react-query";
import { MateHistory } from "@/types/mates";
import { dateFormat } from "@/utils/monthList";
import getMatesHistory from "@/services/getMatesHistory";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { RecordType } from "@/constants/Calendar";
import { challengeComplete } from "@/services/challenge/challengeComplete";
import { useChallengeStore } from "@/stores/challengeStore";
import { queryClient } from "../common/ReactQueryProvider";
import { useState } from "react";
import Toast from "../common/Toast/Toast";

interface NotificationBannerType {
  isHome?: boolean;
  isChallenge?: boolean;
  isRecord?: boolean;
  todayRecord?: RecordType | null;
  dayElapsed?: number;
}

export default function NotificationBanner({
  isHome,
  isChallenge,
  isRecord,
  todayRecord,
  dayElapsed,
}: NotificationBannerType) {
  const { challenge } = useChallengeStore();
  const [toast, setToast] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["history"],
    queryFn: () => getMatesHistory({ actionTypes: "RECEIVE", size: 1 }),
  });

  const mutation = useMutation({
    mutationFn: () => challengeComplete(1, challenge?.id),
    onSuccess: (status) => {
      if (status === 200) {
        queryClient.invalidateQueries({ queryKey: ["challengeRecord"] });
      }
    },
    onError: () => {
      setToast("잠시 후 다시 시도해주세요.");
      setTimeout(() => setToast(""), 3000);
    },
  });

  const mateHistory: MateHistory[] = data?.data.content;
  const notification =
    mateHistory?.filter((e) => e.roleType === "TARGET" && !e.isRead) || [];
  const isCompolete = todayRecord?.isCompleted;

  const handleComplete = () => {};

  if (isHome && (isLoading || !notification.length)) return <></>;

  return (
    <S.BannerWrapper>
      <S.BannerContainer $isHome={isHome}>
        <S.ContentWrapper>
          <S.IconWrapper $isHome={isHome}>
            <DumbbellsIcon />
          </S.IconWrapper>
          <S.NotificationContent $isHome={isHome}>
            <Typography.H6Md>
              {isChallenge
                ? "챌린지 도전"
                : isRecord
                  ? dateFormat(new Date(), "MD")
                  : dateFormat(new Date(notification[0].createdAt), "MD")}
            </Typography.H6Md>
            <Typography.H4Sb>
              {isChallenge
                ? `챌린지 시작 +${dayElapsed || 0}일!`
                : todayRecord
                  ? "오늘은 운동하는 날이에요!"
                  : isRecord
                    ? "오늘은 예정된 운동이 없어요!"
                    : "운동 메이트 신청이 있어요!"}
            </Typography.H4Sb>
          </S.NotificationContent>
        </S.ContentWrapper>
        {isHome && <ChevroRightIcon />}
        {todayRecord && (
          <S.CompleteButton
            $size={BUTTON_SIZES.EXTRA_SMALL}
            $variant={BUTTON_VARIANTS.PRIMARY}
            $disabled={isCompolete}
            onClick={handleComplete}
          >
            운동 완료
          </S.CompleteButton>
        )}
      </S.BannerContainer>
      {toast && <Toast message={toast} />}
    </S.BannerWrapper>
  );
}
