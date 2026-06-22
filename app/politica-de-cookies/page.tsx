import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata = {
  title: 'Política de Cookies | Mexico Rugby',
  description: 'Información sobre el uso de cookies en el portal Mexico Rugby.',
}

const cookieTypes = [
  {
    type: 'Cookies técnicas',
    required: true,
    desc: 'Imprescindibles para el correcto funcionamiento del sitio. Permiten navegar por el portal y utilizar sus funciones básicas como guardar tus preferencias de cookies. No pueden desactivarse.',
  },
  {
    type: 'Cookies analíticas',
    required: false,
    desc: 'Nos permiten conocer el número de visitantes y las páginas más vistas. Esta información se usa de forma agregada y anónima para mejorar el contenido del portal. Solo se activan con tu consentimiento.',
  },
  {
    type: 'Cookies de preferencias',
    required: false,
    desc: 'Guardan tus elecciones (como el idioma o la región) para ofrecer una experiencia más personalizada. Solo se activan con tu consentimiento.',
  },
]

export default function CookiesPage() {
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
              Política de cookies
            </h1>
            <p className="font-sans text-sm text-background/40 mt-4 uppercase tracking-widest font-heading">
              Última actualización: junio 2026
            </p>
          </div>
        </div>

        <div className="bg-background py-20 px-6">
          <div className="max-w-3xl mx-auto flex flex-col gap-12">
            {/* What are cookies */}
            <div className="flex flex-col gap-4">
              <h2 className="font-heading font-extrabold text-xl uppercase tracking-wide">
                ¿Qué son las cookies?
              </h2>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                Las cookies son pequeños archivos de texto que los sitios web depositan en el dispositivo del usuario cuando los visita. Sirven para recordar información sobre la visita, facilitar la navegación y, en algunos casos, proporcionar información estadística sobre el uso del sitio.
              </p>
            </div>

            {/* Types table */}
            <div>
              <h2 className="font-heading font-extrabold text-xl uppercase tracking-wide mb-8">
                Tipos de cookies que utilizamos
              </h2>
              <div className="flex flex-col gap-px bg-border">
                {cookieTypes.map((ct) => (
                  <div key={ct.type} className="bg-background p-6 flex flex-col gap-3">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-heading font-extrabold text-base uppercase tracking-wide">
                        {ct.type}
                      </h3>
                      <span
                        className={`font-heading font-bold text-xs tracking-widest uppercase px-3 py-1 shrink-0 ${
                          ct.required
                            ? 'bg-primary text-primary-foreground'
                            : 'border border-border text-muted-foreground'
                        }`}
                      >
                        {ct.required ? 'Necesarias' : 'Opcionales'}
                      </span>
                    </div>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      {ct.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* How to manage */}
            <div className="flex flex-col gap-4">
              <h2 className="font-heading font-extrabold text-xl uppercase tracking-wide">
                Gestión y retirada del consentimiento
              </h2>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                Puedes aceptar o rechazar las cookies opcionales a través del banner de cookies que aparece la primera vez que visitas el portal. Si deseas modificar tu elección en cualquier momento, borra las cookies de tu navegador y vuelve a visitar el sitio: el banner aparecerá de nuevo.
              </p>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                La mayoría de los navegadores permiten también gestionar las cookies directamente desde su configuración. Consulta la ayuda de tu navegador para más información sobre cómo bloquear, eliminar o permitir cookies de sitios concretos.
              </p>
            </div>

            {/* Consent validity */}
            <div className="flex flex-col gap-4 py-8 border-t border-border">
              <h2 className="font-heading font-extrabold text-xl uppercase tracking-wide">
                Validez del consentimiento
              </h2>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                Tu elección sobre las cookies opcionales se almacena en tu dispositivo durante 12 meses. Transcurrido ese periodo, te pediremos de nuevo tu consentimiento. Si borramos o actualizamos esta política de forma significativa, también solicitaremos un nuevo consentimiento.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/politica-de-privacidad"
                className="inline-flex items-center gap-2 font-heading font-bold text-sm uppercase tracking-widest text-primary border-b-2 border-primary pb-1 hover:text-accent hover:border-accent transition-colors"
              >
                Ver también: Política de Privacidad
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
