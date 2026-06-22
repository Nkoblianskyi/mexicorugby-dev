import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CookieBanner } from '@/components/cookie-banner'

export const metadata: Metadata = {
  title: 'Historia del Rugby en México | Mexico Rugby',
  description:
    'Conoce la historia del rugby en México: sus orígenes universitarios, el crecimiento nacional y los hitos que marcaron su desarrollo.',
}

const timeline = [
  {
    decade: '1960s',
    title: 'Los primeros pasos',
    body: 'El rugby llega a México de la mano de estudiantes y emigrantes europeos. Las primeras prácticas organizadas se desarrollan en las canchas universitarias de la capital, donde el balón ovalado encuentra un terreno fértil entre jóvenes apasionados por el deporte de contacto.',
  },
  {
    decade: '1970s',
    title: 'La organización federativa',
    body: 'Se funda la primera estructura federativa formal, lo que permite organizar torneos internos con normas unificadas. Los primeros intercambios con selecciones de Sudamérica impulsan el nivel técnico y abren la puerta a la competencia internacional.',
  },
  {
    decade: '1980s',
    title: 'Expansión territorial',
    body: 'El rugby sale de la Ciudad de México y comienza a sembrarse en estados del norte, el Bajío y la costa del Pacífico. Las universidades se convierten en los principales viveros de talento y el movimiento juvenil empieza a consolidarse.',
  },
  {
    decade: '1990s',
    title: 'Primera generación de referencia',
    body: 'Surge la primera generación de jugadores formados íntegramente dentro del sistema mexicano. La selección nacional empieza a medirse con potencias regionales en torneos de Américas Rugby, obteniendo resultados que demuestran el nivel alcanzado.',
  },
  {
    decade: '2000s',
    title: 'La era de la profesionalización',
    body: 'Con la creación de programas de alto rendimiento y la incorporación de métodos modernos de entrenamiento, el rugby mexicano da un salto cualitativo. El rugby femenino arranca con fuerza y la disciplina de 7s comienza a ganar adeptos masivos.',
  },
  {
    decade: '2010s',
    title: 'Rugby en todo el territorio',
    body: 'Más de 30 selecciones estatales están activas. El rugby en silla de ruedas y el touch rugby amplían la inclusión. México participa de forma regular en torneos internacionales y la base de practicantes supera las decenas de miles en todo el país.',
  },
  {
    decade: '2020s',
    title: 'Consolidación y visión global',
    body: 'Tras superar la pausa pandémica, el rugby mexicano emerge renovado. Nuevas infraestructuras, programas escolares y una creciente visibilidad mediática posicionan al rugby como uno de los deportes de equipo de mayor proyección en el país.',
  },
]

export default function HistoriaPage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-foreground text-background overflow-hidden relative">
          <div
            className="absolute inset-y-0 right-0 font-heading font-black italic leading-none text-background/4 select-none pointer-events-none flex items-center pr-6"
            style={{ fontSize: 'clamp(6rem, 18vw, 16rem)' }}
            aria-hidden="true"
          >
            HISTORIA
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <p className="font-heading font-semibold text-xs tracking-widest uppercase text-primary mb-4">
              Mexico Rugby
            </p>
            <h1
              className="font-heading font-black italic leading-tight text-balance text-background"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
            >
              Historia del rugby<br />
              <span className="text-stroke text-background/80">en México</span>
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/history-bg.png"
                    alt="Pioneros del rugby en México"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-accent" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-6 pt-4">
                <h2
                  className="font-heading font-black italic leading-tight text-balance"
                  style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
                >
                  Un deporte que llegó para quedarse
                </h2>
                <p className="font-sans text-muted-foreground leading-relaxed text-pretty">
                  El rugby en México no nació de un decreto ni de una inversión institucional. Nació del entusiasmo, de la curiosidad de estudiantes que algún día vieron a alguien correr con un balón ovalado bajo el brazo y quisieron entender de qué se trataba ese juego extraño y fascinante.
                </p>
                <p className="font-sans text-muted-foreground leading-relaxed text-pretty">
                  Desde esos primeros pasos en canchas universitarias hasta la red nacional de selecciones estatales que existe hoy, el rugby mexicano es el producto de décadas de trabajo voluntario, pasión genuina y una comunidad que se reconoce a sí misma en los valores que el deporte encarna: respeto, trabajo colectivo e integridad.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-6">
            <h2
              className="font-heading font-black italic leading-tight text-balance mb-16"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Línea del tiempo
            </h2>
            <div className="relative">
              <div className="absolute left-24 md:left-32 top-0 bottom-0 w-px bg-border" aria-hidden="true" />
              <div className="flex flex-col gap-0">
                {timeline.map((item, i) => (
                  <div key={item.decade} className="flex gap-8 py-10 border-b border-border last:border-b-0">
                    <div className="w-20 md:w-28 shrink-0 pt-1">
                      <span className="font-heading font-black italic text-xl md:text-2xl text-primary">
                        {item.decade}
                      </span>
                    </div>
                    <div className="flex-1 pl-8 md:pl-12">
                      <h3 className="font-heading font-extrabold text-lg uppercase tracking-wide mb-3">
                        {item.title}
                      </h3>
                      <p className="font-sans text-sm text-muted-foreground leading-relaxed text-pretty max-w-2xl">
                        {item.body}
                      </p>
                    </div>
                    <div className="hidden md:flex items-start pt-2">
                      <span className="font-heading font-black text-5xl text-primary/10 leading-none">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Legacy section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
              <h2
                className="font-heading font-black italic leading-tight text-balance"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                Un legado construido colectivamente
              </h2>
              <p className="font-sans text-primary-foreground/80 leading-relaxed text-pretty">
                El rugby mexicano no es la historia de un campeón solitario. Es la historia de miles de personas que eligieron este deporte como forma de vida: entrenadores que dedicaron sus fines de semana, árbitros que recorrieron el país, jugadores que compaginaron trabajo y deporte, y familias que hicieron de cada partido un ritual comunitario.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  href="/reglas"
                  className="inline-flex items-center justify-center gap-2 font-heading font-bold text-sm uppercase tracking-widest border border-primary-foreground/40 text-primary-foreground px-8 py-4 hover:bg-primary-foreground hover:text-primary transition-colors"
                >
                  Conocer las reglas
                </Link>
                <Link
                  href="/nosotros"
                  className="inline-flex items-center justify-center gap-2 font-heading font-bold text-sm uppercase tracking-widest bg-primary-foreground text-primary px-8 py-4 hover:opacity-90 transition-opacity"
                >
                  Sobre nosotros
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <CookieBanner />
    </>
  )
}
