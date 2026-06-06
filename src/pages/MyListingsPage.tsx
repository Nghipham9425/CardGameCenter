import { Edit3, EyeOff, PackageCheck, Plus, Trash2 } from 'lucide-react'
import { Badge } from '../components/Badge'
import { UserPageNav } from '../components/UserPageNav'
import { listings } from '../data/mock-listings'

export function MyListingsPage() {
  return (
    <section className="mx-auto max-w-6xl space-y-5 px-5 py-8 sm:px-8">
      <UserPageNav />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-950">My listings</h1>
          <p className="mt-1 text-sm text-slate-500">Manage active, draft, and sold card listings.</p>
        </div>
        <button className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#ffcb05] px-4 text-sm font-bold text-slate-950" type="button">
          <Plus size={17} />
          New listing
        </button>
      </div>

      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        {listings.map((listing, index) => (
          <div className="grid gap-4 border-b border-slate-100 p-4 last:border-b-0 md:grid-cols-[72px_minmax(0,1fr)_auto]" key={listing.id}>
            <img className="aspect-[63/88] w-16 rounded-md bg-slate-100 object-cover" src={listing.image} alt="" />
            <div className="min-w-0">
              <div className="flex flex-wrap gap-2">
                <Badge tone={index === 2 ? 'amber' : 'green'}>{index === 2 ? 'Draft' : 'Active'}</Badge>
                <Badge tone={listing.kind === 'Sealed Box' ? 'blue' : 'neutral'}>{listing.kind}</Badge>
              </div>
              <h2 className="mt-2 truncate text-base font-bold text-slate-950">{listing.name}</h2>
              <p className="mt-1 text-sm text-slate-500">{listing.price} · {listing.photos} photos · {listing.location}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2 md:justify-end">
              <button className="inline-flex h-9 items-center gap-2 rounded-md border border-slate-200 px-3 text-sm font-semibold text-slate-700" type="button">
                <Edit3 size={15} />
                Edit
              </button>
              <button className="inline-flex h-9 items-center gap-2 rounded-md border border-slate-200 px-3 text-sm font-semibold text-slate-700" type="button">
                <EyeOff size={15} />
                Hide
              </button>
              <button className="grid size-9 place-items-center rounded-md border border-red-100 text-red-600" type="button" aria-label="Delete listing">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
        <PackageCheck className="mr-2 inline text-emerald-700" size={17} />
        Listings using verified shipping usually get better buyer trust and fewer disputes.
      </div>
    </section>
  )
}
