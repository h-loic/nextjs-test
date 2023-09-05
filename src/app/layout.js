import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Un Stage Et Après',
  description: "Jouer le jeu de l'orientation",
  keywords: ['Orientation', 'Mon stage de troisième', "Stage d'observation", 'Cadran Scolaire',],
  authors: [{ name: 'Un Stage Et Après' }],
  creator: 'Un Stage Et Après',
  publisher: 'Un Stage Et Après',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
