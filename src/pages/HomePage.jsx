import React, { useState, useEffect } from 'react';
import NavBar from "../components/NavBar";

const Home = () => {
  const [trendingGames, setTrendingGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch 6 games mn RAWG API
    fetch('https://api.rawg.io/api/games?key=76d1df29683946cf98eefbe083e154fd&page_size=6')
      .then(res => res.json())
      .then(data => {
        setTrendingGames(data.results);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1220] text-white">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row h-[500px]">
        {/* Left Side: Content */}
        <div className="md:w-1/2 flex flex-col justify-center px-12 z-10">
          <h1 className="text-7xl font-black text-[#CBD5F5] tracking-tighter">EXPLORE</h1>
          <h1 className="text-6xl font-black bg-gradient-to-r from-[#6366F1] to-[#9CAAD7] bg-clip-text text-transparent leading-tight">
            THE WORD OF GAMES
          </h1>
          <p className="text-gray-400 mt-4 text-lg">
            discover amazing games, creators and experiences.
          </p>
          <button className="mt-8 bg-[#6366F1] hover:bg-[#5254e2] text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 w-fit transition-all">
            Show more <span>→</span>
          </button>
        </div>

        {/* Right Side: Image with Shadow Gradient */}
        <div className="md:w-1/2 relative overflow-hidden">
          {/* L-ombre li kityeb l-image (Dégradé shadow) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220] via-transparent to-transparent z-10"></div>
          <img 
            src="https://www.journaldugeek.com/app/uploads/2022/09/gta-6-map.jpg" 
            alt="Hero" 
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Trending Games */}
      <section className="px-12 py-12">
        <h2 className="text-2xl font-bold mb-8 tracking-widest uppercase">TRENDING GAMES</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {loading ? (
            <div className="col-span-full text-center py-10">Loading games...</div>
          ) : (
            trendingGames.map((game) => (
              <div key={game.id} className="bg-[#334155] rounded-xl overflow-hidden transition-transform hover:scale-105 cursor-pointer">
                <img src={game.background_image} alt={game.name} className="h-64 w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 truncate">{game.name}</h3>
                  <p className="text-[#CBD5F5] font-bold">⭐ {game.rating}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;