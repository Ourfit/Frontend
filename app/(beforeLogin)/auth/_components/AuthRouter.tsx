"use client";

import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import { getTokens } from "@/services/getTokens";
import { useTokenStore } from "@/stores/tokenStore";
import { useOAuthIdStore } from "@/stores/oAuthIdStore";

interface Props {
  query: {
    oAuthId?: string;
    status?: string;
  };
}

export default function AuthRouter({ query }: Props) {
  const router = useRouter();
  const { addToken } = useTokenStore();
  const { addOAuthId } = useOAuthIdStore();

  if (query.oAuthId) addOAuthId(query.oAuthId);

  useEffect(() => {
    const handleTokens = async () => {
      const data = await getTokens(query.oAuthId!);

      addToken(data.data.accessToken);
      sessionStorage.setItem("refreshToken", data.data.refreshToken);

      router.replace("/");
    };

    if (query.status === "registered" && query.oAuthId) {
      handleTokens();
    }
  }, []);

  if (query.status === "new") {
    redirect("/auth/signup");
  }

  return <></>;
}
