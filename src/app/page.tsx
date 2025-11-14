import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <section className="hero bg-gradient-to-r from-orange-400 to-red-500 text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Bem-vindo ao Global Gourmet</h2>
        <p className="text-xl mb-8">Descubra receitas deliciosas de todo o mundo, com foco na Europa, América Latina e América do Sul.</p>
        <Link href="/receitas" className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
          Explorar Receitas
        </Link>
      </section>

      <section className="features py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Características do Nosso Site</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">Mais de 500 Receitas</h4>
            <p>De pratos tradicionais a opções modernas e criativas.</p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">Vídeos e Fotos Passo a Passo</h4>
            <p>Ajuda visual para preparar cada prato com facilidade.</p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">Avaliações e Comentários</h4>
            <p>Opiniões de outros usuários para escolher as melhores receitas.</p>
          </div>
        </div>
      </section>

      <section className="news py-16 bg-gray-100">
        <h3 className="text-3xl font-bold text-center mb-12">Notícias e Tendências Culinárias</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-xl font-semibold mb-4">Novas Tendências em Cozinha Italiana</h4>
            <p>Descubra como os chefs estão reinventando pratos clássicos italianos.</p>
          </article>
          <article className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-xl font-semibold mb-4">Receitas Veganas da América Latina</h4>
            <p>Explore opções deliciosas e saudáveis de nossa região.</p>
          </article>
        </div>
      </section>
    </div>
  )
}