'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { motion } from 'framer-motion'

const mascotasSchema = z.object({
  nombre: z.string().min(2, 'Nombre requerido'),
  telefono: z.string().min(10, 'Teléfono requerido'),
  email: z.string().email('Email inválido'),
})

type MascotasFormData = z.infer<typeof mascotasSchema>

export default function MascotasForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MascotasFormData>({
    resolver: zodResolver(mascotasSchema),
  })

  const onSubmit = async (data: MascotasFormData) => {
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'mascotas', ...data }),
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
      className="bg-gradient-to-br from-primary-light/30 to-primary/20 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl"
    >
      <h3 className="text-2xl font-bold text-primary mb-6 text-center">NOSOTROS TE CONTACTAMOS</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Row 1: Teléfono y Email */}
        <div className="grid md:grid-cols-2 gap-4">
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

        {/* Row 2: Nombre (Full Width) */}
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
