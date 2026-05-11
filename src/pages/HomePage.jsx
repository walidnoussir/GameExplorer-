import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [trendingGames, setTrendingGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.rawg.io/api/games?key=76d1df29683946cf98eefbe083e154fd&page_size=6')
      .then(res => res.json())
      .then(data => {
        setTrendingGames(data.results);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1220] text-white">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row h-[500px] relative overflow-hidden">
        <div className="md:w-1/2 flex flex-col justify-center px-12 z-20">
          <h1 className="text-7xl font-black text-[#CBD5F5] tracking-tighter leading-none">
            EXPLORE
          </h1>
          <h1 className="text-6xl font-black bg-gradient-to-r from-[#6366F1] to-[#9CAAD7] bg-clip-text text-transparent leading-tight uppercase">
            THE WORD OF GAMES
          </h1>
          <p className="text-gray-400 mt-4 text-lg max-w-md">
            discover amazing games, creators and experiences.
          </p>
          
          <Link 
            to="/games" 
            className="mt-8 bg-[#6366F1] hover:bg-[#5254e2] text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 w-fit transition-all shadow-lg"
          >
            Show more <span>→</span>
          </Link>
        </div>

        <div className="md:w-1/2 relative">
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
        <h2 className="text-xl font-bold mb-8 tracking-widest uppercase text-white">
          TRENDING GAMES
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {loading ? (
            <div className="col-span-full text-center py-10 text-gray-400">Loading games...</div>
          ) : (
            trendingGames.map((game) => (
              <Link 
                to={`/games/${game.id}`} 
                key={game.id} 
                className="group"
              >
                <div className="bg-[#1F2937] rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-105 shadow-md">
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={game.background_image} 
                      alt={game.name} 
                      className="h-full w-full object-cover" 
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-bold text-sm text-white truncate leading-tight">
                      {game.name}
                    </h3>
                    <div className="flex items-center mt-1">
                      <span className="text-yellow-400 text-xs">⭐</span>
                      <span className="text-gray-400 text-xs font-bold ml-1">
                        {game.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;