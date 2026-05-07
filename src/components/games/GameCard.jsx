import { Link } from "react-router-dom";

function GameCard({ game }) {
  const { name, background_image, rating, released } = game;

  const year = new Date(released).getFullYear();

  return (
    <Link to={`/games/${game.id}`}>
      <div className="bg-slate-700 rounded-xl cursor-pointer">
        <img
          className="w-full h-[60%] rounded-tr-xl rounded-tl-xl"
          src={background_image}
          alt="game_image"
        />
        <h1 className="text-slate-50 font-bold p-2">{name}</h1>
        <div className="flex justify-between py-2 px-4">
          <span className="text-amber-300">{"⭐" + rating.toFixed(0)}</span>
          <p className="text-gray-400">{year}</p>
        </div>
      </div>
    </Link>
  );
}

export default GameCard;
