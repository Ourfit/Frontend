"use client";

import ChallengeRegister from "@/components/challenge/Register/ChallengeRegister";
import Header from "@/components/common/Header/Header";
import Frame from "@/components/layout/Frame";

export default function page() {
  return (
    <>
      <Frame>
        <Header pageName="챌린지" />
        <div style={{ margin: "0 20px" }}>
          <ChallengeRegister />
        </div>
      </Frame>
    </>
  );
}
