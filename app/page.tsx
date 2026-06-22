import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CookieBanner } from '@/components/cookie-banner'

const blogPreviews = [
  {
    slug: 'el-arte-del-scrum',
    title: 'El arte del scrum',
    excerpt:
      'La formación más icónica del rugby: cómo funciona, qué exige y por qué define el resultado de un partido.',
    image: '/images/blog-1.png',
    category: 'Técnica',
  },
  {
    slug: 'lineout-perfecto',
    title: 'El lineout perfecto',
    excerpt:
      'Precisión, coordinación y señales en código: el lineout es teatro en movimiento sobre el campo verde.',
    image: '/images/blog-2.png',
    category: 'Táctica',
  },
  {
    slug: 'kick-maestro',
    title: 'El golpe maestro',
    excerpt:
      'Desde el drop-goal hasta la conversión, dominar el pie es tan vital como dominar el contacto físico.',
    image: '/images/blog-3.png',
    category: 'Habilidades',
  },
]

const achievements = [
  { number: '1960', label: 'Año de fundación', sub: 'del rugby organizado en México' },
  { number: '3×', label: 'Campeonatos', sub: 'continentales en Américas Rugby' },
  { number: '+15', label: 'Disciplinas', sub: 'incluyendo rugby 15, 7s y touch' },
  { number: '32', label: 'Selecciones', sub: 'estatales activas' },
]

const facts1 = [
  'El rugby de 15 dura 80 minutos divididos en dos tiempos de 40.',
  'Un ensayo vale 5 puntos; la transformación posterior suma 2 más.',
  'México compite en el circuito de Américas Rugby desde su fundación.',
  'El jugador de rugby recorre en promedio 7 km por partido.',
]

const facts2 = [
  'El rugby es uno de los deportes más seguros gracias a sus reglas de contacto.',
  'Los árbitros tienen autoridad absoluta; contradecirlos es sancionado.',
  'El capitán es el único autorizado a hablar con el árbitro durante el juego.',
  'Las mujeres practican rugby competitivo desde principios del siglo XX.',
]

const equipmentItems = [
  {
    name: 'Balón',
    desc: 'Ovoide, de cuero sintético, diseñado para el pase lateral y el pateo preciso.',
  },
  {
    name: 'Protector bucal',
    desc: 'Obligatorio en todo nivel competitivo. Reduce riesgos de impacto dental.',
  },
  {
    name: 'Casco blando',
    desc: 'Optativo pero recomendado para posiciones de primera línea en el scrum.',
  },
  {
    name: 'Calzado de tacos',
    desc: 'Tacos de plástico moldeados para agarre en césped natural y artificial.',
  },
  {
    name: 'Hombreras ligeras',
    desc: 'Acolchado suave bajo la camiseta, sin estructura rígida según reglamento.',
  },
  {
    name: 'Medias y pantalón',
    desc: 'Ajustados al cuerpo para evitar que rivales halen; parte del uniforme oficial.',
  },
]

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-rugby.png"
              alt="Jugador de rugby mexicano en acción"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-foreground/55" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
            <span
              className="font-heading font-black italic text-background/5 select-none leading-none"
              style={{ fontSize: 'clamp(8rem, 22vw, 22rem)' }}
              aria-hidden="true"
            >
              RUGBY
            </span>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-40 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
              <div>
                <p className="font-heading font-semibold text-xs tracking-widest uppercase text-primary mb-4">
                  El rugby mexicano
                </p>
                <h1
                  className="font-heading font-black italic text-background leading-[0.9] mb-8 text-balance"
                  style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
                >
                  Fuerza,{' '}
                  <span className="text-stroke text-background">Táctica</span>{' '}
                  y Pasión
                </h1>
                <Link
                  href="/historia"
                  className="inline-flex items-center gap-3 font-heading font-bold text-sm uppercase tracking-widest bg-primary text-primary-foreground px-8 py-4 hover:bg-accent transition-colors"
                >
                  Descubrir la historia
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
              <div className="lg:text-right">
                <p className="font-sans text-background/70 leading-relaxed max-w-sm lg:ml-auto text-pretty">
                  México lleva más de seis décadas construyendo una tradición rugbística propia, con jugadores que llevan el balón ovalado a los rincones más lejanos del territorio nacional.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 z-10 hidden md:flex flex-col items-center gap-2">
            <div className="w-px h-12 bg-background/30" />
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((a) => (
                <div key={a.number} className="flex flex-col gap-1">
                  <span
                    className="font-heading font-black italic leading-none text-primary-foreground"
                    style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                  >
                    {a.number}
                  </span>
                  <span className="font-heading font-bold text-sm uppercase tracking-wider text-primary-foreground/90">
                    {a.label}
                  </span>
                  <span className="font-sans text-xs text-primary-foreground/60 leading-snug">
                    {a.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HISTORY PREVIEW */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/history-bg.png"
                    alt="Historia del rugby en México"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-6">
                <p className="font-heading font-semibold text-xs tracking-widest uppercase text-accent">
                  01 / Historia
                </p>
                <h2
                  className="font-heading font-black italic leading-tight text-balance"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
                >
                  Más de 60 años de{' '}
                  <span className="text-stroke-thin text-foreground">tradición</span>{' '}
                  rugbística
                </h2>
                <p className="font-sans text-muted-foreground leading-relaxed text-pretty">
                  Desde los primeros clubes universitarios de los años 60 hasta las selecciones nacionales que hoy compiten en torneos continentales, el rugby en México ha recorrido un camino marcado por el esfuerzo colectivo y la conquista de nuevos territorios.
                </p>
                <Link
                  href="/historia"
                  className="inline-flex items-center gap-2 font-heading font-bold text-sm uppercase tracking-widest text-primary border-b-2 border-primary pb-1 w-fit hover:text-accent hover:border-accent transition-colors"
                >
                  Leer la historia completa
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FACTS 1 */}
        <section className="py-16 bg-secondary">
          <div className="max-w-7xl mx-auto px-6">
            <p className="font-heading font-semibold text-xs tracking-widest uppercase text-muted-foreground mb-10">
              Datos del juego
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
              {facts1.map((fact, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 py-6 border-b border-border last:border-b-0 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:pr-8 sm:[&:nth-child(even)]:pl-8"
                >
                  <span className="font-heading font-black text-3xl text-primary/20 leading-none shrink-0 mt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="font-sans text-sm leading-relaxed text-foreground">{fact}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EQUIPMENT SECTION */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end gap-8 mb-16">
              <div className="flex-1">
                <p className="font-heading font-semibold text-xs tracking-widest uppercase text-accent mb-3">
                  02 / Equipamiento
                </p>
                <h2
                  className="font-heading font-black italic leading-tight text-balance"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
                >
                  Lo que lleva un jugador al campo
                </h2>
              </div>
              <p className="font-sans text-muted-foreground text-sm leading-relaxed max-w-xs text-pretty">
                El equipamiento en el rugby es funcional y limitado por reglamento. Cada pieza tiene un propósito definido: proteger, rendir y cumplir.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
              {equipmentItems.map((item, i) => (
                <div
                  key={item.name}
                  className={`bg-background p-8 flex flex-col gap-3 ${i === 0 ? 'md:col-span-1' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-primary shrink-0" aria-hidden="true" />
                    <h3 className="font-heading font-extrabold text-xl uppercase tracking-wide">
                      {item.name}
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-px relative aspect-[16/5] overflow-hidden">
              <Image
                src="/images/equipment.png"
                alt="Equipamiento de rugby extendido en el campo"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-foreground/20" />
              <div className="absolute bottom-6 left-8">
                <p className="font-heading font-bold text-lg uppercase tracking-widest text-background/80">
                  Listo para el campo
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RULES PREVIEW */}
        <section className="py-24 bg-foreground text-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-2 flex flex-col gap-6">
                <p className="font-heading font-semibold text-xs tracking-widest uppercase text-primary">
                  03 / Reglas
                </p>
                <h2
                  className="font-heading font-black italic leading-tight text-balance text-background"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                >
                  El reglamento que da forma al juego
                </h2>
                <Link
                  href="/reglas"
                  className="inline-flex items-center gap-2 font-heading font-bold text-sm uppercase tracking-widest text-primary border-b-2 border-primary pb-1 w-fit hover:opacity-80 transition-opacity"
                >
                  Ver reglas completas
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
              <div className="lg:col-span-3 flex flex-col gap-0">
                {[
                  ['Ensayo', 'El jugador apoya el balón en la zona de marca rival. Vale 5 puntos y es el acto más codiciado del rugby.'],
                  ['Penalti', 'Infracción reglamentaria que otorga 3 puntos al pateador si convierte entre los postes.'],
                  ['Melé', 'Reinicio de juego entre ocho delanteros de cada equipo que pugnan por el balón en el suelo.'],
                  ['Fuera de juego', 'Los jugadores deben mantenerse detrás del portador o del balón en cada fase de juego.'],
                ].map(([rule, desc]) => (
                  <div key={rule} className="flex gap-6 py-5 border-b border-background/10">
                    <span className="font-heading font-extrabold text-sm uppercase tracking-wide text-primary w-32 shrink-0 pt-0.5">
                      {rule}
                    </span>
                    <p className="font-sans text-sm text-background/70 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TECHNIQUE PREVIEW */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="flex flex-col gap-6 order-2 lg:order-1">
                <p className="font-heading font-semibold text-xs tracking-widest uppercase text-accent">
                  04 / Técnica
                </p>
                <h2
                  className="font-heading font-black italic leading-tight text-balance"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                >
                  Entrenamiento,{' '}
                  <span className="text-stroke-thin text-foreground">táctica</span>{' '}
                  y disciplina
                </h2>
                <p className="font-sans text-muted-foreground leading-relaxed text-pretty">
                  El rugby de alto nivel se construye con patrones de juego, trabajo físico y lectura de situaciones. Desde ejercicios básicos hasta planes de partido completos, aquí encontrarás las herramientas para mejorar.
                </p>
                <Link
                  href="/tecnica"
                  className="inline-flex items-center gap-2 font-heading font-bold text-sm uppercase tracking-widest text-accent border-b-2 border-accent pb-1 w-fit hover:text-primary hover:border-primary transition-colors"
                >
                  Explorar técnicas y ejercicios
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/images/training.png"
                    alt="Entrenamiento de rugby"
                    fill
                    className="object-cover"
                  />
                </div>
                <div
                  className="absolute -top-4 -left-4 w-full h-full border-2 border-primary -z-10"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FACTS 2 */}
        <section className="py-16 bg-primary text-primary-foreground overflow-hidden relative">
          <div
            className="absolute inset-y-0 right-0 font-heading font-black italic leading-none text-primary-foreground/5 select-none pointer-events-none flex items-center pr-6"
            style={{ fontSize: 'clamp(6rem, 18vw, 16rem)' }}
            aria-hidden="true"
          >
            FACTS
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <p className="font-heading font-semibold text-xs tracking-widest uppercase text-primary-foreground/50 mb-10">
              Curiosidades del deporte
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {facts2.map((fact, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-0.5 min-h-12 bg-primary-foreground/20 shrink-0 mt-1 self-stretch" aria-hidden="true" />
                  <p className="font-sans text-sm leading-relaxed text-primary-foreground/80">{fact}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BLOG PREVIEW */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div>
                <p className="font-heading font-semibold text-xs tracking-widest uppercase text-accent mb-3">
                  05 / Blog
                </p>
                <h2
                  className="font-heading font-black italic leading-tight text-balance"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
                >
                  Artículos recientes
                </h2>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-heading font-bold text-sm uppercase tracking-widest text-primary border-b-2 border-primary pb-1 w-fit hover:text-accent hover:border-accent transition-colors whitespace-nowrap"
              >
                Ver todos los artículos
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-border">
              <div className="md:col-span-3 bg-background">
                <Link href={`/blog/${blogPreviews[0].slug}`} className="group block h-full">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={blogPreviews[0].image}
                      alt={blogPreviews[0].title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <span className="font-heading font-semibold text-xs tracking-widest uppercase text-primary">
                      {blogPreviews[0].category}
                    </span>
                    <h3
                      className="font-heading font-black italic mt-2 mb-3 leading-tight text-balance"
                      style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}
                    >
                      {blogPreviews[0].title}
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      {blogPreviews[0].excerpt}
                    </p>
                  </div>
                </Link>
              </div>

              <div className="md:col-span-2 flex flex-col gap-px bg-border">
                {blogPreviews.slice(1).map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-background flex flex-col flex-1"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col gap-2 flex-1">
                      <span className="font-heading font-semibold text-xs tracking-widest uppercase text-primary">
                        {post.category}
                      </span>
                      <h3 className="font-heading font-extrabold italic text-xl leading-tight">
                        {post.title}
                      </h3>
                      <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
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
