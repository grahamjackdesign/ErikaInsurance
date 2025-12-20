'use client'

import { motion } from 'framer-motion'

export default function CTABanner() {
  const handleScheduleCall = () => {
    // You can link this to a calendar booking system or WhatsApp
    // For now, it scrolls to contact or opens WhatsApp
    window.open('https://wa.me/5215551234567?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20videollamada%20gratuita', '_blank')
  }

  return (
    <div className="sticky top-[72px] z-40 bg-gradient-to-r from-primary via-primary-dark to-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-center">
        <motion.button
          onClick={handleScheduleCall}
          className="px-8 py-4 bg-white text-primary font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          animate={{
            boxShadow: [
              '0 10px 30px rgba(255,255,255,0.3)',
              '0 10px 50px rgba(255,255,255,0.6)',
              '0 10px 30px rgba(255,255,255,0.3)',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          📞 Asesoría gratuita por videollamada. ¡Agenda hoy!
        </motion.button>
      </div>
    </div>
  )
}
