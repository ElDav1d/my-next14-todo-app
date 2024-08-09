import Link from 'next/link';
import NavLinks from './nav-links';

export default function Sidenav() {
  return (
    <aside className="p-10 bg-gray-600 text-white">
      <Link className="underline" href="/">
        HOME
      </Link>

      <NavLinks />
    </aside>
  );
}
