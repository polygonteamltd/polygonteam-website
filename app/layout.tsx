import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import CookieConsent from './components/CookieConsent'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PolygonTeam - Иновативни софтуерни решения',
  description: 'Водещ доставчик на технологични решения, специализиран в дигитална трансформация, облачни услуги и иновативна софтуерна разработка.',
  keywords: 'технологии, дигитална трансформация, облачни услуги, софтуерна разработка, консултации',
  authors: [{ name: 'PolygonTeam Team' }],
  openGraph: {
    title: 'PolygonTeam - Иновативни софтуерни решения',
    description: 'Водещ доставчик на технологични решения, специализиран в дигитална трансформация, облачни услуги и иновативна софтуерна разработка.',
    type: 'website',
    locale: 'bg_BG',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PolygonTeam - Иновативни софтуерни решения',
    description: 'Водещ доставчик на технологични решения, специализиран в дигитална трансформация, облачни услуги и иновативна софтуерна разработка.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bg" className="scroll-smooth">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
