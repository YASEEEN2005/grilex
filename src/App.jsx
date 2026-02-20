import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'
import ReservationModal from './components/ReservationModal'


import Specials from './components/Specials'

import LocationModal from './components/LocationModal'

function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Navbar onOpenReservation={() => setIsReservationOpen(true)} />
      <Hero onOpenReservation={() => setIsReservationOpen(true)} />
      <About />
      <Specials />
      <Menu />
      <Services />
      <Gallery />
      <Reviews />
      <Location />
      <Contact />
      <Footer />
      <FloatingCTA />
      <LocationModal />
      <ReservationModal isOpen={isReservationOpen} onClose={() => setIsReservationOpen(false)} />
    </div>
  )

}

export default App

