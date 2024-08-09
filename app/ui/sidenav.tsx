import Link from "next/link";
import NavLinks from "./nav-links";

export default function Sidenav() {
  return (
    <aside className="p-10 bg-gray-600 text-white">
      <h2>SIDENAV</h2>
      <Link className="underline" href="/dashboard">
        dashboard
      </Link>
      <NavLinks />
    </aside>
  );
}
