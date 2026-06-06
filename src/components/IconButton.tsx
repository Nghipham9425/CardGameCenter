import type { ReactNode } from 'react'

export function IconButton({ children, label }: { children: ReactNode; label: string }) {
  return (
    <button
      className="grid size-10 shrink-0 place-items-center rounded-md border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-slate-300 hover:text-slate-950"
      type="button"
      aria-label={label}
      title={label}
    >
      {children}
    </button>
  )
}
