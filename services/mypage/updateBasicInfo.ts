import { api } from "../axiosInterceptor";

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
  try {
    const { status } = await api.patch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/users/me/basic-info`,
      info,
    );

    return status;
  } catch (err) {
    throw err;
  }
}
