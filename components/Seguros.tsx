'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import GastosMedicosForm from './forms/GastosMedicosForm'
import MascotasForm from './forms/MascotasForm'
import AutosForm from './forms/AutosForm'

export default function Seguros() {
  const [activeInsurance, setActiveInsurance] = useState<'medicos' | 'mascotas' | 'autos'>('medicos')

  const insuranceCompanies = [
    { name: 'ZURICH', logo: '🏢' },
    { name: 'GNP', logo: '🏢' },
    { name: 'Bupa', logo: '🏥' },
    { name: 'Plan Seguro', logo: '🏢' },
    { name: 'MAPFRE', logo: '🏢' },
    { name: 'skandia', logo: '🏢' },
  ]

  return (
    <section id="seguros" className="relative overflow-hidden bg-gradient-to-b from-white via-primary-light/10 to-white py-16 lg:py-24">
      {/* Decorative Circles */}
      <div className="decorative-circle w-40 h-40 bg-primary/5 top-20 right-10" />
      <div className="decorative-circle w-32 h-32 bg-primary-light/20 bottom-40 left-10" />

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
            Seguros
          </h2>
        </motion.div>

        {/* Insurance Type Tabs */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.button
            onClick={() => setActiveInsurance('medicos')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`p-6 rounded-2xl transition-all duration-300 ${
              activeInsurance === 'medicos'
                ? 'bg-primary text-white shadow-xl'
                : 'bg-primary-light/20 text-gray-dark hover:bg-primary-light/40'
            }`}
          >
            <div className="text-4xl mb-3">🏥</div>
            <h3 className="text-xl font-bold">Seguro de Gastos Médicos</h3>
          </motion.button>

          <motion.button
            onClick={() => setActiveInsurance('mascotas')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`p-6 rounded-2xl transition-all duration-300 ${
              activeInsurance === 'mascotas'
                ? 'bg-primary text-white shadow-xl'
                : 'bg-primary-light/20 text-gray-dark hover:bg-primary-light/40'
            }`}
          >
            <div className="text-4xl mb-3">🐾</div>
            <h3 className="text-xl font-bold">Seguro de Mascotas</h3>
          </motion.button>

          <motion.button
            onClick={() => setActiveInsurance('autos')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`p-6 rounded-2xl transition-all duration-300 ${
              activeInsurance === 'autos'
                ? 'bg-primary text-white shadow-xl'
                : 'bg-primary-light/20 text-gray-dark hover:bg-primary-light/40'
            }`}
          >
            <div className="text-4xl mb-3">🚗</div>
            <h3 className="text-xl font-bold">Seguro de Autos</h3>
          </motion.button>
        </div>

        {/* Insurance Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Description */}
          <motion.div
            key={activeInsurance}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {activeInsurance === 'medicos' && (
              <>
                <p className="text-lg leading-relaxed text-gray-dark">
                  Con <span className="font-bold">ERIKA ECHAVARRI</span>, siempre tendrás el respaldo 
                  y la solidez de una empresa dedicada a la asesoría y manejo de tus seguros. Ofreciendo 
                  las mejores opciones pensando en cualquier plan que contrates será garantía de que 
                  recibas el mejor servicio y atención que mereces.
                </p>
                <p className="text-lg leading-relaxed text-gray-dark">
                  Proteger tu es lo más importante para ti y tus seres queridos. Un seguro de{' '}
                  <span className="font-bold">GASTOS MÉDICOS MAYORES</span> te da tranquilidad en caso 
                  de emergencia médica, cubriendo gastos hospitalarios, ambulancia, cirugías y tratamientos.
                </p>
                <div className="relative w-48 h-48 mx-auto lg:mx-0 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-6xl">👨‍⚕️</span>
                </div>
              </>
            )}

            {activeInsurance === 'mascotas' && (
              <>
                <h3 className="text-2xl font-bold text-gray-dark">Protección para tus Amigos Peludos*</h3>
                <p className="text-lg leading-relaxed text-gray-dark">
                  Nuestro seguro para mascotas está diseñado para brindarte protección y tranquilidad para 
                  tus perros y gatos que forman parte de la familia. Puedes elegir las coberturas y asistencia 
                  según las necesidades de tu mascota.
                </p>
                <div className="space-y-3">
                  <p className="font-bold text-lg text-gray-dark">Coberturas y Beneficios:</p>
                  <ul className="space-y-2 text-gray-dark">
                    <li>- Protege a tus perros y gatos desde los 3 meses hasta los 9 años.</li>
                    <li>- Personaliza las coberturas y deducible según las necesidades de tu mascota.</li>
                    <li>- Cubrimos el fallecimiento de tu mascota por enfermedad o accidente.</li>
                    <li>- Orientación veterinaria telefónica las 24 horas, los 7 días de la semana.</li>
                    <li>- Servicio de cremación en caso de fallecimiento.</li>
                    <li>- Responsabilidad Civil por daños a terceros.</li>
                    <li>- Gastos médicos veterinarios en caso de accidente o enfermedad.</li>
                  </ul>
                </div>
                <div className="relative w-48 h-48 mx-auto lg:mx-0 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-6xl">🐱</span>
                </div>
              </>
            )}

            {activeInsurance === 'autos' && (
              <>
                <h3 className="text-2xl font-bold text-gray-dark">Seguro para tu auto</h3>
                <p className="text-lg leading-relaxed text-gray-dark">
                  Para nosotros la seguridad es lo más importante. No escatimes en tu seguro de auto, 
                  invierte en la mejor cobertura. ¡Cotiza ahora y ten la tranquilidad de estar protegido!
                </p>
                <div className="space-y-3">
                  <p className="font-bold text-lg text-gray-dark">*Coberturas y Beneficios*</p>
                  <ul className="space-y-2 text-gray-dark">
                    <li>- Daños materiales: cubrimos daños a tu vehículo en caso de accidente, incendio o robo</li>
                    <li>- Pérdida total: te indemnizamos en caso de pérdida total de tu vehículo</li>
                  </ul>
                </div>
                <div className="relative w-48 h-48 mx-auto lg:mx-0 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-6xl">🚗</span>
                </div>
              </>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border-2 border-primary text-primary font-medium px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            >
              Leer más
            </motion.button>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            key={`form-${activeInsurance}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeInsurance === 'medicos' && <GastosMedicosForm />}
            {activeInsurance === 'mascotas' && <MascotasForm />}
            {activeInsurance === 'autos' && <AutosForm />}
          </motion.div>
        </div>

        {/* Insurance Companies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <p className="text-center text-gray-dark mb-8 text-lg">
            Trabajamos con las mejores empresas de seguros del país
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
            {insuranceCompanies.map((company) => (
              <div key={company.name} className="text-center">
                <div className="text-3xl mb-2">{company.logo}</div>
                <p className="text-sm font-bold text-gray-dark">{company.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
