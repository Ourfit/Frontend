"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getTokens } from "@/services/getTokens";
import { useTokenStore } from "@/stores/tokenStore";

interface Props {
  oAuthId: string;
}

const TokenHandler = ({ oAuthId }: Props) => {
  const router = useRouter();
  const { addToken } = useTokenStore();

  useEffect(() => {
    const handleTokens = async () => {
      const data = await getTokens(oAuthId);

      addToken(data.accessToken);
      sessionStorage.setItem("refreshToken", data.refreshToken);

      router.replace("/");
    };

    handleTokens();
  }, [oAuthId, router]);

  return <></>;
};

export default TokenHandler;
