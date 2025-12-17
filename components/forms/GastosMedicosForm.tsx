'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { motion } from 'framer-motion'

const gastosMedicosSchema = z.object({
  nombre: z.string().min(2, 'Nombre requerido'),
  telefono: z.string().min(10, 'Teléfono requerido'),
  email: z.string().email('Email inválido'),
  codigoPostal: z.string().min(4, 'Código postal requerido'),
  tipoSeguro: z.string().min(1, 'Tipo de seguro requerido'),
  plan: z.string().min(1, 'Plan requerido'),
  cobertura: z.string().min(1, 'Cobertura requerida'),
  fechaNacimiento: z.string().min(1, 'Fecha requerida'),
  enfermedad: z.string().optional(),
  contactoPreferente: z.string().min(1, 'Contacto preferente requerido'),
  horario: z.string().min(1, 'Horario requerido'),
  medio: z.string().min(1, 'Medio requerido'),
})

type GastosMedicosFormData = z.infer<typeof gastosMedicosSchema>

export default function GastosMedicosForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<GastosMedicosFormData>({
    resolver: zodResolver(gastosMedicosSchema),
  })

  const onSubmit = async (data: GastosMedicosFormData) => {
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'gastos-medicos', ...data }),
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

        {/* Row 2: Tipo de Seguro y Plan */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-primary mb-2">TIPO DE SEGURO</label>
            <input
              type="text"
              {...register('tipoSeguro')}
              className="input-field"
              placeholder="Gastos Médicos Mayores"
            />
            {errors.tipoSeguro && <p className="text-red-500 text-xs mt-1">{errors.tipoSeguro.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-2">PLAN</label>
            <select {...register('plan')} className="input-field">
              <option value="">Selecciona un plan</option>
              <option value="basico">Básico</option>
              <option value="intermedio">Intermedio</option>
              <option value="premium">Premium</option>
            </select>
            {errors.plan && <p className="text-red-500 text-xs mt-1">{errors.plan.message}</p>}
          </div>
        </div>

        {/* Row 3: Nombre y Fecha de Nacimiento */}
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
            <label className="block text-sm font-medium text-primary mb-2">FECHA DE NACIMIENTO</label>
            <input
              type="date"
              {...register('fechaNacimiento')}
              className="input-field"
            />
            {errors.fechaNacimiento && <p className="text-red-500 text-xs mt-1">{errors.fechaNacimiento.message}</p>}
          </div>
        </div>

        {/* Row 4: Cobertura y Código Postal */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-primary mb-2">COBERTURA</label>
            <select {...register('cobertura')} className="input-field">
              <option value="">Selecciona cobertura</option>
              <option value="nacional">Nacional</option>
              <option value="internacional">Internacional</option>
            </select>
            {errors.cobertura && <p className="text-red-500 text-xs mt-1">{errors.cobertura.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-2">CÓDIGO POSTAL</label>
            <input
              type="text"
              {...register('codigoPostal')}
              className="input-field"
              placeholder="00000"
            />
            {errors.codigoPostal && <p className="text-red-500 text-xs mt-1">{errors.codigoPostal.message}</p>}
          </div>
        </div>

        {/* Row 5: Enfermedad (Full width) */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">¿PADECE ALGUNA ENFERMEDAD?</label>
          <textarea
            {...register('enfermedad')}
            className="input-field min-h-[80px]"
            placeholder="Describe aquí si padeces alguna enfermedad..."
          />
        </div>

        {/* Row 6: Contacto Preferente y Horario */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-primary mb-2">CONTACTO PREFERENTE</label>
            <select {...register('contactoPreferente')} className="input-field">
              <option value="">Selecciona</option>
              <option value="telefono">Teléfono</option>
              <option value="email">Email</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
            {errors.contactoPreferente && <p className="text-red-500 text-xs mt-1">{errors.contactoPreferente.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-2">HORARIO</label>
            <select {...register('horario')} className="input-field">
              <option value="">Selecciona horario</option>
              <option value="manana">Mañana (9am-1pm)</option>
              <option value="tarde">Tarde (1pm-6pm)</option>
              <option value="cualquiera">Cualquier hora</option>
            </select>
            {errors.horario && <p className="text-red-500 text-xs mt-1">{errors.horario.message}</p>}
          </div>
        </div>

        {/* Row 7: Medio (Full width) */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">MEDIO</label>
          <input
            type="text"
            {...register('medio')}
            className="input-field"
            placeholder="¿Cómo te enteraste de nosotros?"
          />
          {errors.medio && <p className="text-red-500 text-xs mt-1">{errors.medio.message}</p>}
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
