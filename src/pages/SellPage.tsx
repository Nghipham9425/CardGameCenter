import { ChevronDown, ImagePlus, MapPin, PackagePlus, ShieldCheck } from 'lucide-react'

export function SellPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[minmax(0,1fr)_360px]">
      <div className="rounded-lg border border-[#bbdefb] bg-white p-5 shadow-sm">
        <h1 className="text-xl font-semibold text-slate-950">Create listing</h1>
        <p className="mt-1 text-sm text-slate-500">
          Mock form for single cards, sealed boxes, and bundles.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {['Product name', 'Set / series', 'Ask price', 'Location'].map((label) => (
            <label className="block" key={label}>
              <span className="mb-1.5 block text-sm font-medium text-slate-700">{label}</span>
              <input
                className="h-11 w-full rounded-md border border-slate-200 bg-slate-50 px-3 text-sm outline-none focus:border-slate-400"
                placeholder={label}
              />
            </label>
          ))}
          {['Product type', 'Condition', 'Listing type', 'Shipping method'].map((label) => (
            <label className="block" key={label}>
              <span className="mb-1.5 block text-sm font-medium text-slate-700">{label}</span>
              <button
                className="flex h-11 w-full items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700"
                type="button"
              >
                Select {label.toLowerCase()}
                <ChevronDown size={16} />
              </button>
            </label>
          ))}
        </div>

        <label className="mt-4 block">
          <span className="mb-1.5 block text-sm font-medium text-slate-700">Description</span>
          <textarea
            className="min-h-28 w-full rounded-md border border-slate-200 bg-slate-50 p-3 text-sm outline-none focus:border-slate-400"
            placeholder="Condition notes, trade wants, box seal status..."
          />
        </label>

        <div className="mt-5 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 shrink-0 text-emerald-700" size={19} />
            <div>
              <h2 className="text-sm font-semibold text-emerald-950">Verified shipping address</h2>
              <p className="mt-1 text-sm text-emerald-800">
                When the buyer chooses verified shipping, seller only ships the item to CGC verification address.
                CGC checks it, then forwards it to the buyer.
              </p>
            </div>
          </div>
        </div>
      </div>

      <aside className="space-y-4">
        <div className="grid aspect-[4/3] place-items-center rounded-lg border border-dashed border-slate-300 bg-white text-center shadow-sm">
          <div>
            <ImagePlus className="mx-auto text-slate-400" size={32} />
            <p className="mt-2 text-sm font-semibold text-slate-800">Upload real photos</p>
            <p className="text-xs text-slate-500">Front, back, corner, foil, box seal</p>
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-950">Shipping preview</h2>
          <div className="mt-3 flex items-start gap-3 rounded-md bg-slate-50 p-3 text-sm text-slate-600">
            <MapPin size={18} className="mt-0.5 shrink-0 text-slate-500" />
            <p>CGC verification center address will be generated after buyer pays.</p>
          </div>
        </div>
        <button
          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-amber-400 px-4 text-sm font-bold text-slate-950 transition hover:bg-amber-300"
          type="button"
        >
          <PackagePlus size={18} />
          Publish mock listing
        </button>
      </aside>
    </section>
  )
}
