import { useTokenStore } from "@/stores/tokenStore";
import axios from "axios";

interface BasicInfo {
  nickname?: string;
  age?: number;
  gender?: "F" | "M";
  region1?: string;
  region2?: string;
  region3?: string;
  skillLevel?: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
}

export default async function updateBasicInfo(info: BasicInfo) {
  const { token } = useTokenStore.getState();

  try {
    const { status } = await axios.patch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/users/me/basic-info`,
      info,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return status;
  } catch (err) {
    throw err;
  }
}
