import NotificationBanner from "@/components/NotificationBanner/NotificationBanner";
import * as S from "../../style";
import EmptyComponent from "../EmptyComponet/EmptyComponent";
import { useRouter } from "next/navigation";
import MateCard from "../MateCard/MateCard";
import { useEffect } from "react";
import { useChallengeStore } from "@/stores/challengeStore";
import { useQuery } from "@tanstack/react-query";
import getChallenge from "@/services/challenge/getChallenge";
import { useMateInfo } from "@/hooks/queries/useMateInfo";
import { useMyPageInfo } from "@/hooks/queries/useMypageInfo";

export default function ChallengeState() {
  const router = useRouter();
  const { addChallenge } = useChallengeStore();

  const { data: user } = useMyPageInfo();

  const mate = useMateInfo();

  const { data: challenge } = useQuery({
    queryKey: ["myChallenge"],
    queryFn: () => getChallenge(),
    staleTime: 5 * 60 * 1000,
    enabled: !!mate.data,
  });

  const userInfo = {
    id: user?.id || "",
    nickname: user?.nickname || "",
    age: user?.age || 0,
    gender: user?.gender || "",
    profileUrl: user?.profileUrl || "",
    skillLevel: user?.skillLevel || "",
  };
  const myChallenge = challenge || {};
  const myMateInfo = mate?.data?.myMate || {};

  const challengeList = [
    { info: { ...userInfo, isMine: true }, challenge: myChallenge.me },
    { info: myMateInfo, challenge: myChallenge.myMate },
  ];

  useEffect(() => {
    if (myChallenge?.me) {
      addChallenge({
        id: myChallenge.me.challengeId,
        days: myChallenge.me.goalWorkoutDayOfWeeks,
      });
    }
  }, [myChallenge, addChallenge]);

  return (
    <>
      <NotificationBanner
        dayElapsed={myChallenge?.me?.dayElapsed}
        isChallenge
      />
      <S.MateContent>
        {mate?.data && myMateInfo ? (
          <S.MateList>
            {challengeList.map((challenge, i) => (
              <MateCard
                key={i}
                info={challenge.info}
                challenge={challenge.challenge}
                mateId={mate.data.mateId}
              />
            ))}
          </S.MateList>
        ) : (
          <EmptyComponent
            title="아직 메이트가 없어요!"
            buttonContent="메이트 찾기"
            onClick={() => router.push("/mate/explore")}
            isMine
          />
        )}
      </S.MateContent>
    </>
  );
}
