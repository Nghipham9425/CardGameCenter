import { BadgeCheck, Bell, MapPin, ShieldCheck, Star } from 'lucide-react'
import { Badge } from '../components/Badge'
import { UserPageNav } from '../components/UserPageNav'
import { avatars } from '../data/avatars'

const stats = [
  ['Completed deals', '48'],
  ['Active listings', '7'],
  ['Saved cards', '16'],
  ['Response time', '12m'],
]

export function UserProfilePage() {
  return (
    <section className="mx-auto max-w-6xl space-y-5 px-5 py-8 sm:px-8">
      <UserPageNav />

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          <div className="market-hero-card h-36" />
          <div className="px-5 pb-5">
            <div className="-mt-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex items-end gap-4">
                <img className="size-24 rounded-full border-4 border-white bg-[#fffbeb] shadow-md" src={avatars.pikachu} alt="" />
                <div className="pb-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h1 className="text-2xl font-bold text-slate-950">HuyTCG</h1>
                    <Badge tone="green">Verified seller</Badge>
                  </div>
                  <p className="mt-1 flex items-center gap-1 text-sm text-slate-500">
                    <MapPin size={15} />
                    TP. HCM
                  </p>
                </div>
              </div>
              <button className="h-10 rounded-md bg-[#263238] px-4 text-sm font-semibold text-white" type="button">
                Edit profile
              </button>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-4">
              {stats.map(([label, value]) => (
                <div className="rounded-md border border-slate-200 bg-slate-50 p-3" key={label}>
                  <p className="text-xs text-slate-500">{label}</p>
                  <p className="mt-1 text-lg font-bold text-slate-950">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-lg border border-slate-200 p-4">
              <h2 className="font-bold text-slate-950">Trading preferences</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Pokemon 151', 'Near Mint singles', 'Sealed boxes', 'Verified shipping', 'COD local'].map((tag) => (
                  <Badge key={tag} tone="blue">{tag}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-5">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 text-emerald-700" size={20} />
              <div>
                <h2 className="font-bold text-emerald-950">Trust status</h2>
                <p className="mt-1 text-sm text-emerald-800">Email verified, phone verified, eligible for verified shipping.</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-bold text-slate-950">Account signals</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p className="flex items-center gap-2"><Star className="fill-amber-400 text-amber-400" size={17} /> 4.9 average rating</p>
              <p className="flex items-center gap-2"><BadgeCheck className="text-sky-600" size={17} /> 18 repeat buyers</p>
              <p className="flex items-center gap-2"><Bell className="text-slate-500" size={17} /> 3 pending notifications</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
