'use client'

import { motion } from 'framer-motion'

export default function CTABanner() {
  const handleScheduleCall = () => {
    // You can link this to a calendar booking system or WhatsApp
    // For now, it scrolls to contact or opens WhatsApp
    window.open('https://wa.me/525526619640?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20videollamada%20gratuita', '_blank')
  }

  return (
    <div className="sticky top-[80px] z-40 bg-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-center gap-4">
        <span className="text-white font-medium text-2xl">
          Asesoría gratuita por videollamada.
        </span>
        <motion.button
          onClick={handleScheduleCall}
          className="px-6 py-2.5 bg-white text-primary font-bold text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-white"
          animate={{
            scale: [1, 1.05, 1],
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
          whileHover={{ 
            scale: 1.1,
            boxShadow: '0 15px 60px rgba(255,255,255,0.8)',
          }}
          whileTap={{ scale: 0.95 }}
        >
          ¡Agenda hoy!
        </motion.button>
      </div>
    </div>
  )
}

