'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { motion } from 'framer-motion'

const autosSchema = z.object({
  nombre: z.string().min(2, 'Nombre requerido'),
  telefono: z.string().min(10, 'Teléfono requerido'),
  email: z.string().email('Email inválido'),
  codigoPostal: z.string().min(4, 'Código postal requerido'),
  tipoSeguro: z.string().min(1, 'Tipo de seguro requerido'),
  fechaNacimiento: z.string().min(1, 'Fecha requerida'),
  marca: z.string().min(1, 'Marca requerida'),
  modelo: z.string().min(1, 'Modelo requerido'),
  descripcion: z.string().min(1, 'Descripción requerida'),
  version: z.string().min(1, 'Versión requerida'),
  transmision: z.string().min(1, 'Transmisión requerida'),
  adicionales: z.string().optional(),
  comoCotizar: z.string().min(1, 'Selecciona una opción'),
  formaPago: z.string().min(1, 'Forma de pago requerida'),
  cobertura: z.string().min(1, 'Cobertura requerida'),
  comentarios: z.string().optional(),
})

type AutosFormData = z.infer<typeof autosSchema>

export default function AutosForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AutosFormData>({
    resolver: zodResolver(autosSchema),
  })

  const onSubmit = async (data: AutosFormData) => {
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'autos', ...data }),
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
        {/* Row 1: Nombre y Teléfono */}
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

        {/* Row 2: Email y Código Postal */}
        <div className="grid md:grid-cols-2 gap-4">
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

        {/* Row 3: Tipo de Seguro y Fecha de Nacimiento */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-primary mb-2">TIPO DE SEGURO</label>
            <select {...register('tipoSeguro')} className="input-field">
              <option value="">Selecciona</option>
              <option value="amplia">Cobertura Amplia</option>
              <option value="limitada">Cobertura Limitada</option>
              <option value="rc">Responsabilidad Civil</option>
            </select>
            {errors.tipoSeguro && <p className="text-red-500 text-xs mt-1">{errors.tipoSeguro.message}</p>}
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

        {/* Vehicle Description Section */}
        <div className="mt-6 pt-4 border-t-2 border-primary/20">
          <h4 className="text-lg font-bold text-primary mb-4">DESCRIPCIÓN DEL VEHÍCULO:</h4>

          {/* Row 4: Marca y Modelo */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-primary mb-2">MARCA</label>
              <input
                type="text"
                {...register('marca')}
                className="input-field"
                placeholder="Ej: Toyota"
              />
              {errors.marca && <p className="text-red-500 text-xs mt-1">{errors.marca.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-2">MODELO</label>
              <input
                type="text"
                {...register('modelo')}
                className="input-field"
                placeholder="Ej: 2024"
              />
              {errors.modelo && <p className="text-red-500 text-xs mt-1">{errors.modelo.message}</p>}
            </div>
          </div>

          {/* Row 5: Descripción y Versión */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-primary mb-2">DESCRIPCIÓN</label>
              <input
                type="text"
                {...register('descripcion')}
                className="input-field"
                placeholder="Ej: Corolla"
              />
              {errors.descripcion && <p className="text-red-500 text-xs mt-1">{errors.descripcion.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-2">VERSIÓN</label>
              <input
                type="text"
                {...register('version')}
                className="input-field"
                placeholder="Ej: LE"
              />
              {errors.version && <p className="text-red-500 text-xs mt-1">{errors.version.message}</p>}
            </div>
          </div>

          {/* Row 6: Transmisión y Adicionales */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-primary mb-2">TRANSMISIÓN</label>
              <select {...register('transmision')} className="input-field">
                <option value="">Selecciona</option>
                <option value="manual">Manual</option>
                <option value="automatica">Automática</option>
              </select>
              {errors.transmision && <p className="text-red-500 text-xs mt-1">{errors.transmision.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-2">ADICIONALES</label>
              <input
                type="text"
                {...register('adicionales')}
                className="input-field"
                placeholder="Extras del vehículo"
              />
            </div>
          </div>
        </div>

        {/* Quote Options Section */}
        <div className="mt-6 pt-4 border-t-2 border-primary/20">
          <h4 className="text-lg font-bold text-primary mb-4">¿CÓMO DESEA QUE COTICEMOS?</h4>

          {/* Row 7: Forma de Pago y Cobertura */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-primary mb-2">FORMA DE PAGO</label>
              <select {...register('formaPago')} className="input-field">
                <option value="">Selecciona</option>
                <option value="contado">Contado</option>
                <option value="mensual">Mensual</option>
                <option value="trimestral">Trimestral</option>
                <option value="semestral">Semestral</option>
                <option value="anual">Anual</option>
              </select>
              {errors.formaPago && <p className="text-red-500 text-xs mt-1">{errors.formaPago.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-2">COBERTURA</label>
              <select {...register('cobertura')} className="input-field">
                <option value="">Selecciona</option>
                <option value="amplia">Amplia</option>
                <option value="limitada">Limitada</option>
                <option value="rc">Responsabilidad Civil</option>
              </select>
              {errors.cobertura && <p className="text-red-500 text-xs mt-1">{errors.cobertura.message}</p>}
            </div>
          </div>

          {/* Row 8: Como Cotizar (Full Width) */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-primary mb-2">MÉTODO DE COTIZACIÓN</label>
            <select {...register('comoCotizar')} className="input-field">
              <option value="">Selecciona</option>
              <option value="menor">Menor precio</option>
              <option value="mejor">Mejor cobertura</option>
              <option value="equilibrado">Equilibrado</option>
            </select>
            {errors.comoCotizar && <p className="text-red-500 text-xs mt-1">{errors.comoCotizar.message}</p>}
          </div>
        </div>

        {/* Row 9: Comentarios (Full Width) */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">COMENTARIOS</label>
          <textarea
            {...register('comentarios')}
            className="input-field min-h-[100px]"
            placeholder="Información adicional..."
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
