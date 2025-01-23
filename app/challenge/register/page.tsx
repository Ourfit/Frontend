"use client";

import ChallengeRegister from "@/components/challenge/Register/ChallengeReigster/ChallengeRegister";
import ChallengeSettings from "@/components/challenge/Register/ChallengeSettings/ChallengeSettings";
import Header from "@/components/common/Header/Header";
import Frame from "@/components/layout/Frame";
import { COLORS } from "@/constants/Theme";
import { useState } from "react";

const ChallengeRegisterPage = () => {
  const [isChallengeSetting, setIsChallengeSetting] = useState(false);

  return (
    <>
      <Frame>
        <Header pageName="챌린지 등록" />
        <div
          style={
            isChallengeSetting
              ? {
                  backgroundColor: COLORS.GRAYSCALE_100,
                  marginTop: "48px",
                }
              : { backgroundColor: COLORS.BASE_WHITE, marginTop: "48px" }
          }
        >
          {isChallengeSetting ? (
            <ChallengeSettings />
          ) : (
            <ChallengeRegister setIsChallengeSetting={setIsChallengeSetting} />
          )}
        </div>
      </Frame>
    </>
  );
};

export default ChallengeRegisterPage;
