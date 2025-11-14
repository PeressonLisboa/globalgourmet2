import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Global Gourmet',
  description: 'Descubra receitas deliciosas de todo o mundo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <header className="bg-orange-600 text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Global Gourmet</h1>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:underline">Início</a></li>
              <li><a href="/receitas" className="hover:underline">Receitas</a></li>
              <li><a href="/sobre" className="hover:underline">Sobre</a></li>
              <li><a href="/assinatura" className="hover:underline">Assinatura Premium</a></li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Global Gourmet. Todos os direitos reservados.</p>
            <div className="mt-2">
              <a href="/termos" className="hover:underline mr-4">Termos de Uso</a>
              <a href="/privacidade" className="hover:underline">Política de Privacidade</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}