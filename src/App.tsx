import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate, useParams } from 'react-router'
import { ChatWidget } from './components/ChatWidget'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { listings } from './data/mock-listings'
import { ListingDetailPage } from './pages/ListingDetailPage'
import { LoginPage } from './pages/LoginPage'
import { MarketPage } from './pages/MarketPage'
import { SellPage } from './pages/SellPage'
import { StaticPage } from './pages/StaticPage'
import type { ChatThread, Listing } from './types'

function ListingRoute({ onOpenChat }: { onOpenChat: (listing: Listing) => void }) {
  const { id } = useParams()
  const listing = listings.find((item) => item.id === id) ?? listings[0]

  return <ListingDetailPage listing={listing} onChat={onOpenChat} />
}

function AppShell() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [chatThreads, setChatThreads] = useState<ChatThread[]>([])
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

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {!isAuthPage && <Header isLoggedIn={isLoggedIn} onLogout={() => setIsLoggedIn(false)} />}

      <Routes>
        <Route path="/" element={<Navigate to="/market" replace />} />
        <Route path="/market" element={<MarketPage onOpenChat={openChat} onOpenListing={openListing} />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/listing/:id" element={<ListingRoute onOpenChat={openChat} />} />
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
