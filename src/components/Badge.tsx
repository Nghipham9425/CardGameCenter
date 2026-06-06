import type { ReactNode } from 'react'
import { cn } from '../lib/utils'

type BadgeTone = 'neutral' | 'green' | 'amber' | 'blue' | 'red'

export function Badge({
  children,
  tone = 'neutral',
}: {
  children: ReactNode
  tone?: BadgeTone
}) {
  return (
    <span
      className={cn(
        'inline-flex h-7 max-w-full items-center rounded-md border px-2.5 text-xs font-semibold',
        tone === 'neutral' && 'border-slate-200 bg-white text-slate-700',
        tone === 'green' && 'border-emerald-200 bg-emerald-50 text-emerald-700',
        tone === 'amber' && 'border-amber-200 bg-amber-50 text-amber-700',
        tone === 'blue' && 'border-sky-200 bg-sky-50 text-sky-700',
        tone === 'red' && 'border-rose-200 bg-rose-50 text-rose-700',
      )}
    >
      <span className="truncate">{children}</span>
    </span>
  )
}
