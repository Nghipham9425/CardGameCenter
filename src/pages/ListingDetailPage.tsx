import { Handshake, Heart, MessageCircle, ShieldCheck } from 'lucide-react'
import { Badge } from '../components/Badge'
import type { Listing } from '../types'

export function ListingDetailPage({
  listing,
  onChat,
  onMakeOffer,
}: {
  listing: Listing
  onChat: (listing: Listing) => void
  onMakeOffer: (listing: Listing) => void
}) {
  return (
    <section className="mx-auto grid max-w-6xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[420px_minmax(0,1fr)]">
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <div className="overflow-hidden rounded-md bg-slate-100">
          <img className="h-full w-full object-cover" src={listing.image} alt={listing.name} />
        </div>
        <div className="mt-3 grid grid-cols-4 gap-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="aspect-square rounded-md border border-slate-200 bg-slate-50 p-1" key={index}>
              <img className="h-full w-full rounded object-cover" src={listing.image} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap gap-2">
            <Badge tone={listing.kind === 'Sealed Box' ? 'blue' : 'neutral'}>{listing.kind}</Badge>
            <Badge tone={listing.type === 'Trade' ? 'amber' : 'green'}>{listing.type}</Badge>
            <Badge tone="amber">Verified shipping optional</Badge>
          </div>
          <h1 className="mt-4 text-3xl font-semibold text-slate-950">{listing.name}</h1>
          <p className="mt-1 text-slate-500">{listing.setName}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ['Condition', listing.condition],
              ['Price', listing.price],
              ['Seller', `${listing.seller} · ${listing.rating}`],
            ].map(([label, value]) => (
              <div className="rounded-md border border-slate-200 bg-slate-50 p-3" key={label}>
                <p className="text-xs text-slate-500">{label}</p>
                <p className="mt-1 font-semibold text-slate-950">{value}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-slate-600">{listing.wanted}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <button
              className="inline-flex h-11 items-center gap-2 rounded-md bg-[#263238] px-4 text-sm font-semibold text-white"
              type="button"
              onClick={() => onChat(listing)}
            >
              <MessageCircle size={18} />
              Chat seller
            </button>
            <button
              className="inline-flex h-11 items-center gap-2 rounded-md bg-[#ffcb05] px-4 text-sm font-bold text-slate-950"
              type="button"
              onClick={() => onMakeOffer(listing)}
            >
              <Handshake size={18} />
              Make offer
            </button>
            <button className="inline-flex h-11 items-center gap-2 rounded-md border border-slate-200 bg-white px-4 text-sm font-semibold" type="button">
              <Heart size={18} />
              Save
            </button>
          </div>
        </div>

        <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 shrink-0 text-emerald-700" size={20} />
            <div>
              <h2 className="font-semibold text-emerald-950">Verified shipping</h2>
              <p className="mt-1 text-sm text-emerald-800">
                Seller sends the card or box to CGC verification address first. After checking, CGC forwards it to buyer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
