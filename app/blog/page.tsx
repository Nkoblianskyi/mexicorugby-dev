import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { articles } from '@/lib/blog-data'

export const metadata = {
  title: 'Blog | Mexico Rugby',
  description:
    'Artículos sobre técnica, táctica, cultura e historia del rugby mexicano.',
}

export default function BlogPage() {
  const [featured, ...rest] = articles

  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        {/* Page header */}
        <div className="bg-foreground text-background py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="font-heading font-semibold text-xs tracking-widest uppercase text-primary mb-4">
              Blog
            </p>
            <h1
              className="font-heading font-black italic leading-tight text-balance text-background"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
            >
              Ideas sobre el{' '}
              <span style={{ WebkitTextStroke: '2px white', color: 'transparent' }}>rugby</span>
            </h1>
          </div>
        </div>

        {/* Featured article */}
        <section className="bg-background py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="font-heading font-semibold text-xs tracking-widest uppercase text-muted-foreground mb-8">
              Artículo destacado
            </p>
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-secondary overflow-hidden">
                <div className="relative aspect-[4/3] lg:aspect-auto min-h-80 overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-10 lg:p-16 flex flex-col justify-end gap-6">
                  <span className="font-heading font-bold text-xs tracking-widest uppercase text-accent w-fit border border-accent px-3 py-1">
                    {featured.category}
                  </span>
                  <h2
                    className="font-heading font-black italic leading-tight text-balance"
                    style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                  >
                    {featured.title}
                  </h2>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed text-pretty">
                    {featured.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 font-heading font-bold text-sm uppercase tracking-widest text-primary border-b-2 border-primary pb-1 w-fit group-hover:text-accent group-hover:border-accent transition-colors">
                    Leer artículo
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Article grid */}
        <section className="bg-background pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="font-heading font-semibold text-xs tracking-widest uppercase text-muted-foreground mb-8">
              Todos los artículos
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {rest.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group bg-background flex flex-col overflow-hidden"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/0 transition-colors" />
                  </div>
                  <div className="p-6 flex flex-col gap-3 flex-1">
                    <span className="font-heading font-bold text-xs tracking-widest uppercase text-accent">
                      {article.category}
                    </span>
                    <h3 className="font-heading font-extrabold text-xl uppercase tracking-wide leading-tight group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="font-sans text-xs text-muted-foreground leading-relaxed text-pretty flex-1">
                      {article.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-widest text-primary mt-2 group-hover:gap-3 transition-all">
                      Leer más
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
