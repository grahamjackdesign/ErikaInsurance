import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import Nosotros from '@/components/Nosotros'
import Seguros from '@/components/Seguros'
import PlanesAhorro from '@/components/PlanesAhorro'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-primary-light/20 to-white">
      <Navigation />
      <Hero />
      <Nosotros />
      <Seguros />
      <PlanesAhorro />
      <Footer />
    </main>
  )
}
