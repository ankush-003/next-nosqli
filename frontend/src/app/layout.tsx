import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NoSQLi Detector',
  description: 'Detect NoSQL Injection in your MongoDB queries',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen bg-[url(../../public/bg.svg)] bg-cover`}>{children}</body>
    </html>
  )
}
