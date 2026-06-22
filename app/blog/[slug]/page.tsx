import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { articles, getArticleBySlug } from '@/lib/blog-data'
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return { title: 'Artículo no encontrado | Mexico Rugby' }
  return {
    title: `${article.title} | Mexico Rugby`,
    description: article.excerpt,
  }
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 2)

  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        {/* Hero */}
        <div className="relative min-h-[55vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-foreground/65" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 w-full">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-widest text-background/60 hover:text-background transition-colors mb-8"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Volver al blog
            </Link>
            <span className="font-heading font-bold text-xs tracking-widest uppercase text-accent border border-accent px-3 py-1 mb-5 inline-block">
              {article.category}
            </span>
            <h1
              className="font-heading font-black italic leading-tight text-balance text-background mt-4"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              {article.title}
            </h1>
          </div>
        </div>

        {/* Body */}
        <article className="bg-background py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="font-sans text-lg text-muted-foreground leading-relaxed font-medium mb-12 text-pretty border-l-4 border-primary pl-6">
              {article.excerpt}
            </p>
            <div className="flex flex-col gap-6">
              {article.body.map((paragraph, i) => (
                <p key={i} className="font-sans text-base text-foreground leading-relaxed text-pretty">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>

        {/* Divider line */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-t border-border" />
        </div>

        {/* Related articles */}
        <section className="bg-background py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="font-heading font-semibold text-xs tracking-widest uppercase text-muted-foreground mb-10">
              Otros artículos
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="group bg-background flex flex-col overflow-hidden"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col gap-3">
                    <span className="font-heading font-bold text-xs tracking-widest uppercase text-accent">
                      {rel.category}
                    </span>
                    <h3 className="font-heading font-extrabold text-xl uppercase tracking-wide leading-tight group-hover:text-primary transition-colors">
                      {rel.title}
                    </h3>
                    <p className="font-sans text-xs text-muted-foreground leading-relaxed text-pretty">
                      {rel.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-widest text-primary mt-1 group-hover:gap-3 transition-all">
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
