import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'

import { ThemeProvider } from '@/components/ui/theme-provider'
import AuthProvider from '@/app/AuthProvider'
import NextTopLoader from 'nextjs-toploader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ensiene',
  description: 'Hello World! Closed beta only, see you soon!',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <html lang="en-US" className="min-h-screen overflow-x-0 bg-slate-50 dark:bg-black">

        <body className={inter.className}>

          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <NextTopLoader showSpinner={false} />
            {children}
          </ThemeProvider>

        </body>

      </html>
    </AuthProvider>
  )
}
