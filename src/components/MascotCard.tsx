import { Sparkles, Zap } from 'lucide-react'

export function MascotCard() {
  return (
    <div className="overflow-hidden rounded-lg border border-amber-200 bg-[#fff8d6] shadow-sm">
      <div className="relative p-5">
        <div className="absolute right-4 top-4 rounded-md bg-white/80 p-2 text-amber-600">
          <Zap size={20} />
        </div>
        <div className="relative mx-auto mb-4 h-28 w-28">
          <div className="absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300 shadow-inner" />
          <div className="absolute left-5 top-8 size-4 rounded-full bg-slate-950" />
          <div className="absolute right-5 top-8 size-4 rounded-full bg-slate-950" />
          <div className="absolute left-7 top-14 h-3 w-14 rounded-b-full border-b-4 border-slate-950" />
          <div className="absolute -left-1 top-10 size-5 rounded-full bg-rose-400" />
          <div className="absolute -right-1 top-10 size-5 rounded-full bg-rose-400" />
          <div className="absolute -left-3 top-2 h-10 w-5 -rotate-12 rounded-full bg-yellow-300" />
          <div className="absolute -right-3 top-2 h-10 w-5 rotate-12 rounded-full bg-yellow-300" />
          <div className="absolute bottom-0 left-1/2 flex h-11 w-20 -translate-x-1/2 items-center justify-center rounded-md bg-white shadow-sm">
            <Sparkles size={24} className="text-amber-500" />
          </div>
        </div>
        <h3 className="text-base font-semibold text-slate-950">Pikachu buddy</h3>
        <p className="mt-1 text-sm text-slate-600">
          Mascot mock de tao vibe Pokemon. Sau nay minh co the thay bang mascot rieng cua app.
        </p>
      </div>
    </div>
  )
}
