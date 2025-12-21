import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import Nosotros from '@/components/Nosotros'
import InsuranceLogos from '@/components/InsuranceLogos'
import Seguros from '@/components/Seguros'
import PlanesAhorro from '@/components/PlanesAhorro'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-primary-light/20 to-white">
      <Navigation />
      <CTABanner />
      <Hero />
      <Nosotros />
      <InsuranceLogos />
      <Seguros />
      <PlanesAhorro />
      <Footer />
    </main>
  )
}
