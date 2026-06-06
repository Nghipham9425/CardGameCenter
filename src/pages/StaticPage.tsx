import { ShieldCheck, Sparkles } from 'lucide-react'

const content = {
  about: {
    eyebrow: 'About',
    title: 'A marketplace for TCG collectors',
    body: 'PikaPalace is a student project prototype for buying, selling, and trading TCG cards, sealed boxes, and bundles. The current version focuses on interface, mock listings, seller chat, and verified shipping concepts.',
  },
  terms: {
    eyebrow: 'Terms',
    title: 'Community marketplace terms',
    body: 'Users should list accurate photos, describe card or box condition honestly, and complete trades respectfully. Future backend rules can include prohibited items, dispute handling, payment rules, and account enforcement.',
  },
  privacy: {
    eyebrow: 'Privacy',
    title: 'Privacy and account data',
    body: 'This prototype does not store real user data yet. Later, account information, chat messages, listing photos, and transaction records should be protected with authentication, authorization, and clear retention policies.',
  },
  help: {
    eyebrow: 'Help',
    title: 'How verified shipping works',
    body: 'For higher value items, the seller ships the card or sealed box to a verification address first. After checking photos, condition, and seal quality, the item is forwarded to the buyer.',
  },
}

export function StaticPage({ type }: { type: keyof typeof content }) {
  const page = content[type]

  return (
    <section className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="inline-flex items-center gap-2 rounded-md bg-[#ffecb3] px-3 py-1.5 text-sm font-bold text-[#263238]">
          <Sparkles size={16} />
          {page.eyebrow}
        </div>
        <h1 className="mt-5 text-3xl font-bold tracking-normal text-slate-950">{page.title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">{page.body}</p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {['Real photos first', 'Seller chat', 'Verified address'].map((item) => (
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4" key={item}>
              <ShieldCheck className="text-[#2e7d32]" size={20} />
              <h2 className="mt-3 text-sm font-bold text-slate-950">{item}</h2>
              <p className="mt-1 text-sm text-slate-500">Mock content block for future product policy details.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
