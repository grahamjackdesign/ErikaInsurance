'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { motion } from 'framer-motion'

const planesAhorroSchema = z.object({
  nombre: z.string().min(2, 'Nombre requerido'),
  edad: z.string().min(1, 'Edad requerida'),
  email: z.string().email('Email inválido'),
  telefono: z.string().min(10, 'Teléfono requerido'),
  fumador: z.string().min(1, 'Campo requerido'),
  metaAhorro: z.string().min(1, 'Meta de ahorro requerida'),
  ahorroMensual: z.string().min(1, 'Ahorro mensual requerido'),
  rendimiento: z.string().min(1, 'Rendimiento requerido'),
  inversion: z.string().min(1, 'Inversión requerida'),
  mensaje: z.string().optional(),
})

type PlanesAhorroFormData = z.infer<typeof planesAhorroSchema>

export default function PlanesAhorroForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PlanesAhorroFormData>({
    resolver: zodResolver(planesAhorroSchema),
  })

  const onSubmit = async (data: PlanesAhorroFormData) => {
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'planes-ahorro', ...data }),
      })

      if (response.ok) {
        setSubmitMessage({ type: 'success', text: '¡Mensaje enviado! Te contactaremos pronto.' })
        reset()
      } else {
        setSubmitMessage({ type: 'error', text: 'Error al enviar. Intenta de nuevo.' })
      }
    } catch (error) {
      setSubmitMessage({ type: 'error', text: 'Error de conexión. Intenta de nuevo.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gradient-to-br from-primary-light/30 to-primary/20 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl max-w-4xl mx-auto"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Row 1: Nombre y Email */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-primary mb-2">NOMBRE</label>
            <input
              type="text"
              {...register('nombre')}
              className="input-field"
              placeholder="Nombre completo"
            />
            {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-2">E-MAIL</label>
            <input
              type="email"
              {...register('email')}
              className="input-field"
              placeholder="correo@ejemplo.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
        </div>

        {/* Row 2: Edad y Teléfono */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-primary mb-2">EDAD</label>
            <input
              type="number"
              {...register('edad')}
              className="input-field"
              placeholder="Edad"
            />
            {errors.edad && <p className="text-red-500 text-xs mt-1">{errors.edad.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-2">TELÉFONO</label>
            <input
              type="tel"
              {...register('telefono')}
              className="input-field"
              placeholder="10 dígitos"
            />
            {errors.telefono && <p className="text-red-500 text-xs mt-1">{errors.telefono.message}</p>}
          </div>
        </div>

        {/* Row 3: Fumador y Meta de Ahorro */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-primary mb-2">FUMADOR</label>
            <select {...register('fumador')} className="input-field">
              <option value="">Selecciona</option>
              <option value="si">Sí</option>
              <option value="no">No</option>
            </select>
            {errors.fumador && <p className="text-red-500 text-xs mt-1">{errors.fumador.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-2">META DE AHORRO</label>
            <input
              type="text"
              {...register('metaAhorro')}
              className="input-field"
              placeholder="Ej: $500,000 MXN"
            />
            {errors.metaAhorro && <p className="text-red-500 text-xs mt-1">{errors.metaAhorro.message}</p>}
          </div>
        </div>

        {/* Row 4: Ahorro Mensual y Rendimiento */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-primary mb-2">AHORRO MENSUAL</label>
            <input
              type="text"
              {...register('ahorroMensual')}
              className="input-field"
              placeholder="Ej: $5,000 MXN"
            />
            {errors.ahorroMensual && <p className="text-red-500 text-xs mt-1">{errors.ahorroMensual.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-2">RENDIMIENTO</label>
            <select {...register('rendimiento')} className="input-field">
              <option value="">Selecciona</option>
              <option value="conservador">Conservador</option>
              <option value="moderado">Moderado</option>
              <option value="agresivo">Agresivo</option>
            </select>
            {errors.rendimiento && <p className="text-red-500 text-xs mt-1">{errors.rendimiento.message}</p>}
          </div>
        </div>

        {/* Row 5: Inversión (Full Width) */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">INVERSIÓN</label>
          <select {...register('inversion')} className="input-field">
            <option value="">Selecciona tipo de inversión</option>
            <option value="retiro">Plan de Retiro</option>
            <option value="universidad">Ahorro Universidad</option>
            <option value="mixto">Mixto</option>
          </select>
          {errors.inversion && <p className="text-red-500 text-xs mt-1">{errors.inversion.message}</p>}
        </div>

        {/* Row 6: Mensaje (Full Width) */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">MENSAJE</label>
          <textarea
            {...register('mensaje')}
            className="input-field min-h-[120px]"
            placeholder="Cuéntanos más sobre tus objetivos financieros..."
          />
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-primary text-white font-bold py-4 rounded-full hover:bg-primary-dark transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </motion.button>

        {/* Success/Error Message */}
        {submitMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg text-center ${
              submitMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}
          >
            {submitMessage.text}
          </motion.div>
        )}
      </form>
    </motion.div>
  )
}
