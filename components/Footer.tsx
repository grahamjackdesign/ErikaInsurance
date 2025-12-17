'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'Facebook', icon: 'f', url: '#' },
    { name: 'Instagram', icon: 'i', url: '#' },
    { name: 'X (Twitter)', icon: 'X', url: '#' },
    { name: 'LinkedIn', icon: 'in', url: '#' },
  ]

  const footerLinks = {
    nosotros: ['Misión', 'Visión', 'Valores'],
    seguros: ['Gastos Médicos', 'Mascotas', 'Autos'],
    planes: ['Retiro', 'Universidad', 'Inversiones'],
  }

  return (
    <footer id="contacto" className="relative bg-gradient-to-br from-gray-dark to-gray-dark/90 text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="decorative-circle w-64 h-64 bg-primary/10 -top-32 -right-32" />
      <div className="decorative-circle w-48 h-48 bg-primary-light/10 -bottom-24 -left-24" />

      <div className="relative section-container py-16">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Profile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white font-bold text-2xl overflow-hidden">
                <span>EE</span>
              </div>
              <div>
                <h3 className="text-xl font-bold bg-primary text-white px-4 py-1 rounded-full inline-block mb-2">
                  Erika Echevarri
                </h3>
                <p className="text-sm text-gray-300">ASESOR PATRIMONIAL Y FINANCIERO</p>
              </div>
              <div className="flex space-x-4 mt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300"
                  >
                    <span className="text-white font-bold text-sm">{social.icon}</span>
                  </a>
                ))}
              </div>
              <div className="space-y-2 text-sm">
                <p className="flex items-center justify-center">
                  <span className="mr-2">📞</span>
                  <a href="tel:4150000000" className="hover:text-primary transition-colors">
                    415 000 0000
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Column 2 - Nosotros */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4 text-primary-light">Nosotros</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {footerLinks.nosotros.map((link) => (
                <li key={link}>
                  <Link href="#nosotros" className="hover:text-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Seguros */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4 text-primary-light">Seguros</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {footerLinks.seguros.map((link) => (
                <li key={link}>
                  <Link href="#seguros" className="hover:text-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Planes de ahorro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4 text-primary-light">Planes de ahorro</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {footerLinks.planes.map((link) => (
                <li key={link}>
                  <Link href="#planes-ahorro" className="hover:text-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h5 className="font-bold mb-2">Contacto</h5>
              <Link href="#contacto" className="text-primary hover:text-primary-light transition-colors">
                Contáctanos
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-8 text-center text-sm text-gray-400"
        >
          <p>
            &copy; {currentYear} Erika Echevarri. Todos los derechos reservados.
          </p>
          <p className="mt-2 text-xs">
            Tu tranquilidad, mi prioridad
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
