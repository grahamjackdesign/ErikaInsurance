import type { Metadata } from 'next'
import { Roboto, Poppins } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Erika Echavarri - Asesor Patrimonial y Financiero',
  description: 'Especialista en Planificación Patrimonial y Financiero. Protege tu salud y patrimonio con seguros de gastos médicos, autos, mascotas, planes de retiro y ahorro.',
  keywords: 'seguros, gastos médicos, seguro de autos, seguro de mascotas, planes de retiro, ahorro, inversiones, México',
  openGraph: {
    title: 'Erika Echavarri - Asesor Patrimonial y Financiero',
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${roboto.className} ${poppins.variable}`}>{children}</body>
    </html>
  )
}
