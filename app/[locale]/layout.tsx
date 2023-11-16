import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'

import { ThemeProvider } from '@/components/ui/theme-provider'
import AuthProvider from '@/app/[locale]/AuthProvider'
import NextTopLoader from 'nextjs-toploader'

import { getI18n, getScopedI18n } from '../../locales/server'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata() {
  const t = await getI18n()
  const scopedT = await getScopedI18n('hello')

  return {
    title: t('title'),
    description: t('description'),
    icons: {
      icon: '/favicon.ico',
    }
  };
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
