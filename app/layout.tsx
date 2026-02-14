import type { Metadata } from 'next'
import { Providers } from './providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'WebInsight Social - Collaborative Website Analytics',
  description: 'Transform website analytics into shareable, Farcaster-native social assets',
  openGraph: {
    title: 'WebInsight Social',
    description: 'Collaborative website analysis on Base',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
