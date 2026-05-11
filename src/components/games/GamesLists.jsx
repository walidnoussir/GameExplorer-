import GameCard from "./GameCard";
import { SkipBack, SkipForward } from "lucide-react";

function GamesLists({ data, setPage, page }) {
  // const itemsPerPage = 8;
  // const totalPages = Math.ceil(data.results.length / itemsPerPage);

  // const [currPage, setCurrPage] = useState(1);

  // const startIndex = (currPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;

  const handleNext = () => {
    setPage((page) => page + 1);
  };
  const handlePrevious = () => {
    setPage((page) => page - 1);
  };

  // console.log(data);

  return (
    <div className="w-full flex flex-col justify-between gap-5">
      <div className="grid grid-cols-1 w-full h-[90%] md:grid-cols-2 lg:grid-cols-4 gap-4 justify-between">
        {data.results.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      <div className="w-full flex justify-center items-center gap-8">
        <button
          className="flex items-center gap-1.5 border-none bg-blue-500 rounded-lg py-1 px-2.5 text-slate-50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handlePrevious}
        >
          <SkipBack />
        </button>
        <p className="text-white font-bold px-2 bg-blue-500 rounded-md">
          {page}
        </p>
        <button
          className="flex items-center gap-1.5 border-none bg-blue-500 rounded-lg py-1 px-2.5 text-slate-50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleNext}
        >
          <SkipForward />
        </button>
      </div>
    </div>
  );
}

export default GamesLists;
