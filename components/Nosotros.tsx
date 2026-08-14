'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Nosotros() {
  const valores = [
    'CONFIANZA',
    'CALIDEZ',
    'DEDICACIÓN',
    'RESPONSABILIDAD',
    'HONESTIDAD',
  ]

  const ganas = [
    'Tener una estrategia financiera clara, en lugar de decisiones improvisadas.',
    'Entender exactamente qué estás contratando y por qué.',
    'Ahorrar tiempo evitando comparar cientos de opciones por tu cuenta.',
    'Contar con una asesora que te acompaña antes, durante y después de contratar.',
    'Tomar decisiones con tranquilidad, sabiendo que alguien está cuidando tus intereses.',
    'Adaptar tu estrategia conforme cambian tu vida, tu familia y tus objetivos.',
  ]

  return (
    <>
      {/* Blue gradient section */}
      <section id="nosotros" className="relative bg-gradient-to-b from-primary to-primary-dark pt-[60px] pb-12 mt-[0px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Antes de hablar de seguros, quiero que me conozcas
              </h2>
            </div>

            {/* Introduction with Image on Left */}
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left - Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Image
                  src="/images/erika-foto2.png"
                  alt="Protección y Seguridad"
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-3xl"
                />
              </motion.div>

              {/* Right - Text Panel */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 space-y-6">
                  <p className="text-white text-lg leading-relaxed">
                    Soy Erika Echavarri, asesora patrimonial y financiera. Durante mi experiencia he aprendido que las mejores decisiones financieras no se toman por miedo ni por presión, sino cuando las personas entienden realmente sus opciones. Mi compromiso es ayudarte a proteger tu patrimonio, construir un plan financiero que tenga sentido para tu vida y acompañarte en cada etapa, con claridad, estrategia y honestidad. Aquí no vas a encontrar promesas irreales ni recomendaciones hechas al azar. Vas a encontrar una asesoría cercana, profesional y pensada para ti.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pill CTA + benefits section */}
      <section className="bg-[#C5C5FF] pt-12 pb-[50px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8">

          {/* Pill heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-primary bg-white rounded-full px-10 py-5 shadow-sm text-center">
              ¿Qué ganas al trabajar conmigo?
            </h3>
          </motion.div>

          {/* 2-column bullet grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ganas.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 text-gray-700"
              >
                <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-white flex-shrink-0" />
                <span className="text-lg leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
