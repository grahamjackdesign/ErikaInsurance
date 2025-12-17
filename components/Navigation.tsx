'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Seguros', href: '#seguros' },
    { name: 'Planes de ahorro', href: '#planes-ahorro' },
    { name: 'Inversiones', href: '#inversiones' },
    { name: 'Contacto', href: '#contacto' },
  ]

  return (
    <>
      {/* Top Banner */}
      <div className="bg-primary text-white text-center py-3 px-4 font-medium">
        <span className="text-sm lg:text-base">
          Asesoría <span className="font-bold">gratuita</span> por videollamada.{' '}
          <Link href="#contacto" className="underline hover:text-primary-light transition-colors">
            ¡Agenda hoy!
          </Link>
        </span>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Name */}
            <Link href="/" className="text-xl lg:text-2xl font-black text-gray-dark hover:text-primary transition-colors">
              Erika Echevarri
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-dark hover:text-primary font-medium transition-colors text-sm lg:text-base"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-dark hover:text-primary focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-dark hover:text-primary font-medium transition-colors py-2"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </>
  )
}
