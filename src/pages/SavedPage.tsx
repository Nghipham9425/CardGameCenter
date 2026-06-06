import { Heart, MessageCircle } from 'lucide-react'
import { Badge } from '../components/Badge'
import { UserPageNav } from '../components/UserPageNav'
import { listings } from '../data/mock-listings'

export function SavedPage() {
  return (
    <section className="mx-auto max-w-6xl space-y-5 px-5 py-8 sm:px-8">
      <UserPageNav />

      <div>
        <h1 className="text-2xl font-bold text-slate-950">Saved cards</h1>
        <p className="mt-1 text-sm text-slate-500">Cards, boxes, and trade offers you want to revisit.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {listings.slice(0, 4).map((listing) => (
          <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm" key={listing.id}>
            <div className="grid aspect-[4/3] place-items-center bg-slate-50 p-4">
              <img className="max-h-full object-contain" src={listing.image} alt="" />
            </div>
            <div className="p-4">
              <div className="flex flex-wrap gap-2">
                <Badge tone={listing.kind === 'Sealed Box' ? 'blue' : 'neutral'}>{listing.kind}</Badge>
                <Badge tone={listing.type === 'Trade' ? 'amber' : 'green'}>{listing.type}</Badge>
              </div>
              <h2 className="mt-3 line-clamp-2 font-bold text-slate-950">{listing.name}</h2>
              <p className="mt-1 text-sm text-slate-500">{listing.price}</p>
              <div className="mt-4 flex gap-2">
                <button className="grid size-10 place-items-center rounded-md border border-rose-100 bg-rose-50 text-rose-600" type="button" aria-label="Remove saved item">
                  <Heart className="fill-current" size={17} />
                </button>
                <button className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-md bg-[#263238] px-3 text-sm font-semibold text-white" type="button">
                  <MessageCircle size={17} />
                  Ask seller
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
