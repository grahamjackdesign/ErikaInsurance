import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Erika Echevarri - Asesor Patrimonial y Financiero',
  description: 'Especialista en Planificación Patrimonial y Financiero. Protege tu salud y patrimonio con seguros de gastos médicos, autos, mascotas, planes de retiro y ahorro.',
  keywords: 'seguros, gastos médicos, seguro de autos, seguro de mascotas, planes de retiro, ahorro, inversiones, México',
  openGraph: {
    title: 'Erika Echevarri - Asesor Patrimonial y Financiero',
    description: 'Especialista en Planificación Patrimonial y Financiero',
    type: 'website',
    locale: 'es_MX',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
