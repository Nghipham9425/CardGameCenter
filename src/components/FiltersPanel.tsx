import { ChevronDown, Filter, ShieldCheck } from 'lucide-react'
import { MascotCard } from './MascotCard'

export function FiltersPanel() {
  return (
    <aside className="space-y-4">
      <div className="rounded-lg border border-[#bbdefb] bg-white p-4 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-950">Filters</h2>
          <Filter size={17} className="text-slate-500" />
        </div>
        <div className="space-y-4">
          {['TCG', 'Product type', 'Condition', 'Price range', 'Location'].map((label) => (
            <label className="block" key={label}>
              <span className="mb-1.5 block text-xs font-medium text-slate-500">{label}</span>
              <button
                className="flex h-10 w-full items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700"
                type="button"
              >
                Select {label.toLowerCase()}
                <ChevronDown size={16} />
              </button>
            </label>
          ))}
        </div>
      </div>

      <MascotCard />

      <div className="rounded-lg border border-[#c8e6c9] bg-white p-4 shadow-sm">
        <h2 className="text-sm font-semibold text-slate-950">Trade checklist</h2>
        <div className="mt-4 space-y-3 text-sm text-slate-600">
          {['Real front/back photos', 'Box seal or card corner macro', 'Seller rating and trade history'].map((item) => (
            <div className="flex items-center gap-3" key={item}>
              <ShieldCheck size={17} className="text-emerald-600" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
