import { Bell, Heart, LogIn, LogOut, PackagePlus, ReceiptText, Search, Store, User, Zap } from 'lucide-react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router'
import { avatars } from '../data/avatars'
import { cn } from '../lib/utils'
import { IconButton } from './IconButton'

const navItems = [
  { to: '/market', label: 'Market', icon: Store },
  { to: '/sell', label: 'Sell', icon: PackagePlus },
]

export function Header({
  isLoggedIn,
  onLogout,
}: {
  isLoggedIn: boolean
  onLogout: () => void
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  function handleLogout() {
    setMenuOpen(false)
    onLogout()
    navigate('/market')
  }

  function goToUserPage(path: string) {
    setMenuOpen(false)
    navigate(path)
  }

  return (
    <header className="border-b border-slate-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-5 py-4 sm:px-8">
        <button
          className="flex h-11 shrink-0 items-center gap-3 rounded-md px-1 text-slate-950"
          type="button"
          onClick={() => navigate('/market')}
        >
          <img className="size-8 rounded-full" src={avatars.pikachu} alt="" />
          <span className="text-base font-bold">PikaPalace</span>
        </button>

        <div className="mx-auto hidden w-full max-w-md items-center rounded-md border border-slate-100 bg-slate-50 px-3 lg:flex">
          <Search size={18} className="text-slate-400" />
          <input
            className="h-11 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-slate-400"
            placeholder="Search cards, boxes, sellers..."
            type="search"
          />
        </div>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              className={({ isActive }) =>
                cn(
                  'inline-flex h-10 items-center gap-2 rounded-md px-3 text-sm font-semibold transition',
                  isActive
                    ? 'bg-[#ffecb3] text-[#263238]'
                    : 'text-slate-600 hover:bg-[#e3f2fd] hover:text-slate-950',
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

        <IconButton label="Notifications">
          <Bell size={18} />
        </IconButton>

        {isLoggedIn ? (
          <div className="relative">
            <button
              className="grid size-11 shrink-0 place-items-center overflow-hidden rounded-full border border-amber-200 bg-[#fffbeb]"
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="User menu"
            >
              <img className="size-10" src={avatars.pikachu} alt="" />
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl">
                <button
                  className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-semibold text-slate-700 hover:bg-slate-50"
                  type="button"
                  onClick={() => goToUserPage('/profile')}
                >
                  <User size={17} />
                  Profile
                </button>
                <button
                  className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-semibold text-slate-700 hover:bg-slate-50"
                  type="button"
                  onClick={() => goToUserPage('/my-listings')}
                >
                  <Zap size={17} />
                  My listings
                </button>
                <button
                  className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-semibold text-slate-700 hover:bg-slate-50"
                  type="button"
                  onClick={() => goToUserPage('/orders')}
                >
                  <ReceiptText size={17} />
                  Orders / trades
                </button>
                <button
                  className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-semibold text-slate-700 hover:bg-slate-50"
                  type="button"
                  onClick={() => goToUserPage('/saved')}
                >
                  <Heart size={17} />
                  Saved
                </button>
                <button
                  className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-semibold text-[#ef5350] hover:bg-red-50"
                  type="button"
                  onClick={handleLogout}
                >
                  <LogOut size={17} />
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            className="inline-flex h-10 items-center gap-2 rounded-md bg-[#263238] px-3 text-sm font-semibold text-white"
            type="button"
            onClick={() => navigate('/login')}
          >
            <LogIn size={16} />
            Login
          </button>
        )}
      </div>

      <div className="scrollbar-hide flex gap-2 overflow-x-auto border-t border-slate-100 px-5 py-2 sm:px-8 lg:hidden">
        {navItems.map(({ to, label }) => (
          <NavLink
            className={({ isActive }) =>
              cn(
                'h-9 shrink-0 rounded-md px-3 py-2 text-sm font-semibold',
                isActive ? 'bg-[#ffecb3] text-[#263238]' : 'bg-white text-slate-600',
              )
            }
            key={to}
            to={to}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </header>
  )
}
