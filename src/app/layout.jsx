import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Web Music Player',
  description: 'Web Music Player',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt_br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
