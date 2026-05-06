import GameCard from "./GameCard";

function GamesLists({ data }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.results.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

export default GamesLists;
