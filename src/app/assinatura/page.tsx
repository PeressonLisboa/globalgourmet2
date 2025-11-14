export default function Assinatura() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Assinatura Premium</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="text-xl font-semibold mb-4">Plano Básico</h3>
          <p className="text-2xl font-bold mb-4">R$ 9,99/mês</p>
          <ul className="text-left mb-6">
            <li>Acesso a todas as receitas</li>
            <li>Vídeos passo a passo</li>
            <li>Comentários ilimitados</li>
          </ul>
          <button className="bg-orange-600 text-white px-6 py-3 rounded hover:bg-orange-700">
            Assinar
          </button>
        </div>

        <div className="bg-orange-600 text-white p-6 rounded-lg shadow text-center">
          <h3 className="text-xl font-semibold mb-4">Plano Premium</h3>
          <p className="text-2xl font-bold mb-4">R$ 19,99/mês</p>
          <ul className="text-left mb-6">
            <li>Tudo do Básico</li>
            <li>Conteúdo exclusivo</li>
            <li>Receitas premium</li>
            <li>Suporte prioritário</li>
          </ul>
          <button className="bg-white text-orange-600 px-6 py-3 rounded hover:bg-gray-100">
            Assinar
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="text-xl font-semibold mb-4">Plano Anual</h3>
          <p className="text-2xl font-bold mb-4">R$ 99,99/ano</p>
          <ul className="text-left mb-6">
            <li>Tudo do Premium</li>
            <li>Desconto de 17%</li>
            <li>Acesso vitalício a novos conteúdos</li>
          </ul>
          <button className="bg-orange-600 text-white px-6 py-3 rounded hover:bg-orange-700">
            Assinar
          </button>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-4">Formas de Pagamento</h3>
        <p>Aceitamos: Cartão de Crédito (Visa, Mastercard, Amex), Transferência Bancária.</p>
      </div>
    </div>
  )
}