import Link from "next/link";

export default function Home() {
  return (
    <main className="p-24">
      <h1>Wellcome to TODO LIST APP</h1>
      <Link className="underline" href="/dashboard">
        dashboard
      </Link>
    </main>
  );
}
