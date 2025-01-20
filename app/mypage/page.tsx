import Link from "next/link";

export default function Mypage() {
  return (
    <div>
      <h1>마이페이지 일단 임의</h1>
      <Link href="/mypage/openchat">
        <button>오픈 채팅 관리</button>
      </Link>
    </div>
  );
}
