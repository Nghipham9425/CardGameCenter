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
