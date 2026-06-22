import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CookieBanner } from '@/components/cookie-banner'

export const metadata: Metadata = {
  title: 'Técnica, Táctica y Entrenamiento | Mexico Rugby',
  description:
    'Guías de técnica individual, planes tácticos colectivos y ejercicios de entrenamiento para jugadores de rugby de todos los niveles.',
}

const skills = [
  {
    category: 'Técnica individual',
    items: [
      {
        title: 'El pase',
        desc: 'El pase lateral es la piedra angular del rugby. Se ejecuta con ambas manos, rotando el torso y generando velocidad desde los hombros, no solo las muñecas. La trayectoria debe ser ligeramente elevada para facilitar la recepción.',
      },
      {
        title: 'El placaje',
        desc: 'La cabeza va siempre al costado del cuerpo del rival. Los brazos envuelven a la altura de los muslos, el cuerpo baja en una posición de potencia con rodillas flexionadas. Un placaje efectivo interrumpe el avance sin riesgo para el defensor.',
      },
      {
        title: 'El pateo',
        desc: 'Existen tres tipos principales: punt (de distancia), drop-kick (en rebote para sumar 3 puntos) y placekick (para conversiones). En todos, la planta del pie de apoyo apunta al objetivo y el swing de pierna parte desde la cadera.',
      },
      {
        title: 'El maul y el carry',
        desc: 'Llevar el balón al contacto exige bajar el centro de gravedad, proteger el balón con el brazo interno y buscar el apoyo del compañero más cercano antes de llegar al suelo. El equilibrio y la baja posición son determinantes.',
      },
    ],
  },
  {
    category: 'Táctica colectiva',
    items: [
      {
        title: 'Ataque por las puntas',
        desc: 'Mover el balón rápidamente de lado a lado para explotar la velocidad de los backs. Requiere líneas de pase planas, buenos ángulos de apoyo y la disposición del equipo rival estirada en anchura.',
      },
      {
        title: 'Juego de pick and go',
        desc: 'Avanzar metro a metro con los forwards ganando terreno en cada contacto. Ideal cuando el equipo necesita consumir tiempo o cuando el rival no está bien organizado en defensa al ruck.',
      },
      {
        title: 'La patada estratégica',
        desc: 'Patear para ganar campo, para la trampa del contesteo o para explotar la zona detrás de la defensa rival. La coordinación entre el pateador y los chasers que persiguen el balón es clave.',
      },
      {
        title: 'Defensa en línea',
        desc: 'Todos los defensores se mantienen en línea horizontal, avanzando de forma coordinada para reducir el espacio del rival. La comunicación verbal constante evita brechas entre los defensores.',
      },
    ],
  },
]

const trainingPlan = [
  {
    day: 'Lunes',
    focus: 'Fuerza y acondicionamiento',
    exercises: ['Sentadillas con barra 4×8', 'Press de banca 4×8', 'Peso muerto 3×6', 'Core: plancha y rotaciones 3×45s'],
  },
  {
    day: 'Martes',
    focus: 'Técnica de placaje y contacto',
    exercises: ['Ejercicios de entrada baja', 'Placaje a saco de arena 5×10 reps', 'Trabajo de maul en duplas', 'Resistencia de carrera 4×400m'],
  },
  {
    day: 'Miércoles',
    focus: 'Pase y alineaciones',
    exercises: ['Pases en movimiento 3×10 min', 'Ejercicios de línea de backs', 'Touche: saltos y lanzamientos', 'Circuito de agilidad 3 vueltas'],
  },
  {
    day: 'Jueves',
    focus: 'Táctica y juego de posición',
    exercises: ['Práctica de scrum en máquina', 'Movimientos de backs a velocidad media', 'Análisis de videos del rival', 'Pateo: kicks de precisión 15 min'],
  },
  {
    day: 'Viernes',
    focus: 'Velocidad y recuperación',
    exercises: ['Sprint 10×40m', 'Estiramientos dinámicos 20 min', 'Ejercicios de pase bajo presión', 'Regenerativo: carrera suave 20 min'],
  },
  {
    day: 'Sábado',
    focus: 'Partido de práctica',
    exercises: ['Calentamiento estructurado 20 min', 'Partido interno 2×20 min', 'Revisión técnica post-partido', 'Enfriamiento y estiramiento'],
  },
]

const tips = [
  'Mantén siempre la vista arriba durante el transporte del balón para leer la defensa rival.',
  'En el ruck, la posición de los pies es determinante: paralelos y bien plantados antes del contacto.',
  'La comunicación verbal durante el juego no es opcional, es una herramienta táctica fundamental.',
  'Hidratación antes, durante y después: el rugby exige un nivel de esfuerzo físico sostenido muy alto.',
  'La forma técnica nunca debe sacrificarse por la velocidad, especialmente en el placaje.',
  'Estudia el juego de los rivales antes de cada partido; identificar sus patrones repetitivos es ventaja directa.',
]

export default function TecnicaPage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-foreground text-background overflow-hidden relative">
          <div
            className="absolute inset-y-0 right-0 font-heading font-black italic leading-none text-background/4 select-none pointer-events-none flex items-center pr-6"
            style={{ fontSize: 'clamp(4rem, 12vw, 12rem)' }}
            aria-hidden="true"
          >
            TÉCNICA
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <p className="font-heading font-semibold text-xs tracking-widest uppercase text-primary mb-4">
              Mexico Rugby
            </p>
            <h1
              className="font-heading font-black italic leading-tight text-balance text-background"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
            >
              Técnica, táctica<br />
              <span className="text-stroke text-background/80">y entrenamiento</span>
            </h1>
          </div>
        </section>

        {/* Intro image */}
        <section className="bg-background">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="relative aspect-[21/7] overflow-hidden">
              <Image
                src="/images/training.png"
                alt="Jugadores de rugby en entrenamiento"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-foreground/20" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-heading font-black italic text-background text-balance" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                  El talento sin estructura no llega lejos. La estructura sin talento tampoco.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills sections */}
        {skills.map((section, si) => (
          <section key={section.category} className={`py-20 ${si % 2 === 0 ? 'bg-secondary' : 'bg-background'}`}>
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-end gap-6 mb-16">
                <h2
                  className="font-heading font-black italic leading-tight"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                >
                  {section.category}
                </h2>
                <div className="flex-1 h-px bg-border mb-3" aria-hidden="true" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {section.items.map((item, i) => (
                  <div key={item.title} className="flex flex-col gap-4 p-8 border border-border bg-background">
                    <div className="flex items-start justify-between">
                      <h3 className="font-heading font-extrabold text-xl uppercase tracking-wide">
                        {item.title}
                      </h3>
                      <span className="font-heading font-black text-4xl text-primary/15 leading-none shrink-0">
                        {String(si * 4 + i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="w-8 h-0.5 bg-accent" aria-hidden="true" />
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed text-pretty">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Training plan */}
        <section className="py-20 bg-foreground text-background">
          <div className="max-w-7xl mx-auto px-6">
            <h2
              className="font-heading font-black italic leading-tight text-balance mb-16 text-background"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Plan de entrenamiento semanal
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-background/10">
              {trainingPlan.map((day) => (
                <div key={day.day} className="bg-foreground p-8 flex flex-col gap-4 border border-background/10">
                  <div>
                    <span className="font-heading font-black italic text-3xl text-primary leading-none">
                      {day.day}
                    </span>
                    <p className="font-heading font-semibold text-xs tracking-widest uppercase text-background/40 mt-1">
                      {day.focus}
                    </p>
                  </div>
                  <div className="w-8 h-px bg-background/20" aria-hidden="true" />
                  <ul className="flex flex-col gap-2">
                    {day.exercises.map((ex) => (
                      <li key={ex} className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full shrink-0 mt-2" aria-hidden="true" />
                        <span className="font-sans text-xs text-background/70 leading-relaxed">{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-6">
            <h2
              className="font-heading font-black italic leading-tight text-balance mb-16"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Consejos del entrenador
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tips.map((tip, i) => (
                <div key={i} className="flex items-start gap-4 p-6 border border-primary-foreground/20">
                  <span className="font-heading font-black text-4xl text-primary-foreground/20 leading-none shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="font-sans text-sm text-primary-foreground/85 leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <h2
              className="font-heading font-black italic leading-tight text-balance"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Explora nuestros artículos del blog
            </h2>
            <Link
              href="/blog"
              className="inline-flex items-center gap-3 font-heading font-bold text-sm uppercase tracking-widest bg-primary text-primary-foreground px-8 py-4 hover:bg-accent transition-colors whitespace-nowrap shrink-0"
            >
              Ir al blog
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
