import { Metadata } from "next";
import RegisterForm from "../ui/register-form";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Register",
};

export default function RegisterPage() {
  return (
    <main className="p-24">
      <h1>REGISTER</h1>
      <RegisterForm />
      <Link className="underline" href="/">
        Home
      </Link>
    </main>
  );
}
