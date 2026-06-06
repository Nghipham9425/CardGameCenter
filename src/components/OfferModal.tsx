import { Handshake, MessageCircle, ShieldCheck, X } from 'lucide-react'
import { useState } from 'react'
import type { Listing, Offer, OfferKind } from '../types'

export function OfferModal({
  listing,
  onClose,
  onSubmit,
}: {
  listing: Listing
  onClose: () => void
  onSubmit: (offer: Omit<Offer, 'id' | 'status' | 'step' | 'createdAt'>) => void
}) {
  const [kind, setKind] = useState<OfferKind>('Cash offer')
  const [amount, setAmount] = useState(listing.price.includes('VND') ? listing.price : '')
  const [tradeItem, setTradeItem] = useState('')
  const [note, setNote] = useState('')

  function submitOffer() {
    onSubmit({
      listing,
      kind,
      amount: amount.trim(),
      tradeItem: tradeItem.trim(),
      note: note.trim(),
    })
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/55 px-4 py-6 backdrop-blur-sm">
      <section className="w-full max-w-xl overflow-hidden rounded-lg border border-slate-200 bg-white shadow-2xl">
        <header className="flex items-center justify-between border-b border-slate-100 p-4">
          <div className="flex min-w-0 items-center gap-3">
            <img className="size-12 rounded-md object-cover" src={listing.image} alt="" />
            <div className="min-w-0">
              <h2 className="truncate text-base font-bold text-slate-950">Make offer</h2>
              <p className="truncate text-sm text-slate-500">{listing.name} · {listing.seller}</p>
            </div>
          </div>
          <button className="grid size-9 place-items-center rounded-md text-slate-500 hover:bg-slate-100" type="button" onClick={onClose} aria-label="Close offer form">
            <X size={18} />
          </button>
        </header>

        <div className="space-y-4 p-5">
          <div>
            <p className="mb-2 text-sm font-semibold text-slate-700">Offer type</p>
            <div className="grid gap-2 sm:grid-cols-3">
              {(['Cash offer', 'Trade offer', 'Cash + trade'] as OfferKind[]).map((option) => (
                <button
                  className={`h-10 rounded-md border px-3 text-sm font-semibold ${
                    kind === option
                      ? 'border-[#263238] bg-[#263238] text-white'
                      : 'border-slate-200 bg-white text-slate-700'
                  }`}
                  key={option}
                  type="button"
                  onClick={() => setKind(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {(kind === 'Cash offer' || kind === 'Cash + trade') && (
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-slate-700">Cash amount</span>
              <input
                className="h-11 w-full rounded-md border border-slate-200 bg-slate-50 px-3 text-sm outline-none focus:border-slate-400"
                placeholder="Example: 1.100.000 VND"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
              />
            </label>
          )}

          {(kind === 'Trade offer' || kind === 'Cash + trade') && (
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-slate-700">Trade item</span>
              <input
                className="h-11 w-full rounded-md border border-slate-200 bg-slate-50 px-3 text-sm outline-none focus:border-slate-400"
                placeholder="Example: Charizard slab PSA 9"
                value={tradeItem}
                onChange={(event) => setTradeItem(event.target.value)}
              />
            </label>
          )}

          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-slate-700">Message to seller</span>
            <textarea
              className="min-h-24 w-full rounded-md border border-slate-200 bg-slate-50 p-3 text-sm outline-none focus:border-slate-400"
              placeholder="Ask about condition, shipping, or why this offer works."
              value={note}
              onChange={(event) => setNote(event.target.value)}
            />
          </label>

          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">
            <ShieldCheck className="mr-2 inline text-emerald-700" size={17} />
            Verified shipping can be selected after the seller accepts the offer.
          </div>
        </div>

        <footer className="flex flex-col gap-2 border-t border-slate-100 p-4 sm:flex-row sm:justify-end">
          <button className="h-10 rounded-md border border-slate-200 px-4 text-sm font-semibold text-slate-700" type="button" onClick={onClose}>
            Cancel
          </button>
          <button className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#ffcb05] px-4 text-sm font-bold text-slate-950" type="button" onClick={submitOffer}>
            <Handshake size={17} />
            Send offer
          </button>
          <button className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#263238] px-4 text-sm font-semibold text-white" type="button" onClick={submitOffer}>
            <MessageCircle size={17} />
            Send and chat
          </button>
        </footer>
      </section>
    </div>
  )
}
