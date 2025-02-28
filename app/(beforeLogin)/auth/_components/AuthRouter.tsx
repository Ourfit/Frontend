"use client";

import { getTokens } from "@/services/getTokens";
import { useOAuthIdStore } from "@/stores/oAuthIdStore";
import { useTokenStore } from "@/stores/tokenStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface Props {
  query: {
    oAuthId?: string;
    status?: string;
  };
}

export default function AuthRouter({ query }: Props) {
  const router = useRouter();
  const { addToken } = useTokenStore.getState();
  const { addOAuthId } = useOAuthIdStore.getState();

  useEffect(() => {
    const handleTokens = async () => {
      const res = await getTokens(query.oAuthId!);

      if (res.message === "OK") {
        addToken(res.data.accessToken);

        router.replace("/");
      }
    };

    if (query.status === "registered" && query.oAuthId) {
      handleTokens();
    }

    if (query.status === "new" && query.oAuthId) {
      addOAuthId(query.oAuthId);
      router.replace("/auth/signup");
    }
  }, []);

  return <></>;
}
