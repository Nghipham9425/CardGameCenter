import { Camera, MapPin, MessageCircle, Star } from 'lucide-react'
import type { Listing } from '../types'
import { Badge } from './Badge'

export function ListingCard({
  listing,
  featured = false,
  onOpen,
  onChat,
}: {
  listing: Listing
  featured?: boolean
  onOpen: () => void
  onChat: () => void
}) {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-amber-200 hover:shadow-md">
      <div className="grid gap-4 p-4 min-[520px]:grid-cols-[128px_minmax(0,1fr)]">
        <button className="relative block w-full text-left min-[520px]:w-32" type="button" onClick={onOpen}>
          <div className="mx-auto aspect-[63/88] w-32 max-w-full overflow-hidden rounded-md bg-slate-100 min-[520px]:mx-0">
            <img className="h-full w-full object-cover" src={listing.image} alt={listing.name} />
          </div>
          <span className="absolute bottom-2 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-md bg-slate-950/90 px-2 py-1 text-xs font-semibold text-white min-[520px]:left-2 min-[520px]:translate-x-0">
            <Camera size={13} />
            {listing.photos}
          </span>
        </button>

        <div className="min-w-0">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <Badge tone={listing.kind === 'Sealed Box' ? 'blue' : 'neutral'}>{listing.kind}</Badge>
            <Badge tone={listing.type === 'Trade' ? 'amber' : 'green'}>{listing.type}</Badge>
            {featured && <Badge tone="red">Hot</Badge>}
          </div>

          <button className="block max-w-full text-left" type="button" onClick={onOpen}>
            <h3 className="line-clamp-2 text-lg font-semibold leading-tight text-slate-950">{listing.name}</h3>
            <p className="mt-1 truncate text-sm text-slate-500">{listing.setName}</p>
          </button>

          <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
            <div className="min-w-0">
              <p className="text-xs text-slate-500">Condition</p>
              <p className="truncate font-semibold text-slate-900">{listing.condition}</p>
            </div>
            <div className="min-w-0">
              <p className="text-xs text-slate-500">Type / rarity</p>
              <p className="truncate font-semibold text-slate-900">{listing.rarity}</p>
            </div>
          </div>

          <div className="mt-4 grid gap-3 min-[520px]:grid-cols-[minmax(0,1fr)_auto] min-[520px]:items-end">
            <div className="min-w-0">
              <p className="text-xs text-slate-500">Ask price</p>
              <p className="truncate text-base font-bold text-slate-950">{listing.price}</p>
            </div>
            <button
              className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-[#263238] px-4 text-sm font-semibold text-white transition hover:bg-[#1b2529] min-[520px]:w-auto"
              type="button"
              onClick={onChat}
            >
              <MessageCircle size={17} />
              Chat
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 px-4 py-3">
        <div className="flex flex-wrap gap-2">
          {listing.tags.map((tag) => (
            <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between gap-3 text-xs text-slate-500">
          <span className="inline-flex min-w-0 items-center gap-1 truncate">
            <Star size={13} className="shrink-0 fill-amber-400 text-amber-400" />
            <span className="truncate">
              {listing.seller} · {listing.rating}
            </span>
          </span>
          <span className="inline-flex shrink-0 items-center gap-1">
            <MapPin size={13} />
            {listing.location}
          </span>
        </div>
      </div>
    </article>
  )
}
