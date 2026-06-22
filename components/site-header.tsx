'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/historia', label: 'Historia' },
  { href: '/reglas', label: 'Reglas' },
  { href: '/tecnica', label: 'Técnica' },
  { href: '/blog', label: 'Blog' },
  { href: '/nosotros', label: 'Nosotros' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo + Wordmark */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-primary flex items-center justify-center shrink-0">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <ellipse cx="11" cy="11" rx="5" ry="9" stroke="white" strokeWidth="2" />
              <line x1="2" y1="11" x2="20" y2="11" stroke="white" strokeWidth="1.5" />
              <line x1="5" y1="5" x2="17" y2="5" stroke="white" strokeWidth="1" opacity="0.6" />
              <line x1="5" y1="17" x2="17" y2="17" stroke="white" strokeWidth="1" opacity="0.6" />
            </svg>
          </div>
          <span className="font-heading font-800 text-xl tracking-wider uppercase text-foreground leading-none">
            <span className="text-primary">Mexico</span>{' '}
            <span className="font-400 text-stroke-thin text-foreground">Rugby</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-heading font-600 text-sm uppercase tracking-widest transition-colors ${
                pathname.startsWith(link.href)
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block w-6 h-0.5 bg-foreground transition-transform origin-center ${open ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-opacity ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-transform origin-center ${open ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 pb-6 pt-4">
          <span className="block font-heading font-800 text-2xl tracking-wider uppercase leading-none mb-5">
            <span className="text-primary">Mexico</span>{' '}
            <span className="font-400 text-stroke-thin text-foreground">Rugby</span>
          </span>
          <nav className="flex flex-col gap-5" aria-label="Menú móvil">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`font-heading font-700 text-2xl uppercase tracking-wider ${
                  pathname.startsWith(link.href) ? 'text-primary' : 'text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
