import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-[#0b0b0c] dark:text-white">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Services />
        <Work />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
