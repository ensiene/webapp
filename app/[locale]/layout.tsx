import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { getI18n, getScopedI18n } from '../../locales/server'
import { Analytics } from '@vercel/analytics/react';
import { I18nProviderClient } from '../../locales/client'
import NextTopLoader from 'nextjs-toploader'


const inter = Inter({ subsets: ['latin'] })




export default function RootLayout({
  children, params: { locale }
}: {
  children: React.ReactNode, params: { locale: string }
}) {
  return (
    <I18nProviderClient locale={locale}>
      <html lang={locale} className='dark font-generalsans overflow-x-hidden'>
        <body className={inter.className}>
          <NextTopLoader showSpinner={false} />
          {children}
          <Analytics />
        </body>
      </html>
    </I18nProviderClient>
  )
}
