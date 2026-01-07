import type { Metadata, Viewport } from 'next'
import { Montserrat, Poppins, Open_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Load fonts with next/font
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-montserrat',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-open-sans',
})

export const metadata: Metadata = {
  title: 'A2Z Group - Real Estate Made Simple',
  description: 'From A to Z, we handle all your real estate needs - retail, commercial, investments, and cash offers.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${poppins.variable} ${openSans.variable} scroll-smooth`}
    >
      <body className="antialiased bg-white text-gray-900">

        {/* FIX: Header takes natural space, no white gap */}
        <Header />

        {/* FIX: removed unwanted padding */}
        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
