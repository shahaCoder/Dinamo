import * as React from 'react';
import Link from "next/link";
import Image from 'next/image';

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
      <div className='flex gap-5'>
         <Image
                        className="w-10"
                        src="/logo.png"
                        alt="Logo"
                        width={100}
                        height={100}
                        priority
                     />
        <h1 className='text-2xl text-center'>Навигация</h1>
      </div>
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