import customFetch from "@/services/customFetch";

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
  const response = await customFetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/users/me/basic-info`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    },
  );

  if (!response.ok) {
    throw new Error(`${response.status}`);
  }

  return response.status;
}
