import { Check, MessageCircle, Package, ShieldCheck, Truck, X } from 'lucide-react'
import { Badge } from '../components/Badge'
import { UserPageNav } from '../components/UserPageNav'
import { listings } from '../data/mock-listings'
import type { Offer } from '../types'

const orders = [
  { listing: listings[0], status: 'Seller accepted offer', step: 'Chat confirmation', tone: 'blue' as const, offer: undefined },
  { listing: listings[3], status: 'At verification center', step: 'Quality check', tone: 'amber' as const, offer: undefined },
  { listing: listings[1], status: 'Trade completed', step: 'Review pending', tone: 'green' as const, offer: undefined },
]

export function OrdersPage({
  offers,
  onUpdateOfferStatus,
}: {
  offers: Offer[]
  onUpdateOfferStatus: (offerId: string, status: Offer['status']) => void
}) {
  const allOrders = [
    ...offers.map((offer) => ({
      listing: offer.listing,
      status: offer.status,
      step: offer.step,
      tone: 'amber' as const,
      offer,
    })),
    ...orders,
  ]

  return (
    <section className="mx-auto max-w-6xl space-y-5 px-5 py-8 sm:px-8">
      <UserPageNav />

      <div>
        <h1 className="text-2xl font-bold text-slate-950">Orders / trades</h1>
        <p className="mt-1 text-sm text-slate-500">Track purchases, trades, verification, and seller chats.</p>
      </div>

      {offers.length > 0 && (
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          Latest offer sent. Seller response is mocked here for UI testing.
        </div>
      )}

      <div className="grid gap-4 lg:grid-cols-3">
        {allOrders.map(({ listing, status, step, tone, offer }) => (
          <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm" key={offer?.id ?? `${listing.id}-${status}`}>
            <div className="flex gap-3">
              <img className="aspect-[63/88] w-16 rounded-md bg-slate-100 object-cover" src={listing.image} alt="" />
              <div className="min-w-0">
                <Badge tone={tone}>{status}</Badge>
                <h2 className="mt-2 line-clamp-2 font-bold leading-tight text-slate-950">{listing.name}</h2>
                <p className="mt-1 text-sm text-slate-500">{listing.price}</p>
              </div>
            </div>
            <div className="mt-4 rounded-md bg-slate-50 p-3 text-sm text-slate-600">
              <p className="flex items-center gap-2 font-semibold text-slate-800">
                <ShieldCheck size={16} />
                {step}
              </p>
              <p className="mt-1">Seller: {listing.seller} · Rating {listing.rating}</p>
              {offer && (
                <div className="mt-3 rounded-md border border-amber-100 bg-white p-3">
                  <p className="text-xs font-semibold uppercase text-slate-500">{offer.kind}</p>
                  <p className="mt-1 font-semibold text-slate-900">
                    {[offer.amount, offer.tradeItem].filter(Boolean).join(' + ') || 'Custom offer'}
                  </p>
                  {offer.note && <p className="mt-1 text-xs text-slate-500">{offer.note}</p>}
                </div>
              )}
            </div>
            <div className="mt-4 flex gap-2">
              <button className="inline-flex h-9 flex-1 items-center justify-center gap-2 rounded-md bg-[#263238] px-3 text-sm font-semibold text-white" type="button">
                <MessageCircle size={16} />
                Chat
              </button>
              <button className="inline-flex h-9 flex-1 items-center justify-center gap-2 rounded-md border border-slate-200 px-3 text-sm font-semibold text-slate-700" type="button">
                <Truck size={16} />
                Track
              </button>
            </div>
            {offer?.status === 'Pending seller' && (
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                <button
                  className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-emerald-200 bg-emerald-50 px-3 text-sm font-semibold text-emerald-700"
                  type="button"
                  onClick={() => onUpdateOfferStatus(offer.id, 'Seller accepted offer')}
                >
                  <Check size={16} />
                  Mock accept
                </button>
                <button
                  className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-rose-200 bg-rose-50 px-3 text-sm font-semibold text-rose-700"
                  type="button"
                  onClick={() => onUpdateOfferStatus(offer.id, 'Rejected')}
                >
                  <X size={16} />
                  Mock reject
                </button>
              </div>
            )}
          </article>
        ))}
      </div>

      <div className="rounded-lg border border-sky-200 bg-sky-50 p-5">
        <div className="flex items-start gap-3">
          <Package className="mt-0.5 shrink-0 text-sky-700" size={20} />
          <div>
            <h2 className="font-bold text-sky-950">Next flow to connect</h2>
            <p className="mt-1 text-sm text-sky-800">This page is ready for backend order states: offer, paid, verifying, shipped, completed, disputed.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
