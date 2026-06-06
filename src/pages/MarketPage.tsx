import { useMemo, useState } from 'react'
import { Box, Camera, Image, SlidersHorizontal, Sparkles, TrendingUp, Video } from 'lucide-react'
import { ListingCard } from '../components/ListingCard'
import { RegionShowcase } from '../components/RegionShowcase'
import { avatars } from '../data/avatars'
import { listings, productTabs } from '../data/mock-listings'
import { cn } from '../lib/utils'
import type { Listing, ProductKind } from '../types'

const contributors = [
  ['HuyTCG', '120 deals', avatars.pikachu, 'bg-[#ffcb05]'],
  ['MintSleeve', '88 trades', avatars.squirtle, 'bg-[#1976d2]'],
  ['DragonShelf', '72 boxes', avatars.charmander, 'bg-[#ef5350]'],
  ['LotusTCG', '54 sales', avatars.bulbasaur, 'bg-[#2e7d32]'],
]

const hotTopics = [
  ['Best price for Pokemon 151 sealed box?', '128 replies'],
  ['How to spot whitening on card corners?', '92 replies'],
  ['Trade Charizard slab for sealed box?', '71 replies'],
  ['Should verified shipping be required?', '64 replies'],
]

export function MarketPage({
  onOpenListing,
  onOpenChat,
}: {
  onOpenListing: (listing: Listing) => void
  onOpenChat: (listing: Listing) => void
}) {
  const [kind, setKind] = useState<ProductKind>('Single Card')
  const visibleListings = useMemo(
    () => listings.filter((listing) => listing.kind === kind || kind === 'Bundle'),
    [kind],
  )

  return (
    <section className="mx-auto grid max-w-6xl gap-5 px-5 py-8 sm:px-8 lg:grid-cols-[minmax(0,1fr)_330px]">
      <div className="min-w-0 space-y-5">
        <RegionShowcase />

        <div className="market-hero-card relative overflow-hidden rounded-lg bg-[#242326] p-5 text-white shadow-lg shadow-slate-950/20">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/20" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/55 to-transparent" />
          <div className="relative z-10 flex min-h-44 items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-normal sm:text-3xl">Welcome to PikaPalace Market</h1>
              <p className="mt-2 max-w-xl text-sm text-slate-200">
                Buy, sell, and trade single cards, sealed boxes, and bundles with real photos.
              </p>
              <button className="mt-5 h-10 rounded-md bg-[#ffcb05] px-4 text-sm font-bold text-slate-950 shadow-lg shadow-amber-950/20" type="button">
                Explore deals
              </button>
            </div>
            <img className="hidden size-40 rounded-full bg-white/85 p-3 shadow-2xl shadow-slate-950/30 backdrop-blur sm:block" src={avatars.pikachu} alt="" />
          </div>
        </div>

        <div className="publish-panel relative overflow-hidden rounded-lg border border-emerald-100 p-4 shadow-sm">
          <div className="absolute inset-0 bg-white/82 backdrop-blur-[1px]" />
          <div className="relative z-10 flex items-center gap-3">
            <img className="size-12 rounded-full" src={avatars.pikachu} alt="" />
            <input
              className="h-11 min-w-0 flex-1 rounded-md border border-white/80 bg-white/90 px-4 text-sm shadow-inner shadow-slate-100 outline-none placeholder:text-slate-500"
              placeholder="What card or box are you listing today?"
            />
            <button className="hidden h-10 rounded-md bg-[#ffcb05] px-4 text-sm font-bold text-slate-950 sm:block" type="button">
              Publish
            </button>
          </div>
          <div className="relative z-10 mt-4 flex flex-wrap gap-4 text-sm font-semibold text-slate-700">
            <button className="inline-flex items-center gap-2" type="button">
              <Image size={17} />
              Image
            </button>
            <button className="inline-flex items-center gap-2" type="button">
              <Video size={17} />
              Video
            </button>
            <button className="inline-flex items-center gap-2" type="button">
              <Camera size={17} />
              Condition check
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {productTabs.map((tab) => (
              <button
                className={cn(
                  'inline-flex h-10 items-center gap-2 rounded-md border px-3 text-sm font-semibold shadow-sm',
                  kind === tab
                    ? 'border-[#263238] bg-[#263238] text-white'
                    : 'border-slate-200 bg-white text-slate-700',
                )}
                key={tab}
                type="button"
                onClick={() => setKind(tab)}
              >
                {tab === 'Sealed Box' ? <Box size={17} /> : <Sparkles size={17} />}
                {tab}
              </button>
            ))}
          </div>
          <button
            className="inline-flex h-10 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-sm font-semibold shadow-sm"
            type="button"
          >
            <SlidersHorizontal size={17} />
            Newest
          </button>
        </div>

        <div className="grid gap-4 xl:grid-cols-2">
          {visibleListings.map((listing, index) => (
            <ListingCard
              featured={index === 0}
              key={listing.id}
              listing={listing}
              onChat={() => onOpenChat(listing)}
              onOpen={() => onOpenListing(listing)}
            />
          ))}
        </div>
      </div>

      <aside className="space-y-5">
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-bold text-slate-950">Top sellers</h2>
          <div className="mt-4 space-y-4">
            {contributors.map(([name, meta, avatar], index) => (
              <div className="flex items-center gap-3" key={name}>
                <span className="grid size-7 place-items-center rounded-full bg-[#ffecb3] text-xs font-bold text-slate-950">
                  {index + 1}
                </span>
                <img className="size-10 rounded-full" src={avatar} alt="" />
                <div>
                  <p className="text-sm font-bold text-slate-950">{name}</p>
                  <p className="text-xs text-slate-500">{meta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-bold text-slate-950">Hot questions</h2>
          <div className="mt-4 space-y-4">
            {hotTopics.map(([title, replies], index) => (
              <div className="grid grid-cols-[28px_minmax(0,1fr)] gap-3" key={title}>
                <span className="text-2xl font-bold text-slate-300">{index + 1}</span>
                <div>
                  <p className="text-sm font-semibold leading-snug text-slate-950">{title}</p>
                  <p className="mt-1 text-xs text-slate-500">{replies}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-bold text-slate-950">Popular tags</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {['#Pokemon151', '#SealedBox', '#NearMint', '#TradeOnly', '#VerifiedShip'].map((tag) => (
              <span className="rounded-md bg-slate-100 px-2.5 py-1.5 text-xs font-semibold text-slate-700" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-[#c8e6c9] bg-[#e8f5e9] p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <TrendingUp className="text-[#2e7d32]" size={20} />
            <h2 className="font-bold text-slate-950">Verified shipping</h2>
          </div>
          <p className="mt-2 text-sm text-slate-600">
            Seller ships to the CGC verification address first, then CGC forwards to buyer after checking.
          </p>
        </div>
      </aside>
    </section>
  )
}
