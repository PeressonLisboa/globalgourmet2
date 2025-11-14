import Link from 'next/link'

// Dados mockados para receitas
const recipes = [
  { id: 1, title: 'Paella Espanhola', region: 'Europa', image: '/paella.jpg', rating: 4.8 },
  { id: 2, title: 'Feijoada Brasileira', region: 'América do Sul', image: '/feijoada.jpg', rating: 4.9 },
  { id: 3, title: 'Tacos Mexicanos', region: 'América Latina', image: '/tacos.jpg', rating: 4.7 },
  // Adicionar mais receitas...
]

export default function Receitas() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Nossas Receitas</h2>

      <div className="mb-8">
        <input type="text" placeholder="Buscar receitas..." className="border p-2 rounded w-full md:w-1/2" />
        <div className="mt-4">
          <label className="mr-4">Região:</label>
          <select className="border p-2 rounded">
            <option>Todas</option>
            <option>Europa</option>
            <option>América Latina</option>
            <option>América do Sul</option>
          </select>
          <label className="ml-4 mr-4">Dieta:</label>
          <select className="border p-2 rounded">
            <option>Todas</option>
            <option>Vegana</option>
            <option>Vegetariana</option>
            <option>Sem Glúten</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {recipes.map(recipe => (
          <div key={recipe.id} className="bg-white rounded-lg shadow overflow-hidden">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
              <p className="text-gray-600 mb-2">{recipe.region}</p>
              <p className="text-yellow-500 mb-4">⭐ {recipe.rating}/5</p>
              <Link href={`/receitas/${recipe.id}`} className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">
                Ver Receita
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}