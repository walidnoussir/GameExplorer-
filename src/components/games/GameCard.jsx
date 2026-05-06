function GameCard({ game }) {
  const { name, background_image, rating, released } = game;

  return (
    <div className="bg-slate-700 rounded-xl">
      <img
        className="w-full h-[60%] rounded-tr-xl rounded-tl-xl"
        src={background_image}
        alt="game_image"
      />
      <h1>{name}</h1>
      <div>
        <span>{"⭐" + rating}</span>
        <p>{released}</p>
      </div>
    </div>
  );
}

export default GameCard;
