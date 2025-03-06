import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json({ message: "No query provided" }, { status: 400 });
  }

  const KAKAO_REST_API_KEY = process.env.KAKAO_REST_API_KEY;
  console.log("REST_API_KEY:", process.env.KAKAO_REST_API_KEY);
  if (!KAKAO_REST_API_KEY) {
    return NextResponse.json(
      { message: "No Kakao REST API key" },
      { status: 500 },
    );
  }

  try {
    const response = await axios.get(
      `https://dapi.kakao.com/v2/local/search/keyword`,
      {
        params: {
          query,
        },
        headers: {
          Authorization: `KakaoAK ${KAKAO_REST_API_KEY}`,
        },
      },
    );

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error(
      "카카오 검색 API 에러:",
      error.response?.data || error.message,
    );
    return NextResponse.json({ message: "Kakao API Error" }, { status: 500 });
  }
}
