import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, ...formData } = body

    // TODO: Integrate with Resend or your email service
    // For now, we'll just log the submission
    console.log('Form submission received:', { type, formData })

    // Example Resend integration (uncomment when you have an API key):
    /*
    const { Resend } = require('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    let emailContent = ''
    let subject = ''

    switch (type) {
      case 'gastos-medicos':
        subject = 'Nueva Solicitud - Seguro de Gastos Médicos'
        emailContent = `
          <h2>Nueva Solicitud de Seguro de Gastos Médicos</h2>
          <p><strong>Nombre:</strong> ${formData.nombre}</p>
          <p><strong>Teléfono:</strong> ${formData.telefono}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Tipo de Seguro:</strong> ${formData.tipoSeguro}</p>
          <p><strong>Plan:</strong> ${formData.plan}</p>
          <p><strong>Cobertura:</strong> ${formData.cobertura}</p>
          <p><strong>Fecha de Nacimiento:</strong> ${formData.fechaNacimiento}</p>
          <p><strong>Código Postal:</strong> ${formData.codigoPostal}</p>
          <p><strong>Enfermedades:</strong> ${formData.enfermedad || 'Ninguna'}</p>
          <p><strong>Contacto Preferente:</strong> ${formData.contactoPreferente}</p>
          <p><strong>Horario:</strong> ${formData.horario}</p>
          <p><strong>Medio:</strong> ${formData.medio}</p>
        `
        break

      case 'mascotas':
        subject = 'Nueva Solicitud - Seguro de Mascotas'
        emailContent = `
          <h2>Nueva Solicitud de Seguro de Mascotas</h2>
          <p><strong>Nombre:</strong> ${formData.nombre}</p>
          <p><strong>Teléfono:</strong> ${formData.telefono}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
        `
        break

      case 'autos':
        subject = 'Nueva Solicitud - Seguro de Autos'
        emailContent = `
          <h2>Nueva Solicitud de Seguro de Autos</h2>
          <p><strong>Nombre:</strong> ${formData.nombre}</p>
          <p><strong>Teléfono:</strong> ${formData.telefono}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Tipo de Seguro:</strong> ${formData.tipoSeguro}</p>
          <p><strong>Marca:</strong> ${formData.marca}</p>
          <p><strong>Modelo:</strong> ${formData.modelo}</p>
          <p><strong>Descripción:</strong> ${formData.descripcion}</p>
          <p><strong>Versión:</strong> ${formData.version}</p>
          <p><strong>Transmisión:</strong> ${formData.transmision}</p>
          <p><strong>Adicionales:</strong> ${formData.adicionales || 'Ninguno'}</p>
          <p><strong>Cobertura:</strong> ${formData.cobertura}</p>
          <p><strong>Forma de Pago:</strong> ${formData.formaPago}</p>
          <p><strong>Comentarios:</strong> ${formData.comentarios || 'Ninguno'}</p>
        `
        break

      case 'planes-ahorro':
        subject = 'Nueva Solicitud - Planes de Ahorro'
        emailContent = `
          <h2>Nueva Solicitud de Planes de Ahorro</h2>
          <p><strong>Nombre:</strong> ${formData.nombre}</p>
          <p><strong>Edad:</strong> ${formData.edad}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Teléfono:</strong> ${formData.telefono}</p>
          <p><strong>Fumador:</strong> ${formData.fumador}</p>
          <p><strong>Meta de Ahorro:</strong> ${formData.metaAhorro}</p>
          <p><strong>Ahorro Mensual:</strong> ${formData.ahorroMensual}</p>
          <p><strong>Rendimiento:</strong> ${formData.rendimiento}</p>
          <p><strong>Inversión:</strong> ${formData.inversion}</p>
          <p><strong>Mensaje:</strong> ${formData.mensaje || 'Ninguno'}</p>
        `
        break
    }

    await resend.emails.send({
      from: 'Erika Echevarri Website <onboarding@resend.dev>',
      to: 'erika@example.com', // Replace with actual email
      subject: subject,
      html: emailContent,
    })
    */

    // TODO: Optional - Save to Supabase database
    /*
    const { createClient } = require('@supabase/supabase-js')
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    )

    await supabase
      .from('form_submissions')
      .insert([
        {
          type,
          data: formData,
          created_at: new Date().toISOString(),
        },
      ])
    */

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing form submission:', error)
    return NextResponse.json(
      { message: 'Error processing submission' },
      { status: 500 }
    )
  }
}
