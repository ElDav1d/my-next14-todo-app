'use client';

import Link from 'next/link';
import { NavLink } from '../lib/definitions';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const links: NavLink[] = [
  {
    name: 'dashboard',
    path: '/dashboard',
  },
  {
    name: 'profile',
    path: '/dashboard/profile',
  },
  {
    name: 'todos',
    path: '/dashboard/todos',
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <nav className="h-lvh">
      <ul>
        {links.map(({ name, path }, index) => (
          <li key={index}>
            <Link
              className={clsx(
                {
                  'text-blue-200': pathname === path,
                },
                { underline: pathname !== path }
              )}
              href={path}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
