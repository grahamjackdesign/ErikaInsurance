import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Política de Privacidad - Erika Echavarri',
  description: 'Política de privacidad y protección de datos personales de Erika Echavarri - Asesor Patrimonial y Financiero',
}

export default function PoliticaPrivacidad() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-primary mb-8">Política de Privacidad</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">Última actualización: {new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary mt-8">1. Introducción</h2>
              <p>
                Erika Echavarri se compromete a proteger su privacidad y sus datos personales. Esta política de 
                privacidad explica cómo recopilamos, usamos, compartimos y protegemos su información personal 
                de acuerdo con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary mt-8">2. Datos que Recopilamos</h2>
              <p>Podemos recopilar los siguientes tipos de información personal:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Nombre completo</li>
                <li>Correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Edad y fecha de nacimiento</li>
                <li>Código postal</li>
                <li>Información sobre vehículos (para seguros de autos)</li>
                <li>Información sobre mascotas (para seguros de mascotas)</li>
                <li>Información financiera necesaria para cotizaciones</li>
                <li>Cualquier otra información que nos proporcione voluntariamente</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary mt-8">3. Cómo Utilizamos sus Datos</h2>
              <p>Utilizamos su información personal para:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Proporcionar servicios de asesoría financiera y patrimonial</li>
                <li>Procesar solicitudes de cotizaciones de seguros</li>
                <li>Comunicarnos con usted sobre nuestros servicios</li>
                <li>Enviar información sobre productos que puedan ser de su interés</li>
                <li>Cumplir con obligaciones legales y regulatorias</li>
                <li>Mejorar nuestros servicios y experiencia del usuario</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary mt-8">4. Compartir Información</h2>
              <p>
                Podemos compartir su información personal con:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Compañías aseguradoras para procesar cotizaciones y pólizas</li>
                <li>Proveedores de servicios que nos ayudan a operar nuestro negocio</li>
                <li>Autoridades gubernamentales cuando sea requerido por ley</li>
              </ul>
              <p>
                No vendemos ni alquilamos su información personal a terceros para fines de marketing.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary mt-8">5. Seguridad de los Datos</h2>
              <p>
                Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger su información 
                personal contra acceso no autorizado, pérdida, alteración o destrucción.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary mt-8">6. Sus Derechos (Derechos ARCO)</h2>
              <p>
                De acuerdo con la ley mexicana, usted tiene derecho a:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Acceder</strong> a sus datos personales en nuestra posesión</li>
                <li><strong>Rectificar</strong> datos inexactos o incompletos</li>
                <li><strong>Cancelar</strong> sus datos cuando considere que no están siendo utilizados adecuadamente</li>
                <li><strong>Oponerse</strong> al tratamiento de sus datos para fines específicos</li>
              </ul>
              <p>
                Para ejercer estos derechos, puede contactarnos a través de los medios indicados en la sección de contacto.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary mt-8">7. Cookies y Tecnologías Similares</h2>
              <p>
                Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar su experiencia de 
                navegación. Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la 
                funcionalidad del sitio.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary mt-8">8. Retención de Datos</h2>
              <p>
                Conservamos su información personal durante el tiempo necesario para cumplir con los fines para 
                los cuales fue recopilada y según lo requiera la ley aplicable.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary mt-8">9. Cambios a esta Política</h2>
              <p>
                Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Los 
                cambios serán efectivos inmediatamente después de su publicación en este sitio web.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary mt-8">10. Contacto</h2>
              <p>
                Si tiene preguntas sobre esta política de privacidad o desea ejercer sus derechos ARCO, 
                puede contactarnos a través de:
              </p>
              <ul className="list-none space-y-2 ml-4">
                <li><strong>Email:</strong> contacto@erikaechavarri.com</li>
                <li><strong>Teléfono:</strong> +52 123 456 7890</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary mt-8">11. Consentimiento</h2>
              <p>
                Al utilizar nuestro sitio web y proporcionar su información personal, usted acepta los términos 
                de esta política de privacidad y consiente el tratamiento de sus datos personales según lo descrito.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
