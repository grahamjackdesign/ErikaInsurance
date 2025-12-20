'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white pt-20">
      {/* Add padding-top for fixed nav (80px) + sticky banner (~60px) = 140px total */}
      <div className="pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Purple decorative bar */}
              <div className="flex items-center gap-4">
                <div className="w-2 h-24 bg-primary rounded-full"></div>
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-primary leading-tight">
                    Asesor Patrimonial y<br />Financiero
                  </h1>
                </div>
              </div>

              {/* Subtitle with purple pill background */}
              <div className="space-y-4">
                <p className="text-xl text-gray-700">
                  Especialista en
                </p>
                <div className="inline-block">
                  <div className="bg-primary text-white px-6 py-3 rounded-full font-medium text-lg">
                    Planificación Patrimonial
                  </div>
                </div>
                <p className="text-xl text-primary font-medium">
                  y Financiero
                </p>
              </div>

              {/* Tagline */}
              <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                Tu tranquilidad, mi prioridad
              </h2>

              {/* Small decorative elements */}
              <div className="flex gap-4 items-center">
                <div className="w-3 h-3 bg-red-400 rounded-sm"></div>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <svg 
                    className="w-6 h-6 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Right side - Profile image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Main circular image container */}
                <div className="relative w-full max-w-md mx-auto aspect-square">
                  {/* Purple background circle */}
                  <div className="absolute inset-0 bg-primary rounded-full"></div>
                  
                  {/* Profile image - replace with actual image */}
                  <div className="absolute inset-0 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                    {/* Replace this with actual image */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                      <span className="text-white text-6xl">EE</span>
                    </div>
                    {/* Uncomment and use this when you have the actual image:
                    <Image
                      src="/images/erika-profile.jpg"
                      alt="Erika Echevarri"
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>

                  {/* Decorative circles */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary rounded-full -translate-y-1/3 translate-x-1/3"></div>
                  <div className="absolute bottom-1/4 -left-8 w-20 h-20 border-4 border-primary rounded-full"></div>
                  <div className="absolute bottom-12 left-1/4 w-16 h-16 border-4 border-gray-900 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Purple wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0,100 C320,150 480,50 720,100 C960,150 1120,50 1440,100 L1440,200 L0,200 Z"
            fill="#7878ED"
            fillOpacity="0.3"
          />
        </svg>
      </div>
    </section>
  )
}
