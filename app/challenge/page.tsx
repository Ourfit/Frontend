"use client";

import MyChallenge from "@/components/challenge/MyChallenge/MyChallenge";
import Header from "@/components/common/Header/Header";
import Tab from "@/components/common/Tab/Tab";
import Frame from "@/components/layout/Frame";
import React from "react";

export default function page() {
  return (
    <>
      <Frame>
        <Header pageName="챌린지" />
        <Tab tabs={["챌린지", "기록"]} />
        <div style={{ margin: "0 20px;" }}>
          <MyChallenge />
        </div>
      </Frame>
    </>
  );
}
