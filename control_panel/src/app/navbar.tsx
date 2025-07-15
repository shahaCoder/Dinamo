import * as React from 'react';
import Link from "next/link";

export interface IAppProps {
}

const navItems = [
  { label: "Игроки", href: "/players" },
  { label: "Матчи", href: "/games" },
  { label: "Новости", href: "/news" },
];

export default function Navbar() {
  return (
    <div className="w-full h-screen p-4 text-white">
      <h1 className='text-2xl text-center'>Навигация</h1>
       <ul className="space-y-2 m-2 mt-10">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block px-3 py-2 rounded-lg hover:bg-[#0371ef] transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}