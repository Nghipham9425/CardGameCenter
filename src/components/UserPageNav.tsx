import { Heart, PackagePlus, ReceiptText, User } from 'lucide-react'
import { NavLink } from 'react-router'
import { cn } from '../lib/utils'

const userNavItems = [
  { to: '/profile', label: 'Profile', icon: User },
  { to: '/my-listings', label: 'My listings', icon: PackagePlus },
  { to: '/orders', label: 'Orders / trades', icon: ReceiptText },
  { to: '/saved', label: 'Saved', icon: Heart },
]

export function UserPageNav() {
  return (
    <nav className="flex gap-2 overflow-x-auto rounded-lg border border-slate-200 bg-white p-2 shadow-sm">
      {userNavItems.map(({ to, label, icon: Icon }) => (
        <NavLink
          className={({ isActive }) =>
            cn(
              'inline-flex h-10 shrink-0 items-center gap-2 rounded-md px-3 text-sm font-semibold transition',
              isActive ? 'bg-[#263238] text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950',
            )
          }
          key={to}
          to={to}
        >
          <Icon size={16} />
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
