import Link from 'next/link'

const footerLinks = [
  {
    heading: 'Contenido',
    items: [
      { href: '/historia', label: 'Historia' },
      { href: '/reglas', label: 'Reglas' },
      { href: '/tecnica', label: 'Técnica' },
      { href: '/blog', label: 'Blog' },
    ],
  },
  {
    heading: 'Información',
    items: [
      { href: '/nosotros', label: 'Nosotros' },
      { href: '/politica-de-privacidad', label: 'Privacidad' },
      { href: '/politica-de-cookies', label: 'Cookies' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand col */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <ellipse cx="11" cy="11" rx="5" ry="9" stroke="white" strokeWidth="2" />
                  <line x1="2" y1="11" x2="20" y2="11" stroke="white" strokeWidth="1.5" />
                  <line x1="5" y1="5" x2="17" y2="5" stroke="white" strokeWidth="1" opacity="0.6" />
                  <line x1="5" y1="17" x2="17" y2="17" stroke="white" strokeWidth="1" opacity="0.6" />
                </svg>
              </div>
              <span className="font-heading font-700 text-lg tracking-wider uppercase text-background leading-none">
                Mexico <span className="font-400 opacity-60">Rugby</span>
              </span>
            </div>
            <p className="text-sm text-background/50 leading-relaxed max-w-xs">
              Portal dedicado al rugby en México. Información, historia, técnica y cultura del rugby nacional.
            </p>
            <a
              href="mailto:info@mexicorugby.com"
              className="text-sm text-background/60 hover:text-background transition-colors mt-2"
            >
              info@mexicorugby.com
            </a>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.heading} className="flex flex-col gap-4">
              <span className="font-heading font-700 text-xs tracking-widest uppercase text-background/40">
                {section.heading}
              </span>
              <nav className="flex flex-col gap-3">
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-heading font-600 text-base uppercase tracking-wide text-background/70 hover:text-background transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-background/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-heading font-400 text-xs tracking-wider text-background/30 uppercase">
            Derechos reservados &copy; 2026 &mdash; Tierra de Rugby
          </p>
          <p className="font-heading font-400 text-xs tracking-wider text-background/30 uppercase">
            mexicorugby.com
          </p>
        </div>
      </div>
    </footer>
  )
}
