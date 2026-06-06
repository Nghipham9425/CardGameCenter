import { Link } from 'react-router'
import { avatars } from '../data/avatars'

const footerGroups = [
  {
    title: 'Marketplace',
    links: [
      ['Browse cards', '/market'],
      ['Sell a card', '/sell'],
      ['Verified shipping', '/help'],
    ],
  },
  {
    title: 'Support',
    links: [
      ['Help center', '/help'],
      ['Terms', '/terms'],
      ['Privacy', '/privacy'],
    ],
  },
  {
    title: 'PikaPalace',
    links: [
      ['About', '/about'],
      ['Community rules', '/terms'],
      ['Safety guide', '/help'],
    ],
  },
]

export function Footer() {
  return (
    <footer className="site-footer relative overflow-hidden border-t border-cyan-100 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/88 via-slate-950/58 to-sky-950/20" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/30" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[minmax(0,1fr)_2fr]">
        <div>
          <div className="flex items-center gap-3">
            <img className="size-10 rounded-full bg-[#fffbeb]" src={avatars.pikachu} alt="" />
            <div>
              <p className="text-base font-bold text-white">PikaPalace</p>
              <p className="text-sm text-cyan-50">TCG trading marketplace prototype.</p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-cyan-50/90">
            Built for card collectors to list real photos, chat with sellers, and use verified shipping for higher value deals.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-bold text-white">{group.title}</h2>
              <div className="mt-3 space-y-2">
                {group.links.map(([label, href]) => (
                  <Link className="block text-sm text-cyan-50/80 transition hover:text-white" key={label} to={href}>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 border-t border-white/15 px-5 py-4 text-center text-xs text-cyan-50/70">
        (c) 2026 PikaPalace. Student project prototype.
      </div>
    </footer>
  )
}
