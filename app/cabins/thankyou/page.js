import Link from "next/link";

export default function Page() {
  return (
    <div className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">예약이 완료됐습니다. 감사합니다.</h1>
      <Link href="/account/reservations" className="underline text-xl text-accent-500 inline-block">
        예약 확인하기 &rarr;
      </Link>
    </div>
  );
}
