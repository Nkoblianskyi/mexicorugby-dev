import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata = {
  title: 'Nosotros | Mexico Rugby',
  description:
    'Conoce el proyecto detrás de Mexico Rugby, un portal dedicado al rugby nacional.',
}

const values = [
  {
    title: 'Pasión por el deporte',
    desc: 'Creemos que el rugby transforma personas. Cada pase, cada tackle y cada ensayo construyen carácter, respeto y colectividad.',
  },
  {
    title: 'Rigor informativo',
    desc: 'Todo el contenido publicado en este portal está elaborado con cuidado, consultando fuentes primarias, reglamentos oficiales y voces del rugby mexicano.',
  },
  {
    title: 'Accesibilidad',
    desc: 'Queremos que el rugby llegue a más personas. Por eso escribimos en español, explicamos el reglamento desde cero y publicamos técnicas para todos los niveles.',
  },
  {
    title: 'Identidad mexicana',
    desc: 'El rugby en México tiene su propia historia, sus propios héroes y su propia cultura. Nos enorgullece contarla.',
  },
]

const team = [
  {
    name: 'Carlos Mendoza',
    role: 'Director editorial',
    bio: 'Ex jugador de rugby de 15 con 12 años en el club Aztecas RFC. Periodista deportivo con especialización en deportes de contacto.',
  },
  {
    name: 'Valentina Cruz',
    role: 'Editora de contenido',
    bio: 'Graduada en comunicación por la UNAM. Jugadora activa del Seleccionado Femenil del DF. Especialista en narrativa deportiva.',
  },
  {
    name: 'Diego Ramírez',
    role: 'Analista táctico',
    bio: 'Entrenador certificado por World Rugby. Ha dirigido equipos en Primera División Nacional y actualmente colabora con la federación.',
  },
]

export default function NosotrosPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        {/* Header */}
        <div className="bg-foreground text-background py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="font-heading font-semibold text-xs tracking-widest uppercase text-primary mb-4">
              Nosotros
            </p>
            <h1
              className="font-heading font-black italic leading-tight text-balance text-background"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
            >
              El rugby{' '}
              <span style={{ WebkitTextStroke: '2px white', color: 'transparent' }}>mexicano</span>{' '}
              merece su voz
            </h1>
          </div>
        </div>

        {/* Mission */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-heading font-semibold text-xs tracking-widest uppercase text-accent mb-6">
                Nuestra misión
              </p>
              <h2
                className="font-heading font-black italic leading-tight text-balance mb-8"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                Construir la referencia del rugby en México
              </h2>
              <div className="flex flex-col gap-5 font-sans text-muted-foreground leading-relaxed text-pretty">
                <p>
                  Mexico Rugby nació de una necesidad simple: no había un lugar en español, con contenido de calidad y actualizado, que explicara el rugby desde la perspectiva mexicana. La mayoría de los portales existentes están en inglés o tratan el rugby de otras naciones sin mencionar nuestra historia.
                </p>
                <p>
                  Decidimos construirlo. Con artículos sobre técnica y táctica para jugadores activos, con secciones de historia para quienes quieren entender de dónde venimos, y con reglas explicadas de forma clara para quienes descubren el deporte por primera vez.
                </p>
                <p>
                  Este portal no es una entidad oficial, pero sí un proyecto serio, sostenido por personas que viven el rugby desde adentro y quieren compartir ese amor con México.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
              {values.map((v) => (
                <div key={v.title} className="bg-background p-8 flex flex-col gap-3">
                  <div className="w-8 h-1 bg-primary" aria-hidden="true" />
                  <h3 className="font-heading font-extrabold text-base uppercase tracking-wide">
                    {v.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 px-6 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <p className="font-heading font-semibold text-xs tracking-widest uppercase text-muted-foreground mb-12">
              Equipo editorial
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
              {team.map((member) => (
                <div key={member.name} className="bg-secondary p-8 flex flex-col gap-4">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center">
                    <span className="font-heading font-black text-xl text-primary-foreground uppercase">
                      {member.name[0]}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-lg uppercase tracking-wide">
                      {member.name}
                    </h3>
                    <p className="font-heading font-bold text-xs tracking-widest uppercase text-accent mt-1">
                      {member.role}
                    </p>
                  </div>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 px-6 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2
                className="font-heading font-black italic leading-tight text-balance"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                ¿Tienes algo que decirnos?
              </h2>
              <p className="font-sans text-primary-foreground/70 mt-3 max-w-md">
                Dudas, colaboraciones, correcciones o simplemente contarnos tu historia con el rugby. Escríbenos.
              </p>
            </div>
            <a
              href="mailto:info@mexicorugby.com"
              className="inline-flex items-center gap-3 font-heading font-bold text-sm uppercase tracking-widest bg-primary-foreground text-primary px-8 py-4 hover:opacity-90 transition-opacity shrink-0"
            >
              info@mexicorugby.com
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
