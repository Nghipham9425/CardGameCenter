import { listings } from './mock-listings'

export const chatThreads = listings.slice(0, 5).map((listing, index) => ({
  id: `thread-${listing.id}`,
  listing,
  lastMessage:
    index === 0
      ? 'I can add back photo and corner macro.'
      : index === 1
        ? 'Trade for trainer full art is okay.'
        : index === 2
          ? 'Can ship tomorrow through verified address.'
          : 'Seal photos are already uploaded.',
  unread: index < 2,
  updatedAt: ['2m', '12m', '28m', '1h', '3h'][index],
}))
