import Link from "next/link";
import { NavLink } from "../lib/definitions";

const links: NavLink[] = [
  {
    name: "profile",
    path: "/dashboard/profile",
  },
  {
    name: "todos",
    path: "/dashboard/todos",
  },
];

export default function NavLinks() {
  return (
    <nav className="h-lvh">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link className="underline" href={link.path}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
