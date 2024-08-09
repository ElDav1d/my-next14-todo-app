import { Metadata } from "next";
import LoginForm from "../ui/login-form";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Log in",
};

export default function LoginPage() {
  return (
    <main className="p-24">
      <h1>LOG IN</h1>
      <LoginForm />
      <Link className="underline" href="/">
        Home
      </Link>
    </main>
  );
}
