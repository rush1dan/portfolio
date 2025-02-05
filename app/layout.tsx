import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rushidan\'s Portfolio',
  description: 'Rushidan\'s developer portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="bg-bgColor text-white h-screen scroll-smooth overflow-y-scroll overflow-x-hidden">
          {/* Header */}
          <section className='sticky top-0 z-20' id="header">
              <Header />
          </section>
          {children}
        </div>
      </body>
    </html>
  )
}
