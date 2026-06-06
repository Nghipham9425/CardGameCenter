export type Page = 'market' | 'sell' | 'listing' | 'login'

export type ProductKind = 'Single Card' | 'Sealed Box' | 'Bundle'

export type ListingType = 'Sale' | 'Trade' | 'Sale / Trade'

export type Listing = {
  id: string
  kind: ProductKind
  name: string
  setName: string
  rarity: string
  condition: string
  price: string
  type: ListingType
  seller: string
  rating: string
  location: string
  image: string
  photos: number
  tags: string[]
  wanted: string
}

export type ChatThread = {
  id: string
  listing: Listing
  lastMessage: string
  unread: boolean
  updatedAt: string
}

export type OfferKind = 'Cash offer' | 'Trade offer' | 'Cash + trade'

export type OfferStatus = 'Pending seller' | 'Seller accepted offer' | 'Rejected' | 'Trade completed'

export type Offer = {
  id: string
  listing: Listing
  kind: OfferKind
  amount: string
  tradeItem: string
  note: string
  status: OfferStatus
  step: string
  createdAt: string
}
