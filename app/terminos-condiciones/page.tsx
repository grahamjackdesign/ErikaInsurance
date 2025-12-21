import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Términos y Condiciones - Erika Echevarri',
  description: 'Términos y condiciones de uso del sitio web de Erika Echevarri - Asesor Patrimonial y Financiero',
}

export default function TerminosCondiciones() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-primary mb-8">Términos y Condiciones</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">Última actualización: {new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary mt-8">1. Aceptación de los Términos</h2>
              <p>
                Al acceder y utilizar este sitio web, usted acepta cumplir con estos términos y condiciones de uso. 
                Si no está de acuerdo con alguno de estos términos, no debe utilizar este sitio web.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary mt-8">2. Servicios Ofrecidos</h2>
              <p>
                Erika Echevarri ofrece servicios de asesoría patrimonial y financiera, incluyendo pero no limitándose a:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Seguros de gastos médicos mayores</li>
                <li>Seguros de autos</li>
                <li>Seguros de mascotas</li>
                <li>Planes de retiro</li>
                <li>Planes de ahorro para universidad</li>
              </ul>
              <p>
                Los servicios están sujetos a disponibilidad y pueden modificarse sin previo aviso.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary mt-8">3. Uso del Sitio Web</h2>
              <p>
                Este sitio web es proporcionado únicamente con fines informativos. Usted acepta utilizar este sitio 
                únicamente para propósitos legales y de manera que no infrinja los derechos de terceros.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary mt-8">4. Propiedad Intelectual</h2>
              <p>
                Todo el contenido de este sitio web, incluyendo textos, gráficos, logos, imágenes y software, 
                es propiedad de Erika Echevarri o sus proveedores de contenido y está protegido por las leyes 
                de propiedad intelectual de México.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary mt-8">5. Limitación de Responsabilidad</h2>
              <p>
                La información proporcionada en este sitio web es de carácter general y no constituye asesoramiento 
                financiero personalizado. Erika Echevarri no se hace responsable por decisiones tomadas basándose 
                únicamente en la información de este sitio web.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary mt-8">6. Enlaces a Terceros</h2>
              <p>
                Este sitio web puede contener enlaces a sitios web de terceros. Erika Echevarri no es responsable 
                del contenido de dichos sitios web externos.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary mt-8">7. Modificaciones</h2>
              <p>
                Erika Echevarri se reserva el derecho de modificar estos términos y condiciones en cualquier momento. 
                Los cambios serán efectivos inmediatamente después de su publicación en el sitio web.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary mt-8">8. Ley Aplicable</h2>
              <p>
                Estos términos y condiciones se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier 
                disputa será resuelta en los tribunales competentes de México.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary mt-8">9. Contacto</h2>
              <p>
                Si tiene alguna pregunta sobre estos términos y condiciones, puede contactarnos a través de:
              </p>
              <ul className="list-none space-y-2 ml-4">
                <li><strong>Email:</strong> contacto@erikaechevarri.com</li>
                <li><strong>Teléfono:</strong> +52 123 456 7890</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
