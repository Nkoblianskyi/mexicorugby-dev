'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 left-0 right-0 z-50 bg-foreground text-background border-t-2 border-primary"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-sm leading-relaxed text-background/80 max-w-2xl">
          Utilizamos cookies para mejorar tu experiencia de navegación.{' '}
          <Link
            href="/politica-de-cookies"
            className="underline text-background hover:text-primary transition-colors"
          >
            Política de cookies
          </Link>
          .
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={reject}
            className="font-heading font-600 text-xs uppercase tracking-widest text-background/50 hover:text-background transition-colors px-3 py-2"
          >
            Rechazar
          </button>
          <button
            onClick={accept}
            className="font-heading font-700 text-xs uppercase tracking-widest bg-primary text-primary-foreground px-5 py-2 hover:opacity-90 transition-opacity"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  )
}
