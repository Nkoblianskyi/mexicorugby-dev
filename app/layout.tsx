import type { Metadata, Viewport } from 'next'
import { Barlow_Condensed, DM_Sans } from 'next/font/google'
import './globals.css'
import { CookieBanner } from '@/components/cookie-banner'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-barlow-condensed',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mexico Rugby | El Rugby Mexicano',
  description:
    'Portal oficial del rugby en México. Historia, reglamento, técnica, equipamiento y todo lo que necesitas saber sobre el rugby mexicano.',
  keywords: 'rugby mexico, rugby mexicano, rugby union, rugby sevens, rugby historia',
  openGraph: {
    title: 'Mexico Rugby',
    description: 'El rugby mexicano: historia, técnica, reglas y más.',
    type: 'website',
    locale: 'es_MX',
  },
  metadataBase: new URL('https://mexicorugby.com'),
  alternates: { canonical: 'https://mexicorugby.com' },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#005C35',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${dmSans.variable} ${barlowCondensed.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
