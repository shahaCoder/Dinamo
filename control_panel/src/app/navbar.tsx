'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Игроки', href: '/players' },
  { name: 'Матчи', href: '/games' },
  { name: 'Новости', href: '/news' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-full min-h-screen bg-slate-800 text-slate-200 p-4 border-r border-slate-700">
      <h2 className="text-xl font-bold mb-6 text-slate-100">Навигация</h2>
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                px-4 py-2 rounded-md transition font-medium
                ${isActive
                  ? 'bg-slate-700 text-white font-semibold'
                  : 'text-slate-300 hover:bg-slate-700'}
              `}
            >
              {item.name}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
