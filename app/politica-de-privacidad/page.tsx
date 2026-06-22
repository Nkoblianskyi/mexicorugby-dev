import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata = {
  title: 'Política de Privacidad | Mexico Rugby',
  description: 'Política de privacidad y tratamiento de datos personales de Mexico Rugby.',
}

const sections = [
  {
    title: '1. Responsable del tratamiento',
    body: 'Mexico Rugby (en adelante, "el portal") actúa como responsable del tratamiento de los datos personales que los usuarios faciliten a través de este sitio web. Puedes contactarnos en info@mexicorugby.com para cualquier consulta relativa a tus datos.',
  },
  {
    title: '2. Datos que recopilamos',
    body: 'El portal recopila únicamente los datos que el usuario facilita de forma voluntaria al utilizar el formulario de contacto (nombre y correo electrónico). No se recopilan datos automáticamente de identificación personal, salvo los datos técnicos de navegación descritos en la Política de Cookies.',
  },
  {
    title: '3. Finalidad del tratamiento',
    body: 'Los datos personales facilitados se utilizan exclusivamente para responder a las consultas enviadas por el usuario. No se utilizan con fines comerciales, publicitarios ni se ceden a terceros sin el consentimiento expreso del usuario.',
  },
  {
    title: '4. Base jurídica',
    body: 'El tratamiento de datos se basa en el consentimiento del usuario, que se expresa al completar y enviar el formulario de contacto. El usuario puede retirar su consentimiento en cualquier momento enviando un correo a info@mexicorugby.com.',
  },
  {
    title: '5. Conservación de datos',
    body: 'Los datos personales se conservan durante el tiempo necesario para atender la solicitud del usuario y, posteriormente, durante el período que establezca la normativa aplicable. Una vez concluida su finalidad, los datos serán eliminados de forma segura.',
  },
  {
    title: '6. Derechos del usuario',
    body: 'Tienes derecho a acceder, rectificar, suprimir, oponerte y limitar el tratamiento de tus datos personales. También tienes derecho a la portabilidad de tus datos. Para ejercer cualquiera de estos derechos, contacta con nosotros en info@mexicorugby.com, indicando el derecho que deseas ejercer y adjuntando una copia de tu documento de identidad.',
  },
  {
    title: '7. Seguridad',
    body: 'El portal adopta medidas técnicas y organizativas adecuadas para proteger los datos personales contra el acceso no autorizado, la pérdida accidental y la destrucción. Sin embargo, ninguna transmisión de datos por internet puede garantizarse como completamente segura.',
  },
  {
    title: '8. Modificaciones',
    body: 'El portal se reserva el derecho a modificar esta política de privacidad para adaptarla a novedades legislativas o cambios en las prácticas del portal. Se informará de los cambios relevantes a través del propio sitio web. La fecha de última actualización figura al final de esta página.',
  },
]

export default function PrivacidadPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <div className="bg-foreground text-background py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="font-heading font-semibold text-xs tracking-widest uppercase text-primary mb-4">
              Legal
            </p>
            <h1
              className="font-heading font-black italic leading-tight text-balance text-background"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              Política de privacidad
            </h1>
            <p className="font-sans text-sm text-background/40 mt-4 uppercase tracking-widest font-heading">
              Última actualización: junio 2026
            </p>
          </div>
        </div>

        <div className="bg-background py-20 px-6">
          <div className="max-w-3xl mx-auto flex flex-col gap-0">
            {sections.map((section, i) => (
              <div
                key={section.title}
                className="py-10 border-b border-border flex flex-col gap-4"
              >
                <div className="flex items-start gap-4">
                  <span className="font-heading font-black text-4xl text-primary/15 leading-none shrink-0 mt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-heading font-extrabold text-lg uppercase tracking-wide mt-2">
                    {section.title.replace(/^\d+\. /, '')}
                  </h2>
                </div>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed text-pretty">
                  {section.body}
                </p>
              </div>
            ))}

            <div className="pt-12">
              <Link
                href="/politica-de-cookies"
                className="inline-flex items-center gap-2 font-heading font-bold text-sm uppercase tracking-widest text-primary border-b-2 border-primary pb-1 hover:text-accent hover:border-accent transition-colors"
              >
                Ver también: Política de Cookies
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
