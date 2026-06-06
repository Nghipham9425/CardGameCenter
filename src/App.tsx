import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate, useParams } from 'react-router'
import { ChatWidget } from './components/ChatWidget'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { OfferModal } from './components/OfferModal'
import { listings } from './data/mock-listings'
import { ListingDetailPage } from './pages/ListingDetailPage'
import { LoginPage } from './pages/LoginPage'
import { MarketPage } from './pages/MarketPage'
import { MyListingsPage } from './pages/MyListingsPage'
import { OrdersPage } from './pages/OrdersPage'
import { SavedPage } from './pages/SavedPage'
import { SellPage } from './pages/SellPage'
import { StaticPage } from './pages/StaticPage'
import { UserProfilePage } from './pages/UserProfilePage'
import type { ChatThread, Listing, Offer } from './types'

function ListingRoute({
  onOpenChat,
  onMakeOffer,
}: {
  onOpenChat: (listing: Listing) => void
  onMakeOffer: (listing: Listing) => void
}) {
  const { id } = useParams()
  const listing = listings.find((item) => item.id === id) ?? listings[0]

  return <ListingDetailPage listing={listing} onChat={onOpenChat} onMakeOffer={onMakeOffer} />
}

function AppShell() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [chatThreads, setChatThreads] = useState<ChatThread[]>([])
  const [offers, setOffers] = useState<Offer[]>([])
  const [offerListing, setOfferListing] = useState<Listing | null>(null)
  const [activeThreadId, setActiveThreadId] = useState<string | null>(null)
  const [chatOpen, setChatOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const isAuthPage = location.pathname === '/login'

  function openListing(listing: Listing) {
    navigate(`/listing/${listing.id}`)
  }

  function openChat(listing: Listing) {
    const threadId = `thread-${listing.id}`

    setChatThreads((threads) => {
      if (threads.some((thread) => thread.id === threadId)) return threads

      return [
        {
          id: threadId,
          listing,
          lastMessage: 'Conversation started. Ask for photos, price, or verified shipping.',
          unread: false,
          updatedAt: 'now',
        },
        ...threads,
      ]
    })

    setActiveThreadId(threadId)
    setChatOpen(true)
  }

  function openOffer(listing: Listing) {
    setOfferListing(listing)
  }

  function submitOffer(offerDraft: Omit<Offer, 'id' | 'status' | 'step' | 'createdAt'>) {
    const offer: Offer = {
      ...offerDraft,
      id: `offer-${offerDraft.listing.id}-${Date.now()}`,
      status: 'Pending seller',
      step: 'Waiting for seller response',
      createdAt: 'now',
    }
    const threadId = `thread-${offer.listing.id}`
    const offerSummary =
      offer.kind === 'Trade offer'
        ? `Offer sent: ${offer.tradeItem || 'Trade item'}`
        : offer.kind === 'Cash + trade'
          ? `Offer sent: ${offer.amount || 'Cash'} + ${offer.tradeItem || 'trade item'}`
          : `Offer sent: ${offer.amount || 'Cash offer'}`

    setOffers((currentOffers) => [offer, ...currentOffers])
    setChatThreads((threads) => {
      const existing = threads.find((thread) => thread.id === threadId)
      if (existing) {
        return threads.map((thread) =>
          thread.id === threadId
            ? { ...thread, lastMessage: offerSummary, unread: false, updatedAt: 'now' }
            : thread,
        )
      }

      return [
        {
          id: threadId,
          listing: offer.listing,
          lastMessage: offerSummary,
          unread: false,
          updatedAt: 'now',
        },
        ...threads,
      ]
    })
    setActiveThreadId(threadId)
    setChatOpen(true)
    setOfferListing(null)
    navigate('/orders')
  }

  function updateOfferStatus(offerId: string, status: Offer['status']) {
    setOffers((currentOffers) =>
      currentOffers.map((offer) =>
        offer.id === offerId
          ? {
              ...offer,
              status,
              step:
                status === 'Seller accepted offer'
                  ? 'Ready for checkout'
                  : status === 'Rejected'
                    ? 'Offer closed'
                    : offer.step,
            }
          : offer,
      ),
    )
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {!isAuthPage && <Header isLoggedIn={isLoggedIn} onLogout={() => setIsLoggedIn(false)} />}

      <Routes>
        <Route path="/" element={<Navigate to="/market" replace />} />
        <Route path="/market" element={<MarketPage onMakeOffer={openOffer} onOpenChat={openChat} onOpenListing={openListing} />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/my-listings" element={<MyListingsPage />} />
        <Route path="/orders" element={<OrdersPage offers={offers} onUpdateOfferStatus={updateOfferStatus} />} />
        <Route path="/saved" element={<SavedPage />} />
        <Route path="/listing/:id" element={<ListingRoute onMakeOffer={openOffer} onOpenChat={openChat} />} />
        <Route path="/about" element={<StaticPage type="about" />} />
        <Route path="/terms" element={<StaticPage type="terms" />} />
        <Route path="/privacy" element={<StaticPage type="privacy" />} />
        <Route path="/help" element={<StaticPage type="help" />} />
        <Route
          path="/login"
          element={
            <LoginPage
              onLoggedIn={() => {
                setIsLoggedIn(true)
                navigate('/market')
              }}
            />
          }
        />
        <Route path="*" element={<Navigate to="/market" replace />} />
      </Routes>

      {!isAuthPage && <Footer />}

      {!isAuthPage && (
        <ChatWidget
          activeThreadId={activeThreadId}
          open={chatOpen}
          threads={chatThreads}
          onClose={() => setChatOpen(false)}
          onOpen={() => setChatOpen(true)}
          onSelectThread={setActiveThreadId}
        />
      )}

      {offerListing && (
        <OfferModal
          listing={offerListing}
          onClose={() => setOfferListing(null)}
          onSubmit={submitOffer}
        />
      )}
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}

export default App
