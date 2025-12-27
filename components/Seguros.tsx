'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Seguros() {
  const [activeInsurance, setActiveInsurance] = useState('medicos')
  
  // Expand/collapse states for each insurance type
  const [expandedMedicos, setExpandedMedicos] = useState(false)
  const [expandedMascotas, setExpandedMascotas] = useState(false)
  const [expandedAutos, setExpandedAutos] = useState(false)

  const benefits = [
    'Consultas gratuitas o costo preferencial con especialistas.',
    'Cobertura de deducible de hasta $10,000 pesos',
    'Cobertura de 10% de coaseguro',
    'En grupo Angeles y Star Médica',
  ]

  // Medical Insurance Form State
  const [formData, setFormData] = useState({
    telefono: '',
    email: '',
    plan: '',
    cobertura: '',
    nombre: '',
    fechaNacimiento: '',
    codigoPostal: '',
    enfermedad: '',
    horario: '',
    medio: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  // Pet Insurance Form State
  const [petFormData, setPetFormData] = useState({
    telefono: '',
    email: '',
  })

  const [isPetSubmitting, setIsPetSubmitting] = useState(false)
  const [petSubmitMessage, setPetSubmitMessage] = useState('')

  // Auto Insurance Form State
  const [autoFormData, setAutoFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    codigoPostal: '',
    tipoSeguro: '',
    fechaNacimiento: '',
    marca: '',
    modelo: '',
    descripcion: '',
    version: '',
    transmision: '',
    adicionales: '',
    formaPago: '',
    cobertura: '',
    comentarios: '',
  })

  const [isAutoSubmitting, setIsAutoSubmitting] = useState(false)
  const [autoSubmitMessage, setAutoSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handlePetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPetFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleAutoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setAutoFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'gastos-medicos',
          ...formData,
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitMessage('¡Gracias! Nos pondremos en contacto contigo pronto.')
        
        setTimeout(() => {
          setFormData({
            telefono: '',
            email: '',
            plan: '',
            cobertura: '',
            nombre: '',
            fechaNacimiento: '',
            codigoPostal: '',
            enfermedad: '',
            horario: '',
            medio: '',
          })
          setSubmitMessage('')
        }, 3000)
      } else {
        setSubmitMessage('Hubo un error. Por favor intenta de nuevo.')
      }
    } catch (error) {
      console.error('Error sending form:', error)
      setSubmitMessage('Hubo un error. Por favor intenta de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handlePetSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsPetSubmitting(true)
    setPetSubmitMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'mascotas',
          ...petFormData,
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setPetSubmitMessage('¡Gracias! Nos pondremos en contacto contigo pronto.')
        
        setTimeout(() => {
          setPetFormData({
            telefono: '',
            email: '',
          })
          setPetSubmitMessage('')
        }, 3000)
      } else {
        setPetSubmitMessage('Hubo un error. Por favor intenta de nuevo.')
      }
    } catch (error) {
      console.error('Error sending form:', error)
      setPetSubmitMessage('Hubo un error. Por favor intenta de nuevo.')
    } finally {
      setIsPetSubmitting(false)
    }
  }

  const handleAutoSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsAutoSubmitting(true)
    setAutoSubmitMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'autos',
          ...autoFormData,
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setAutoSubmitMessage('¡Gracias! Nos pondremos en contacto contigo pronto.')
        
        setTimeout(() => {
          setAutoFormData({
            nombre: '',
            telefono: '',
            email: '',
            codigoPostal: '',
            tipoSeguro: '',
            fechaNacimiento: '',
            marca: '',
            modelo: '',
            descripcion: '',
            version: '',
            transmision: '',
            adicionales: '',
            formaPago: '',
            cobertura: '',
            comentarios: '',
          })
          setAutoSubmitMessage('')
        }, 3000)
      } else {
        setAutoSubmitMessage('Hubo un error. Por favor intenta de nuevo.')
      }
    } catch (error) {
      console.error('Error sending form:', error)
      setAutoSubmitMessage('Hubo un error. Por favor intenta de nuevo.')
    } finally {
      setIsAutoSubmitting(false)
    }
  }

  return (
    <section id="seguros" className="relative pt-0 pb-20 -mt-[40px]" style={{ backgroundColor: '#C5C5FF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-8">
              Seguros
            </h2>
          </div>

          {/* Insurance Type Buttons - No Icons */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
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
              <h3 className="text-xl font-bold">Seguro de Autos</h3>
            </motion.button>
          </div>

          {/* Insurance Content - Image on Left, Text on Right */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Image */}
            <motion.div
              key={activeInsurance}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {activeInsurance === 'medicos' && (
                <Image
                  src="/images/seguro-gastosmedicos.png"
                  alt="Seguro de Gastos Médicos"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-3xl"
                />
              )}
              {activeInsurance === 'mascotas' && (
                <Image
                  src="/images/mascotas.png"
                  alt="Seguro de Mascotas"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-3xl"
                />
              )}
              {activeInsurance === 'autos' && (
                <Image
                  src="/images/auto.png"
                  alt="Seguro de Autos"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-3xl"
                />
              )}
            </motion.div>

            {/* Right Side - Description */}
            <motion.div
              key={`text-${activeInsurance}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {activeInsurance === 'medicos' && (
                <>
                  <div className="space-y-4">
                    <p className="text-lg leading-relaxed text-gray-dark">
                      Con <span className="font-bold">ERIKA ECHAVARRI</span>, siempre tendrás el respaldo 
                      y la solidez de una empresa dedicada a la asesoría y manejo de tus seguros. Ofreciendo 
                      las mejores opciones pensando en cualquier plan que contrates será garantía de que 
                      recibas el mejor servicio y atención que mereces.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-dark">
                      Proteger tu es lo más importante para ti y tus seres queridos.
                    </p>
                    
                    {expandedMedicos && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4"
                      >
                        <p className="text-lg leading-relaxed text-gray-dark">
                          Un seguro de <span className="font-bold">GASTOS MÉDICOS MAYORES</span> te da tranquilidad en caso 
                          de emergencia médica, cubriendo gastos hospitalarios, ambulancia, cirugías y tratamientos.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-dark">
                          Entendemos la importancia de la salud y la seguridad financiera. Por eso, ofrecemos una 
                          amplia gama de seguros de Gastos Medico Mayores para satisfacer tus necesidades y las de 
                          tus seres queridos.
                        </p>
                      </motion.div>
                    )}
                    
                    <button
                      onClick={() => setExpandedMedicos(!expandedMedicos)}
                      className="text-primary font-semibold hover:text-primary-dark transition-colors flex items-center gap-2"
                    >
                      {expandedMedicos ? 'Leer menos' : 'Leer más'}
                      <svg
                        className={`w-4 h-4 transition-transform ${expandedMedicos ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  <div className="bg-primary-light/20 rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-primary mb-4">
                      Disfruta de beneficios exclusivos con nuestros seguros de GMM
                    </h4>
                    <ul className="space-y-3">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-dark">
                          <span className="text-primary text-xl mt-1">•</span>
                          <span className="text-lg">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              {activeInsurance === 'mascotas' && (
                <>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-primary">
                      Seguro para Mascotas: Protección para tus Amigos Peludos
                    </h3>
                    
                    <p className="text-lg leading-relaxed text-gray-dark">
                      Nuestro seguro para mascotas está diseñado para brindarte protección y tranquilidad para 
                      tus perros y gatos que forman parte de la familia. Puedes elegir las coberturas y asistencia 
                      según las necesidades de tu mascota.
                    </p>

                    <div className="bg-primary-light/20 rounded-2xl p-6">
                      <h4 className="text-xl font-bold text-primary mb-4">
                        Coberturas y Beneficios
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-gray-dark">
                          <span className="text-primary text-xl mt-1">•</span>
                          <span className="text-lg">Protege a tus perros y gatos desde los 3 meses hasta los 9 años</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-dark">
                          <span className="text-primary text-xl mt-1">•</span>
                          <span className="text-lg">Personaliza las coberturas y deducible según las necesidades de tu mascota</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-dark">
                          <span className="text-primary text-xl mt-1">•</span>
                          <span className="text-lg">Cubrimos el fallecimiento de tu mascota por enfermedad o accidente</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-dark">
                          <span className="text-primary text-xl mt-1">•</span>
                          <span className="text-lg">Orientación veterinaria telefónica las 24 horas, los 7 días de la semana</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-dark">
                          <span className="text-primary text-xl mt-1">•</span>
                          <span className="text-lg">Servicio de cremación en caso de fallecimiento por enfermedad o accidente</span>
                        </li>
                        
                        {expandedMascotas && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                          >
                            <li className="flex items-start gap-3 text-gray-dark">
                              <span className="text-primary text-xl mt-1">•</span>
                              <span className="text-lg">Responsabilidad Civil: te respalda por daños a terceros en su persona, bienes u otras mascotas</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-dark">
                              <span className="text-primary text-xl mt-1">•</span>
                              <span className="text-lg">Gastos médicos veterinarios: cubrimos gastos médicos para tu mascota en caso de accidente o enfermedad</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-dark">
                              <span className="text-primary text-xl mt-1">•</span>
                              <span className="text-lg">Fallecimiento de mascota: indemnizamos al contratante responsable de la mascota en caso de fallecimiento</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-dark">
                              <span className="text-primary text-xl mt-1">•</span>
                              <span className="text-lg">Robo con violencia: indemnizamos al contratante responsable de la mascota en caso de robo con violencia</span>
                            </li>
                          </motion.div>
                        )}
                      </ul>
                      
                      <button
                        onClick={() => setExpandedMascotas(!expandedMascotas)}
                        className="mt-4 text-primary font-semibold hover:text-primary-dark transition-colors flex items-center gap-2"
                      >
                        {expandedMascotas ? 'Leer menos' : 'Leer más'}
                        <svg
                          className={`w-4 h-4 transition-transform ${expandedMascotas ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>

                    {expandedMascotas && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <div className="bg-primary-light/10 rounded-2xl p-6">
                          <h4 className="text-xl font-bold text-primary mb-4">
                            Ventajas de nuestro Seguro para Mascotas
                          </h4>
                          <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-gray-dark">
                              <span className="text-primary text-xl mt-1">•</span>
                              <span className="text-lg">Protección integral para tus mascotas</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-dark">
                              <span className="text-primary text-xl mt-1">•</span>
                              <span className="text-lg">Tranquilidad y seguridad para ti y tu familia</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-dark">
                              <span className="text-primary text-xl mt-1">•</span>
                              <span className="text-lg">Flexibilidad para adaptar la cobertura a tus necesidades y posibilidades</span>
                            </li>
                          </ul>
                        </div>

                        <p className="text-lg leading-relaxed text-primary font-medium mt-6">
                          ¡Contáctanos para saber más sobre cómo nuestro Seguro para Mascotas puede ayudarte a proteger a tus amigos peludos!
                        </p>
                      </motion.div>
                    )}
                  </div>
                </>
              )}

              {activeInsurance === 'autos' && (
                <>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-gray-dark font-medium">
                      Para nosotros la seguridad es lo más importante. No escatimes en tu seguro de auto, 
                      invierte en la mejor cobertura. ¡Cotiza ahora y ten la tranquilidad de estar protegido!
                    </p>

                    <div className="bg-primary-light/20 rounded-2xl p-6">
                      <h4 className="text-xl font-bold text-primary mb-4">
                        Coberturas y Beneficios
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-gray-dark">
                          <span className="text-primary text-xl mt-1">•</span>
                          <span className="text-lg">Daños materiales: cubrimos daños a tu vehículo en caso de accidente, incendio o robo</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-dark">
                          <span className="text-primary text-xl mt-1">•</span>
                          <span className="text-lg">Pérdida total: te indemnizamos en caso de pérdida total de tu vehículo</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-dark">
                          <span className="text-primary text-xl mt-1">•</span>
                          <span className="text-lg">Daños a terceros: cubrimos daños a personas o propiedades de terceros</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-dark">
                          <span className="text-primary text-xl mt-1">•</span>
                          <span className="text-lg">Asistencia vial: te brindamos asistencia en caso de avería o accidente</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-dark">
                          <span className="text-primary text-xl mt-1">•</span>
                          <span className="text-lg">Responsabilidad Civil: te protegemos en caso de daños a terceros</span>
                        </li>
                        
                        {expandedAutos && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                          >
                            <li className="flex items-start gap-3 text-gray-dark">
                              <span className="text-primary text-xl mt-1">•</span>
                              <span className="text-lg">Cristales: cubrimos daños a los cristales de tu vehículo</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-dark">
                              <span className="text-primary text-xl mt-1">•</span>
                              <span className="text-lg">Robo: te indemnizamos en caso de robo de tu vehículo</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-dark">
                              <span className="text-primary text-xl mt-1">•</span>
                              <span className="text-lg">Protección legal: te brindamos apoyo legal en caso de accidente</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-dark">
                              <span className="text-primary text-xl mt-1">•</span>
                              <span className="text-lg">Gastos médicos: cubrimos gastos médicos para los ocupantes de tu vehículo</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-dark">
                              <span className="text-primary text-xl mt-1">•</span>
                              <span className="text-lg">Responsabilidad civil en Estados Unidos: te protegemos en caso de daños a terceros</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-dark">
                              <span className="text-primary text-xl mt-1">•</span>
                              <span className="text-lg">Extensión de Responsabilidad Civil: te brindamos cobertura adicional para daños a terceros</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-dark">
                              <span className="text-primary text-xl mt-1">•</span>
                              <span className="text-lg">Repuesto de llantas: te reembolsamos el costo de repuesto de llantas</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-dark">
                              <span className="text-primary text-xl mt-1">•</span>
                              <span className="text-lg">Descuento por antigüedad: te ofrecemos un descuento en la prima de tu póliza al contratar una nueva póliza</span>
                            </li>
                          </motion.div>
                        )}
                      </ul>
                      
                      <button
                        onClick={() => setExpandedAutos(!expandedAutos)}
                        className="mt-4 text-primary font-semibold hover:text-primary-dark transition-colors flex items-center gap-2"
                      >
                        {expandedAutos ? 'Leer menos' : 'Leer más'}
                        <svg
                          className={`w-4 h-4 transition-transform ${expandedAutos ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>

                    {expandedAutos && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <div className="bg-primary-light/10 rounded-2xl p-6">
                          <h4 className="text-xl font-bold text-primary mb-4">
                            Ventajas de nuestra cobertura
                          </h4>
                          <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-gray-dark">
                              <span className="text-primary text-xl mt-1">•</span>
                              <span className="text-lg">Protección integral para tu vehículo y tus seres queridos</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-dark">
                              <span className="text-primary text-xl mt-1">•</span>
                              <span className="text-lg">Tranquilidad y seguridad en caso de accidente o imprevisto</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-dark">
                              <span className="text-primary text-xl mt-1">•</span>
                              <span className="text-lg">Flexibilidad para adaptar la cobertura a tus necesidades y posibilidades</span>
                            </li>
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </>
              )}
            </motion.div>
          </div>

          {/* Pet Insurance Contact Form */}
          {activeInsurance === 'mascotas' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12"
            >
              <div className="bg-primary-light/10 rounded-3xl p-8 lg:p-12 max-w-2xl mx-auto">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Solicita Información
                  </h3>
                  <p className="text-gray-600">
                    Déjanos tus datos y te contactaremos
                  </p>
                </div>

                <form onSubmit={handlePetSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="pet-telefono" className="block text-gray-700 font-medium mb-2">
                      TELÉFONO *
                    </label>
                    <input
                      type="tel"
                      id="pet-telefono"
                      name="telefono"
                      value={petFormData.telefono}
                      onChange={handlePetChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                      placeholder="Ingresa tu teléfono"
                    />
                  </div>

                  <div>
                    <label htmlFor="pet-email" className="block text-gray-700 font-medium mb-2">
                      E MAIL *
                    </label>
                    <input
                      type="email"
                      id="pet-email"
                      name="email"
                      value={petFormData.email}
                      onChange={handlePetChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                      placeholder="Ingresa tu email"
                    />
                  </div>

                  <div className="pt-4">
                    <motion.button
                      type="submit"
                      disabled={isPetSubmitting}
                      whileHover={{ scale: isPetSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isPetSubmitting ? 1 : 0.98 }}
                      className={`w-full px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
                        isPetSubmitting
                          ? 'bg-gray-400 cursor-not-allowed text-white'
                          : 'bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl'
                      }`}
                    >
                      {isPetSubmitting ? 'Enviando...' : 'Enviar'}
                    </motion.button>
                  </div>

                  {petSubmitMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-4 bg-primary/10 rounded-lg text-primary text-center font-medium"
                    >
                      {petSubmitMessage}
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          )}

          {/* Auto Insurance Contact Form */}
          {activeInsurance === 'autos' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12"
            >
              <div className="bg-primary-light/10 rounded-3xl p-8 lg:p-12">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-primary mb-2">
                    Nosotros te Contactamos
                  </h3>
                </div>

                <form onSubmit={handleAutoSubmit} className="space-y-6 max-w-4xl mx-auto">
                  {/* Nombre y Teléfono */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="auto-nombre" className="block text-gray-700 font-medium mb-2">
                        NOMBRE *
                      </label>
                      <input
                        type="text"
                        id="auto-nombre"
                        name="nombre"
                        value={autoFormData.nombre}
                        onChange={handleAutoChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Tu nombre"
                      />
                    </div>

                    <div>
                      <label htmlFor="auto-telefono" className="block text-gray-700 font-medium mb-2">
                        TELÉFONO *
                      </label>
                      <input
                        type="tel"
                        id="auto-telefono"
                        name="telefono"
                        value={autoFormData.telefono}
                        onChange={handleAutoChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Tu teléfono"
                      />
                    </div>
                  </div>

                  {/* Email y Código Postal */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="auto-email" className="block text-gray-700 font-medium mb-2">
                        E-MAIL *
                      </label>
                      <input
                        type="email"
                        id="auto-email"
                        name="email"
                        value={autoFormData.email}
                        onChange={handleAutoChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Tu email"
                      />
                    </div>

                    <div>
                      <label htmlFor="auto-codigoPostal" className="block text-gray-700 font-medium mb-2">
                        CÓDIGO POSTAL *
                      </label>
                      <input
                        type="text"
                        id="auto-codigoPostal"
                        name="codigoPostal"
                        value={autoFormData.codigoPostal}
                        onChange={handleAutoChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Código postal"
                      />
                    </div>
                  </div>

                  {/* Tipo de Seguro y Fecha de Nacimiento */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="auto-tipoSeguro" className="block text-gray-700 font-medium mb-2">
                        TIPO DE SEGURO
                      </label>
                      <select
                        id="auto-tipoSeguro"
                        name="tipoSeguro"
                        value={autoFormData.tipoSeguro}
                        onChange={handleAutoChange}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        <option value="">Selecciona</option>
                        <option value="UBER">UBER</option>
                        <option value="Vehículo Privado">Vehículo Privado</option>
                        <option value="Vehículo de Carga">Vehículo de Carga</option>
                        <option value="Motocicleta">Motocicleta</option>
                        <option value="Vehículo de Servicio Público">Vehículo de Servicio Público</option>
                        <option value="Vehículo de Salvamento">Vehículo de Salvamento</option>
                        <option value="Vehículo Legalizado">Vehículo Legalizado</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="auto-fechaNacimiento" className="block text-gray-700 font-medium mb-2">
                        FECHA DE NACIMIENTO
                      </label>
                      <input
                        type="date"
                        id="auto-fechaNacimiento"
                        name="fechaNacimiento"
                        value={autoFormData.fechaNacimiento}
                        onChange={handleAutoChange}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>

                  {/* Descripción del Vehículo Header */}
                  <div className="pt-4">
                    <h4 className="text-lg font-bold text-gray-700 mb-4">DESCRIPCIÓN DEL VEHÍCULO:</h4>
                  </div>

                  {/* Marca y Modelo */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="auto-marca" className="block text-gray-700 font-medium mb-2">
                        MARCA
                      </label>
                      <input
                        type="text"
                        id="auto-marca"
                        name="marca"
                        value={autoFormData.marca}
                        onChange={handleAutoChange}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Marca del vehículo"
                      />
                    </div>

                    <div>
                      <label htmlFor="auto-modelo" className="block text-gray-700 font-medium mb-2">
                        MODELO
                      </label>
                      <input
                        type="text"
                        id="auto-modelo"
                        name="modelo"
                        value={autoFormData.modelo}
                        onChange={handleAutoChange}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Modelo"
                      />
                    </div>
                  </div>

                  {/* Descripción y Versión */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="auto-descripcion" className="block text-gray-700 font-medium mb-2">
                        DESCRIPCIÓN
                      </label>
                      <input
                        type="text"
                        id="auto-descripcion"
                        name="descripcion"
                        value={autoFormData.descripcion}
                        onChange={handleAutoChange}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Descripción"
                      />
                    </div>

                    <div>
                      <label htmlFor="auto-version" className="block text-gray-700 font-medium mb-2">
                        VERSIÓN
                      </label>
                      <input
                        type="text"
                        id="auto-version"
                        name="version"
                        value={autoFormData.version}
                        onChange={handleAutoChange}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Versión"
                      />
                    </div>
                  </div>

                  {/* Transmisión y Adicionales */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="auto-transmision" className="block text-gray-700 font-medium mb-2">
                        TRANSMISIÓN
                      </label>
                      <input
                        type="text"
                        id="auto-transmision"
                        name="transmision"
                        value={autoFormData.transmision}
                        onChange={handleAutoChange}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Transmisión"
                      />
                    </div>

                    <div>
                      <label htmlFor="auto-adicionales" className="block text-gray-700 font-medium mb-2">
                        ADICIONALES
                      </label>
                      <input
                        type="text"
                        id="auto-adicionales"
                        name="adicionales"
                        value={autoFormData.adicionales}
                        onChange={handleAutoChange}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Adicionales"
                      />
                    </div>
                  </div>

                  {/* ¿Cómo desea que coticemos? Header */}
                  <div className="pt-4">
                    <h4 className="text-lg font-bold text-gray-700 mb-4">¿CÓMO DESEA QUE COTICEMOS?</h4>
                  </div>

                  {/* Forma de Pago y Cobertura */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="auto-formaPago" className="block text-gray-700 font-medium mb-2">
                        FORMA DE PAGO
                      </label>
                      <select
                        id="auto-formaPago"
                        name="formaPago"
                        value={autoFormData.formaPago}
                        onChange={handleAutoChange}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        <option value="">Selecciona</option>
                        <option value="Mensual">Mensual</option>
                        <option value="Trimestral">Trimestral</option>
                        <option value="Semestral">Semestral</option>
                        <option value="Anual">Anual</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="auto-cobertura" className="block text-gray-700 font-medium mb-2">
                        COBERTURA
                      </label>
                      <select
                        id="auto-cobertura"
                        name="cobertura"
                        value={autoFormData.cobertura}
                        onChange={handleAutoChange}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        <option value="">Selecciona</option>
                        <option value="Básica">Básica</option>
                        <option value="Limitada">Limitada</option>
                        <option value="Amplia">Amplia</option>
                      </select>
                    </div>
                  </div>

                  {/* Comentarios */}
                  <div>
                    <label htmlFor="auto-comentarios" className="block text-gray-700 font-medium mb-2">
                      COMENTARIOS
                    </label>
                    <textarea
                      id="auto-comentarios"
                      name="comentarios"
                      value={autoFormData.comentarios}
                      onChange={handleAutoChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Comentarios adicionales"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <motion.button
                      type="submit"
                      disabled={isAutoSubmitting}
                      whileHover={{ scale: isAutoSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isAutoSubmitting ? 1 : 0.98 }}
                      className={`w-full md:w-auto px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                        isAutoSubmitting
                          ? 'bg-gray-400 cursor-not-allowed text-white'
                          : 'bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl'
                      }`}
                    >
                      {isAutoSubmitting ? 'Enviando...' : 'Enviar'}
                    </motion.button>
                  </div>

                  {autoSubmitMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-4 bg-primary/10 rounded-lg text-primary text-center font-medium"
                    >
                      {autoSubmitMessage}
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          )}

          {/* Medical Insurance Contact Form */}
          {activeInsurance === 'medicos' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12"
            >
              <div className="bg-primary-light/10 rounded-3xl p-8 lg:p-12">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-primary mb-2">
                    Solicita tu Cotización
                  </h3>
                  <p className="text-gray-600">
                    Completa el formulario y nos pondremos en contacto contigo
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto">
                  {/* Teléfono y Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="telefono" className="block text-gray-700 font-medium mb-2">
                        TELÉFONO *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                        placeholder="Ingresa tu teléfono"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        E MAIL *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                        placeholder="Ingresa tu email"
                      />
                    </div>
                  </div>

                  {/* Plan y Cobertura */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="plan" className="block text-gray-700 font-medium mb-2">
                        PLAN *
                      </label>
                      <select
                        id="plan"
                        name="plan"
                        value={formData.plan}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                      >
                        <option value="">Selecciona un plan</option>
                        <option value="Personal">Personal</option>
                        <option value="Familiar">Familiar</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="cobertura" className="block text-gray-700 font-medium mb-2">
                        COBERTURA *
                      </label>
                      <select
                        id="cobertura"
                        name="cobertura"
                        value={formData.cobertura}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                      >
                        <option value="">Selecciona cobertura</option>
                        <option value="Nacional">Nacional</option>
                        <option value="Internacional">Internacional</option>
                      </select>
                    </div>
                  </div>

                  {/* Nombre y Fecha de Nacimiento */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nombre" className="block text-gray-700 font-medium mb-2">
                        NOMBRE *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                        placeholder="Ingresa tu nombre completo"
                      />
                    </div>

                    <div>
                      <label htmlFor="fechaNacimiento" className="block text-gray-700 font-medium mb-2">
                        FECHA DE NACIMIENTO *
                      </label>
                      <input
                        type="date"
                        id="fechaNacimiento"
                        name="fechaNacimiento"
                        value={formData.fechaNacimiento}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Código Postal */}
                  <div>
                    <label htmlFor="codigoPostal" className="block text-gray-700 font-medium mb-2">
                      CÓDIGO POSTAL *
                    </label>
                    <input
                      type="text"
                      id="codigoPostal"
                      name="codigoPostal"
                      value={formData.codigoPostal}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                      placeholder="Ingresa tu código postal"
                    />
                  </div>

                  {/* ¿Padece alguna enfermedad? */}
                  <div>
                    <label htmlFor="enfermedad" className="block text-gray-700 font-medium mb-2">
                      ¿PADECE ALGUNA ENFERMEDAD? *
                    </label>
                    <select
                      id="enfermedad"
                      name="enfermedad"
                      value={formData.enfermedad}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="No">No</option>
                      <option value="Diabetes">Diabetes</option>
                      <option value="Hipertension">Hipertensión</option>
                      <option value="Cancer">Cáncer</option>
                      <option value="Otra">Otra</option>
                    </select>
                  </div>

                  {/* Contacto Preferente */}
                  <div>
                    <h4 className="text-gray-700 font-bold text-lg mb-4">CONTACTO PREFERENTE</h4>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="horario" className="block text-gray-700 font-medium mb-2">
                          HORARIO *
                        </label>
                        <select
                          id="horario"
                          name="horario"
                          value={formData.horario}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                        >
                          <option value="">Selecciona un horario</option>
                          <option value="9:00 a 12:00">9:00 a 12:00</option>
                          <option value="12:00 a 14:00">12:00 a 14:00</option>
                          <option value="14:00 a 16:00">14:00 a 16:00</option>
                          <option value="16:00 a 18:00">16:00 a 18:00</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="medio" className="block text-gray-700 font-medium mb-2">
                          MEDIO *
                        </label>
                        <select
                          id="medio"
                          name="medio"
                          value={formData.medio}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                        >
                          <option value="">Selecciona un medio</option>
                          <option value="Mail">Mail</option>
                          <option value="Llamada">Llamada</option>
                          <option value="WhatsApp">WhatsApp</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className={`w-full md:w-auto px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                        isSubmitting
                          ? 'bg-gray-400 cursor-not-allowed text-white'
                          : 'bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl'
                      }`}
                    >
                      {isSubmitting ? 'Enviando...' : 'Solicitar Cotización'}
                    </motion.button>
                  </div>

                  {/* Success Message */}
                  {submitMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-4 bg-primary/10 rounded-lg text-primary text-center font-medium"
                    >
                      {submitMessage}
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
