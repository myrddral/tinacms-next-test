"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function Links() {
  const pathname = usePathname();

  return (
    <nav className='h-10'>
      <ul className='w-full flex justify-center gap-4 text-lg'>
        <li className='link-wrapper'>
          <Link className={`link ${pathname === "/" ? "active" : ""}`} href='/'>
            Home
          </Link>
        </li>
        <li className='link-wrapper'>
          <Link className={`link ${pathname === "/about" ? "active" : ""}`} href='/about'>
            About
          </Link>
        </li>
        <li className='link-wrapper'>
          <Link className={`link ${pathname === "/contact" ? "active" : ""}`} href='/contact'>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
