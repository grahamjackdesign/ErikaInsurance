'use client'

import { motion } from 'framer-motion'
import PlanesAhorroForm from './forms/PlanesAhorroForm'

export default function PlanesAhorro() {
  return (
    <section id="planes-ahorro" className="relative overflow-hidden bg-gradient-to-br from-primary-light/20 via-white to-primary/10 py-16 lg:py-24">
      {/* Decorative Circles */}
      <div className="decorative-circle w-48 h-48 bg-primary/5 -top-24 -right-24" />
      <div className="decorative-circle w-32 h-32 bg-primary-light/20 bottom-32 left-20" />

      <div className="section-container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="inline-block bg-primary text-white px-8 py-3 rounded-full text-2xl lg:text-3xl font-bold mb-8">
            Planes de ahorro
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Planes de retiro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-primary">Planes de retiro</h3>

            <p className="text-lg text-gray-dark leading-relaxed">
              Nuestros seguro de Retiro es una solución integral que te brinda protección y ahorro para 
              tu futuro. Con este seguro, obtiene un respaldo en un seguro de vida y al mismo tiempo, 
              puedes ahorro de acuerdo con tus posibilidades y obtener rendimientos.
            </p>

            <div className="space-y-4">
              <p className="font-bold text-xl text-gray-dark">BENEFICIOS CLAVE:</p>
              <ul className="space-y-2 text-gray-dark">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span>Protege el bienestar económico de tus seres queridos en caso de fallecimiento, 
                  invalidez o incapacidad total o permanente.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span>Recibe la suma asegurada en caso de fallecimiento, para que tus beneficiarios 
                  estén protegidos.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span>Aprovecha los beneficios fiscales:</span>
                </li>
                <li className="ml-6">- Deducción de impuestos.</li>
                <li className="ml-6">- Tu dinero ira creciendo año con año.</li>
                <li className="ml-6">- Protegemos tu dinero para que no pierda valor en el tiempo.</li>
                <li className="ml-6">- Plan flexible que te permite hacer aportaciones adicionales.</li>
              </ul>
            </div>

            <div className="space-y-3 bg-primary-light/20 p-6 rounded-2xl">
              <p className="font-bold text-lg text-gray-dark">VENTAJAS DE NUESTRO SEGURO DE RETIRO:</p>
              <ul className="space-y-2 text-gray-dark">
                <li>✓ Tranquilidad y seguridad para ti y tus seres queridos.</li>
                <li>✓ Ahorro y protección para un futuro sin preocupaciones.</li>
                <li>✓ Flexibilidad para adaptar el plan a tus metas y necesidades y posibilidades.</li>
              </ul>
            </div>

            <p className="text-lg text-gray-dark font-medium">
              Invierte en tu retiro con nuestros Plan Personalizados para el Retiro. Ahorra hoy y disfruta 
              de un retiro tranquilo y seguro, protege tu estilo de vida!
            </p>

            <div className="relative w-56 h-56 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-7xl">👨‍💼</span>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border-2 border-primary text-primary font-medium px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            >
              Leer más
            </motion.button>
          </motion.div>

          {/* Right Column - Ahorro para la Universidad */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-primary">Ahorro para la Universidad</h3>

            <p className="text-lg text-gray-dark leading-relaxed">
              Asegura el futuro educativo de tus hijos con nuestros planes de ahorro especializados. 
              Empieza a ahorrar hoy para garantizar que tengan acceso a la mejor educación mañana.
            </p>

            <div className="relative w-56 h-56 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-7xl">🎓</span>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-primary text-center mb-8">
            SOLICITA UNA COTIZACIÓN:
          </h3>
          <PlanesAhorroForm />
        </motion.div>
      </div>
    </section>
  )
}
