import { useState, useEffect } from "react"
import { Link } from "react-router-dom" // ← بدل useNavigate
import axios from "axios"

const API_KEY = "9fe5f5d4da204bac8dbfda225c150524"

function GamesPage() {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games?key=${API_KEY}`
        )
        setGames(response.data.results)
        setLoading(false)
      } catch (error) {
        console.error("Error:", error)
      }
    }
    fetchGames()
  }, [])

  if (loading) return <h3 className="text-white">Loading...</h3>

  return (
    <div className="bg-slate-900 h-full p-6">
      <div className="grid grid-cols-4 gap-4">
        {games.map((game) => (
          <Link 
            to={`/games/${game.id}`} 
            key={game.id}
            className="bg-slate-700 rounded-lg hover:bg-slate-600"
          >
            <img
              src={game.background_image}
              alt={game.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-3">
              <h3 className="text-white font-bold">{game.name}</h3>
              <p className="text-slate-400 text-sm">⭐ {game.rating}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default GamesPage