import type { Metadata } from 'next'
import './globals.css'
import { Roboto_Mono } from 'next/font/google'

export const metadata: Metadata = {
  title: 'WAKA VAPE',
}

const robotoMono = Roboto_Mono({ weight: ['400', '700'], subsets: ['cyrillic', 'latin'], display: 'swap', variable: '--font-roboto-mono' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={robotoMono.variable}>
      <body>{children}</body>
    </html>
  )}
