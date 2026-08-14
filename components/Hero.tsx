'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const handleScheduleCall = () => {
    window.open('https://wa.me/525526619640?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20videollamada%20gratuita', '_blank')
  }

  return (
    <section className="relative bg-black overflow-hidden">

      {/* ── Background ring graphics ── */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8%"  cy="22%" r="180" fill="none" stroke="#6C63FF" strokeWidth="12"  opacity="0.15" />
        <circle cx="75%" cy="80%" r="160" fill="none" stroke="#6C63FF" strokeWidth="18"  opacity="0.18" />
        <circle cx="88%" cy="18%" r="90"  fill="none" stroke="#6C63FF" strokeWidth="8"   opacity="0.28" />
        <circle cx="52%" cy="58%" r="55"  fill="none" stroke="#6C63FF" strokeWidth="14"  opacity="0.12" />
        <circle cx="20%" cy="88%" r="75"  fill="none" stroke="#6C63FF" strokeWidth="6"   opacity="0.22" />
      </svg>

      {/* ── Small filled accent circles ── */}
      <div aria-hidden="true" className="hidden md:block absolute top-10 right-[38%] w-5 h-5 rounded-full bg-[#6C63FF] opacity-80" />
      <div aria-hidden="true" className="hidden md:block absolute bottom-20 right-[34%] w-10 h-10 rounded-full border-2 border-[#6C63FF] opacity-35" />
      <div aria-hidden="true" className="hidden md:block absolute top-1/2 right-[36%] -translate-y-1/2 w-8 h-8 rounded-full bg-[#6C63FF] opacity-60 flex items-center justify-center">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M3 11L11 3M11 3H5M11 3V9" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* ── Responsive grid layout ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-end min-h-[600px] md:min-h-[700px]">

        {/* ── Left — text ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
          className="flex flex-col justify-center space-y-8 pt-36 pb-16 md:py-24 z-10"
        >
          {/* Headline with purple bar */}
          <div className="flex items-start gap-5">
            <div
              aria-hidden="true"
              className="flex-shrink-0 rounded-full hidden sm:block"
              style={{ width: 6, minHeight: 120, background: '#6C63FF', marginTop: 6 }}
            />
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
              style={{ fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.3 }}
            >
              Tu patrimonio merece claridad<br />
              <span className="text-[#6C63FF]">no complicaciones</span>
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-gray-300 font-medium leading-relaxed max-w-lg">
            Ayudo a personas y familias a tomar decisiones inteligentes para proteger y hacer crecer su patrimonio, con estrategia, honestidad y sin presión comercial.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="text-white font-bold text-lg sm:text-xl tracking-wide">
              REVISEMOS TU CASO
            </span>
            <motion.button
              onClick={handleScheduleCall}
              className="px-6 py-2.5 bg-[#6C63FF] text-white font-bold text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#6C63FF]"
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  '0 10px 30px rgba(108,99,255,0.3)',
                  '0 10px 50px rgba(108,99,255,0.6)',
                  '0 10px 30px rgba(108,99,255,0.3)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.1, boxShadow: '0 15px 60px rgba(108,99,255,0.8)' }}
              whileTap={{ scale: 0.95 }}
            >
              ¡Agenda hoy!
            </motion.button>
          </div>
        </motion.div>

        {/* ── Right — photo ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="flex justify-center md:justify-end items-end z-10"
        >
          {/* Purple glow */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-t-[220px]"
              style={{
                background: 'radial-gradient(ellipse at bottom right, #6C63FF, transparent 70%)',
                opacity: 0.20,
              }}
            />

            {/* Arch frame */}
            <div
              className="overflow-hidden relative"
              style={{
                width: 'clamp(260px, 30vw, 400px)',
                height: 'clamp(420px, 50vw, 640px)',
                borderRadius: '220px 220px 0 0',
                background: '#111',
                border: '2px solid #6C63FF33',
              }}
            >
              <Image
                src="/images/erika_e1.png"
                alt="Erika Echavarri"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 10%' }}
                priority
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
