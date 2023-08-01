import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css';
import { ThemeProvider } from '@/components/ui/theme-provider'
import { Header } from './_components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home - Ensiene',
  description: 'Hello World! Closed beta only, see you soon!',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en" className="min-h-screen">

      <body className={inter.className}>

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />

            {children}

        </ThemeProvider>

      </body>

    </html>
  )
}
