import { Flame, Leaf, Waves } from 'lucide-react'
import { cn } from '../lib/utils'

const regions = [
  {
    title: 'Cinder Canyon',
    subtitle: 'Hot pulls, slabs, and fire-type chase cards.',
    icon: Flame,
    accent: '#ef5350',
    className: 'region-cinder',
  },
  {
    title: 'Bloom Grove',
    subtitle: 'Fresh listings, garden rares, and trade bundles.',
    icon: Leaf,
    accent: '#2e7d32',
    className: 'region-bloom',
  },
  {
    title: 'Shell Coast',
    subtitle: 'Sealed boxes, verified shipping, and calm deals.',
    icon: Waves,
    accent: '#1976d2',
    className: 'region-shell',
  },
]

export function RegionShowcase() {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.25fr_0.9fr_0.9fr]">
      {regions.map((region, index) => {
        const Icon = region.icon

        return (
          <article
            className={cn(
              'region-card group relative min-h-[220px] overflow-hidden rounded-xl p-5 text-white shadow-sm',
              index === 0 && 'lg:min-h-[300px]',
              region.className,
            )}
            key={region.title}
          >
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/45 to-transparent" />
            <div className="absolute -bottom-8 -right-7 size-36 rounded-full bg-white/15 blur-2xl transition group-hover:scale-125" />

            <div className="relative z-10 flex h-full min-h-[180px] flex-col justify-between">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/20 px-3 py-1.5 text-xs font-bold backdrop-blur">
                <Icon size={15} />
                Featured region
              </div>

              <div className="max-w-sm">
                <h2 className={cn('font-black tracking-normal', index === 0 ? 'text-4xl' : 'text-2xl')}>
                  {region.title}
                </h2>
                <p className="mt-2 max-w-[260px] text-sm leading-6 text-white/85">{region.subtitle}</p>
                <button
                  className="mt-4 rounded-md bg-white px-3 py-2 text-sm font-bold text-slate-950 shadow-sm transition hover:-translate-y-0.5"
                  style={{ color: region.accent }}
                  type="button"
                >
                  Explore
                </button>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
