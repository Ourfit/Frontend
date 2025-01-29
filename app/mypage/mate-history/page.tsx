import Header from "@/components/common/Header/Header";

export default function MateHistoryPage() {
  const MateRequestList = [
    {
      userId: 1,
      name: "중수다람쥐",
    },
    {
      userId: 2,
      name: "중수다람쥐",
    },
    {
      userId: 3,
      name: "중수다람쥐",
    },
    {
      userId: 4,
      name: "중수다람쥐",
    },
  ];

  return (
    <>
      <Header />
      <div>
        <div>
          <button>신청 내역</button>
          <button>매칭 내역</button>
        </div>
        <div>
          {MateRequestList.map(() => (
            <div></div>
          ))}
        </div>
      </div>
    </>
  );
}
