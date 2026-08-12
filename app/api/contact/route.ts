import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
console.log('🔑 API Key exists?', !!process.env.RESEND_API_KEY)

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, ...formData } = body

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
          <p><strong>Plan:</strong> ${formData.plan}</p>
          <p><strong>Cobertura:</strong> ${formData.cobertura}</p>
          <p><strong>Fecha de Nacimiento:</strong> ${formData.fechaNacimiento}</p>
          <p><strong>Código Postal:</strong> ${formData.codigoPostal}</p>
          <p><strong>Enfermedades:</strong> ${formData.enfermedad || 'Ninguna'}</p>
          <p><strong>Horario de Contacto:</strong> ${formData.horario}</p>
          <p><strong>Medio de Contacto:</strong> ${formData.medio}</p>
        `
        break

      case 'mascotas':
        subject = 'Nueva Solicitud - Seguro de Mascotas'
        emailContent = `
          <h2>Nueva Solicitud de Seguro de Mascotas</h2>
          <p><strong>Teléfono:</strong> ${formData.telefono}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
        `
        break

      case 'autos':
        subject = 'Nueva Solicitud - Seguro de Autos'
        emailContent = `
          <h2>Nueva Solicitud de Seguro de Autos</h2>
          <h3>Información Personal</h3>
          <p><strong>Nombre:</strong> ${formData.nombre}</p>
          <p><strong>Teléfono:</strong> ${formData.telefono}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Código Postal:</strong> ${formData.codigoPostal}</p>
          <p><strong>Tipo de Seguro:</strong> ${formData.tipoSeguro}</p>
          <p><strong>Fecha de Nacimiento:</strong> ${formData.fechaNacimiento}</p>
          
          <h3>Información del Vehículo</h3>
          <p><strong>Marca:</strong> ${formData.marca}</p>
          <p><strong>Modelo:</strong> ${formData.modelo}</p>
          <p><strong>Descripción:</strong> ${formData.descripcion}</p>
          <p><strong>Versión:</strong> ${formData.version}</p>
          <p><strong>Transmisión:</strong> ${formData.transmision}</p>
          <p><strong>Adicionales:</strong> ${formData.adicionales || 'Ninguno'}</p>
          
          <h3>Preferencias de Cotización</h3>
          <p><strong>Forma de Pago:</strong> ${formData.formaPago}</p>
          <p><strong>Cobertura:</strong> ${formData.cobertura}</p>
          <p><strong>Comentarios:</strong> ${formData.comentarios || 'Ninguno'}</p>
        `
        break

      case 'planes-retiro':
        subject = 'Nueva Solicitud - Plan de Retiro'
        emailContent = `
          <h2>Nueva Solicitud de Plan de Retiro</h2>
          <p><strong>Nombre:</strong> ${formData.nombre}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Teléfono:</strong> ${formData.telefono}</p>
          <p><strong>Edad:</strong> ${formData.edad}</p>
          <p><strong>Fumador:</strong> ${formData.fumador}</p>
          <p><strong>Meta de Ahorro:</strong> ${formData.metaAhorro}</p>
          <p><strong>Ahorro Mensual:</strong> ${formData.ahorroMensual}</p>
          <p><strong>Rendimiento:</strong> ${formData.rendimiento}</p>
          <p><strong>Inversión:</strong> ${formData.inversion}</p>
          <p><strong>Mensaje:</strong> ${formData.mensaje || 'Ninguno'}</p>
        `
        break

      case 'planes-universidad':
        subject = 'Nueva Solicitud - Plan Universitario'
        emailContent = `
          <h2>Nueva Solicitud de Plan Universitario</h2>
          <p><strong>Nombre:</strong> ${formData.nombre}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Teléfono:</strong> ${formData.telefono}</p>
          <p><strong>Edad:</strong> ${formData.edad}</p>
          <p><strong>Fumador:</strong> ${formData.fumador}</p>
          <p><strong>Meta de Ahorro:</strong> ${formData.metaAhorro}</p>
          <p><strong>Ahorro Mensual:</strong> ${formData.ahorroMensual}</p>
          <p><strong>Rendimiento:</strong> ${formData.rendimiento}</p>
          <p><strong>Inversión:</strong> ${formData.inversion}</p>
          <p><strong>Mensaje:</strong> ${formData.mensaje || 'Ninguno'}</p>
        `
        break

      case 'contacto':
        subject = 'Nuevo Mensaje de Contacto'
        emailContent = `
          <h2>Nuevo Mensaje desde el Formulario de Contacto</h2>
          <p><strong>Nombre:</strong> ${formData.nombre}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Teléfono:</strong> ${formData.telefono}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${formData.mensaje}</p>
        `
        break

      default:
        return NextResponse.json(
          { message: 'Tipo de formulario no válido' },
          { status: 400 }
        )
    }

    // Send email using Resend
    await resend.emails.send({
      from: 'ErikaEchavarri.com <notificaciones@erikaechavarri.com>',
      to: 'erika.olivos.sm@gmail.com',
      subject: subject,
      html: emailContent,
    })

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
