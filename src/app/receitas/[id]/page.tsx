import { notFound } from 'next/navigation'

// Dados mockados
const recipes = {
  1: {
    title: 'Paella Espanhola',
    ingredients: ['Arroz', 'Frango', 'Camarão', 'Açafrão'],
    steps: ['Cozinhe o arroz', 'Adicione os ingredientes', 'Sirva quente'],
    video: 'https://example.com/video',
    comments: [
      { user: 'João', comment: 'Deliciosa!', rating: 5 },
      { user: 'Maria', comment: 'Fácil de fazer', rating: 4 }
    ]
  },
  // Adicionar mais...
}

export default function Receita({ params }: { params: { id: string } }) {
  const recipe = recipes[params.id as keyof typeof recipes]

  if (!recipe) {
    notFound()
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">{recipe.title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Ingredientes</h3>
          <ul className="list-disc list-inside">
            {recipe.ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Passos</h3>
          <ol className="list-decimal list-inside">
            {recipe.steps.map((step, i) => (
              <li key={i} className="mb-2">{step}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Vídeo</h3>
        <video controls className="w-full max-w-2xl">
          <source src={recipe.video} type="video/mp4" />
        </video>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Comentários</h3>
        {recipe.comments.map((c, i) => (
          <div key={i} className="bg-gray-100 p-4 rounded mb-4">
            <p className="font-semibold">{c.user}</p>
            <p>{c.comment}</p>
            <p className="text-yellow-500">⭐ {c.rating}/5</p>
          </div>
        ))}
      </div>
    </div>
  )
}