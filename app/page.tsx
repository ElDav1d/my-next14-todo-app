import Link from "next/link";

export default function Home() {
  return (
    <main className="p-24">
      <h1>Wellcome to TODO LIST APP</h1>
      <Link className="underline mr-4" href="/dashboard">
        dashboard
      </Link>
      <Link className="underline mr-4" href="/register">
        register
      </Link>
      <Link className="underline" href="/login">
        login
      </Link>
    </main>
  );
}
