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

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Services />
      <Gallery />
      <Reviews />
      <Location />
      <Contact />
      <Footer />
      <FloatingCTA />
    </div>
  )
}

export default App
