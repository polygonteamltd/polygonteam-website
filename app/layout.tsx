import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import CookieConsent from './components/CookieConsent'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'POLYGONTeam ltd - Solutions for everyone',
  description: 'POLYGONTeam Ltd. е IT компания с над 10 години опит в разработването на индивидуални софтуерни решения, автоматизация на бизнес процеси и внедряване на сградни автоматизации.',
  keywords: 'POLYGONTeam, IT solutions, software development, business process automation, building automation, custom software, individual approach, long-term partnerships, security, maintenance, sustainable growth, Bulgaria, Veliko Tarnovo, programming, robotics, engineering, embedded systems, mobile apps, web development, database, API, integration, optimization, digital transformation, smart buildings, IoT, automation, software consulting, technical expertise, project management, quality assurance, support services, програмиране, софтуерни решения, автоматизация на бизнес процеси, сградни автоматизации, индивидуални решения, дългосрочни партньорства, сигурност, поддръжка, устойчив растеж, България, Велико Търново, роботика, инженерство, вградени системи, мобилни приложения, уеб разработка, база данни, интеграция, оптимизация, дигитална трансформация, умни сгради, интернет на нещата, автоматизация, софтуерно консултиране, техническа експертиза, управление на проекти, осигуряване на качество, поддържащи услуги',
  authors: [{ name: 'POLYGONTeam Ltd' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#2563eb' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'POLYGONTeam ltd - Solutions for everyone',
    description: 'POLYGONTeam Ltd. е IT компания с над 10 години опит в разработването на индивидуални софтуерни решения, автоматизация на бизнес процеси и внедряване на сградни автоматизации.',
    type: 'website',
    locale: 'bg_BG',
    images: [
      {
        url: '/og-image.png',
        width: 850,
        height: 315,
        alt: 'POLYGONTeam - IT Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'POLYGONTeam ltd - Solutions for everyone',
    description: 'POLYGONTeam Ltd. е IT компания с над 10 години опит в разработването на индивидуални софтуерни решения, автоматизация на бизнес процеси и внедряване на сградни автоматизации.',
    images: ['/og-image.png'],
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
