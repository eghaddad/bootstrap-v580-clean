import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bootstrap v5.8.0 Clean',
  description: 'AGE-814 fix + AGE-811 security',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
