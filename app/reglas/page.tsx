import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CookieBanner } from '@/components/cookie-banner'

export const metadata: Metadata = {
  title: 'Reglas del Rugby | Mexico Rugby',
  description:
    'Aprende las reglas del rugby: puntuación, disciplinas, fases de juego, infracciones y todo lo que necesitas para entender el deporte.',
}

const disciplines = [
  {
    name: 'Rugby Union 15',
    desc: '15 jugadores por equipo, 80 minutos de juego, la modalidad madre del rugby internacional.',
    points: ['Ensayo: 5 pts', 'Conversión: 2 pts', 'Penalti: 3 pts', 'Drop goal: 3 pts'],
  },
  {
    name: 'Rugby Sevens',
    desc: '7 jugadores, partidos de 14 minutos. Velocidad e improvisación al máximo nivel.',
    points: ['Ensayo: 5 pts', 'Conversión: 2 pts', 'Penalti: 3 pts', 'Drop goal: 3 pts'],
  },
  {
    name: 'Rugby League',
    desc: 'Variante con 13 jugadores y mecánica distinta: el equipo atacante tiene 6 intentos.',
    points: ['Ensayo: 4 pts', 'Conversión: 2 pts', 'Penalti: 2 pts', 'Drop goal: 1 pt'],
  },
  {
    name: 'Touch Rugby',
    desc: 'Versión sin contacto ideal para iniciación. Se substituye el placaje por el toque con ambas manos.',
    points: ['Sin contacto', 'Accesible a todas las edades', 'Reglas simplificadas', 'Enfoque en velocidad y pase'],
  },
]

const phases = [
  {
    name: 'Melé',
    number: '01',
    desc: 'Ocho delanteros de cada equipo se forman y empujan juntos para recuperar el balón. El hooker lanza sus pies para rastrear el balón hacia el interior de la melé.',
  },
  {
    name: 'Touche',
    number: '02',
    desc: 'Reinicio de juego cuando el balón sale por las bandas. Un jugador lanza el balón entre dos filas de jugadores que saltan para atraparlo.',
  },
  {
    name: 'Ruck',
    number: '03',
    desc: 'Cuando el portador es placado, se forma un ruck sobre el balón. Los jugadores en pie compiten para ganar la posesión empujando a los rivales.',
  },
  {
    name: 'Maul',
    number: '04',
    desc: 'El portador no es derribado y varios jugadores de ambos equipos se agarran alrededor del balón. El equipo atacante avanza colectivamente.',
  },
  {
    name: 'Penalti',
    number: '05',
    desc: 'Infracción que el equipo perjudicado puede convertir en 3 puntos pateando entre los postes, o en posesión optando por una melé o touche.',
  },
  {
    name: 'Drop goal',
    number: '06',
    desc: 'El jugador deja caer el balón y lo golpea al bote. Si pasa entre los postes, suma 3 puntos en juego abierto sin necesidad de infracción previa.',
  },
]

const infractions = [
  ['Fuera de juego', 'Situarse delante del portador del balón o del pie que patea sin autorización.'],
  ['Placaje alto', 'Contacto con el rival por encima de los hombros. Puede ser penalti o tarjeta.'],
  ['Pasarle al frente', 'Pasar el balón hacia adelante con las manos. El pase en rugby es siempre lateral o hacia atrás.'],
  ['Obstrucción', 'Bloquear a un rival que no porta el balón para impedir su avance.'],
  ['Entrada en melé', 'Hacerlo de forma lateral o sin unirse correctamente al primer jugador del bloque.'],
  ['Pisar al rival', 'Usar el pie para golpear a un jugador en el suelo. Tarjeta directa en la mayoría de los casos.'],
]

export default function ReglasPage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-foreground text-background overflow-hidden relative">
          <div
            className="absolute inset-y-0 right-0 font-heading font-black italic leading-none text-background/4 select-none pointer-events-none flex items-center pr-6"
            style={{ fontSize: 'clamp(5rem, 15vw, 14rem)' }}
            aria-hidden="true"
          >
            REGLAS
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <p className="font-heading font-semibold text-xs tracking-widest uppercase text-primary mb-4">
              Mexico Rugby
            </p>
            <h1
              className="font-heading font-black italic leading-tight text-balance text-background"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
            >
              Reglas del juego<br />
              <span className="text-stroke text-background/80">y disciplinas</span>
            </h1>
          </div>
        </section>

        {/* Disciplines */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <h2
              className="font-heading font-black italic leading-tight text-balance mb-16"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Modalidades del rugby
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
              {disciplines.map((disc) => (
                <div key={disc.name} className="bg-background p-10 flex flex-col gap-5">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-8 bg-accent shrink-0 mt-1" aria-hidden="true" />
                    <h3
                      className="font-heading font-black italic leading-tight"
                      style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
                    >
                      {disc.name}
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{disc.desc}</p>
                  <ul className="flex flex-col gap-2">
                    {disc.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-3">
                        <div className="w-1 h-1 bg-primary rounded-full shrink-0" aria-hidden="true" />
                        <span className="font-heading font-semibold text-sm uppercase tracking-wide text-foreground">
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Phases of play */}
        <section className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end gap-8 mb-16">
              <h2
                className="font-heading font-black italic leading-tight text-balance flex-1"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Fases del juego
              </h2>
              <p className="font-sans text-muted-foreground text-sm leading-relaxed max-w-xs text-pretty">
                El rugby se desarrolla a través de fases continuas de posesión y disputa. Entender cada fase es clave para leer el partido.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {phases.map((phase) => (
                <div key={phase.name} className="flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-heading font-extrabold text-2xl uppercase tracking-wide">
                      {phase.name}
                    </h3>
                    <span className="font-heading font-black text-4xl text-primary/15 leading-none shrink-0">
                      {phase.number}
                    </span>
                  </div>
                  <div className="w-12 h-0.5 bg-primary" aria-hidden="true" />
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed text-pretty">
                    {phase.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Infractions table */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <h2
              className="font-heading font-black italic leading-tight text-balance mb-16"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Infracciones principales
            </h2>
            <div className="flex flex-col gap-0">
              {infractions.map(([name, desc], i) => (
                <div
                  key={name}
                  className="flex flex-col sm:flex-row sm:items-start gap-4 py-6 border-b border-border"
                >
                  <div className="flex items-center gap-4 sm:w-64 shrink-0">
                    <span className="font-heading font-black text-2xl text-primary/20 w-8 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-heading font-extrabold text-base uppercase tracking-wide">
                      {name}
                    </span>
                  </div>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed sm:pl-4">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-accent text-accent-foreground">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <h2
              className="font-heading font-black italic leading-tight text-balance"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Aprende a jugar con la técnica correcta
            </h2>
            <Link
              href="/tecnica"
              className="inline-flex items-center gap-3 font-heading font-bold text-sm uppercase tracking-widest bg-accent-foreground text-accent px-8 py-4 hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
            >
              Ver sección de técnica
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
      <CookieBanner />
    </>
  )
}
