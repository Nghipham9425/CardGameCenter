import { ArrowLeft, MessageCircle, Minus, Send, X, Zap } from 'lucide-react'
import { useState } from 'react'
import { cn } from '../lib/utils'
import type { ChatThread } from '../types'

export function ChatWidget({
  threads,
  activeThreadId,
  open,
  onOpen,
  onClose,
  onSelectThread,
}: {
  threads: ChatThread[]
  activeThreadId: string | null
  open: boolean
  onOpen: () => void
  onClose: () => void
  onSelectThread: (threadId: string) => void
}) {
  const [view, setView] = useState<'inbox' | 'thread'>(activeThreadId ? 'thread' : 'inbox')
  const activeThread =
    threads.find((thread) => thread.id === activeThreadId) ?? threads[0] ?? null
  const current = activeThread?.listing

  function openThread(threadId: string) {
    onSelectThread(threadId)
    setView('thread')
  }

  if (!open) {
    return (
      <button
        className="fixed bottom-5 right-5 z-30 inline-flex h-14 items-center gap-3 rounded-full bg-[#263238] px-5 text-sm font-semibold text-white shadow-xl transition hover:bg-[#1b2529]"
        type="button"
        onClick={() => {
          setView(activeThreadId ? 'thread' : 'inbox')
          onOpen()
        }}
      >
        <span className="grid size-8 place-items-center rounded-full bg-[#ffcb05] text-slate-950">
          <MessageCircle size={18} />
        </span>
        Chats
        {threads.length > 0 && (
          <span className="grid size-6 place-items-center rounded-full bg-[#ef5350] text-xs text-white">
            {threads.length}
          </span>
        )}
      </button>
    )
  }

  return (
    <section className="fixed bottom-5 right-5 z-30 flex h-[620px] w-[min(calc(100vw-32px),400px)] flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-2xl">
      <header className="flex items-center justify-between border-b border-slate-100 bg-[#263238] p-3 text-white">
        <div className="flex min-w-0 items-center gap-3">
          {view === 'thread' && (
            <button
              className="grid size-8 shrink-0 place-items-center rounded-md text-slate-300 hover:bg-white/10"
              type="button"
              onClick={() => setView('inbox')}
              aria-label="Back to inbox"
            >
              <ArrowLeft size={16} />
            </button>
          )}
          <div className="grid size-10 shrink-0 place-items-center rounded-md bg-[#ffcb05] text-slate-950">
            <Zap size={19} />
          </div>
          <div className="min-w-0">
            <h2 className="truncate text-sm font-semibold">
              {view === 'inbox' || !current ? 'Trade inbox' : current.seller}
            </h2>
            <p className="truncate text-xs text-slate-300">
              {view === 'inbox' || !current
                ? `${threads.length} seller conversations`
                : `${current.name} · ${current.price}`}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button
            className="grid size-8 place-items-center rounded-md text-slate-300 hover:bg-white/10"
            type="button"
            onClick={onClose}
            aria-label="Minimize chat"
          >
            <Minus size={16} />
          </button>
          <button
            className="grid size-8 place-items-center rounded-md text-slate-300 hover:bg-white/10"
            type="button"
            onClick={onClose}
            aria-label="Close chat"
          >
            <X size={16} />
          </button>
        </div>
      </header>

      {view === 'inbox' || !current ? (
        <div className="flex-1 overflow-y-auto bg-slate-50 p-3">
          <div className="mb-3 rounded-lg border border-amber-200 bg-amber-50 p-3">
            <p className="text-sm font-semibold text-slate-950">Pika ping</p>
            <p className="mt-1 text-xs text-slate-600">
              Only sellers you have chatted with will appear here.
            </p>
          </div>

          {threads.length === 0 ? (
            <div className="grid h-72 place-items-center rounded-lg border border-dashed border-slate-300 bg-white p-6 text-center">
              <div>
                <div className="mx-auto grid size-12 place-items-center rounded-full bg-[#ffcb05] text-slate-950">
                  <MessageCircle size={22} />
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-950">No chats yet</p>
                <p className="mt-1 text-xs text-slate-500">
                  Press Chat on a listing to create your first seller conversation.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              {threads.map((thread) => (
                <button
                  className={cn(
                    'flex w-full items-center gap-3 rounded-lg border bg-white p-3 text-left shadow-sm transition hover:border-amber-300',
                    activeThread?.id === thread.id ? 'border-amber-300' : 'border-slate-200',
                  )}
                  key={thread.id}
                  type="button"
                  onClick={() => openThread(thread.id)}
                >
                  <img
                    className="size-12 shrink-0 rounded-md object-cover"
                    src={thread.listing.image}
                    alt={thread.listing.name}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="truncate text-sm font-semibold text-slate-950">
                        {thread.listing.seller}
                      </p>
                      {thread.unread && <span className="size-2 rounded-full bg-[#ef5350]" />}
                    </div>
                    <p className="truncate text-xs text-slate-500">{thread.listing.name}</p>
                    <p className="mt-1 truncate text-xs text-slate-600">{thread.lastMessage}</p>
                  </div>
                  <span className="shrink-0 text-xs font-semibold text-slate-400">
                    {thread.updatedAt}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="flex items-center gap-3 border-b border-slate-100 p-3">
            <img className="size-12 rounded-md object-cover" src={current.image} alt={current.name} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-slate-950">{current.name}</p>
              <p className="truncate text-xs text-slate-500">
                {current.condition} · {current.location}
              </p>
            </div>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-slate-50 p-3">
            <div className="max-w-[82%] rounded-lg bg-white p-3 text-sm text-slate-700 shadow-sm">
              Can you send a clearer back photo and corner close-up?
            </div>
            <div className="ml-auto max-w-[82%] rounded-lg bg-[#2e7d32] p-3 text-sm text-white shadow-sm">
              Yes, I can add back photo, corner macro, and seal angle.
            </div>
            <div className="max-w-[82%] rounded-lg bg-white p-3 text-sm text-slate-700 shadow-sm">
              For verified shipping, seller only needs to send it to CGC address first.
            </div>
          </div>

          <div className="border-t border-slate-100 p-3">
            <div className="flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3">
              <input
                className="h-11 min-w-0 flex-1 bg-transparent text-sm outline-none"
                placeholder="Type message..."
              />
              <button
                className="grid size-8 place-items-center rounded-md bg-[#263238] text-white"
                type="button"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  )
}
