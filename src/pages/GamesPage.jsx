import { useState } from "react";
import FilterGames from "../components/games/FilterGames";
import GamesLists from "../components/games/GamesLists";
import Spinner from "../components/ui/Spinner";
import useRetreive from "../hooks/useRetreive";

function GamesPage() {
  const [genre, setGenre] = useState("all");
  const [page, setPage] = useState(1);

  const apiKey = import.meta.env.VITE_RAWG_API_KEY;
  const apiUrl =
    genre == "all"
      ? `https://api.rawg.io/api/games?key=${apiKey}&page=${page}`
      : `https://api.rawg.io/api/games?key=${apiKey}&genres=${genre}&page=${page}`;

  const { data, loading: isLoading, error } = useRetreive(apiUrl);

  if (error) console.log(error);

  if (isLoading) return <Spinner />;

  console.log(data);

  return (
    <div className="w-full px-4 py-6 lg:px-12">
      <FilterGames genre={genre} setGenre={setGenre} />

      <GamesLists data={data} page={page} setPage={setPage} />
    </div>
  );
}

export default GamesPage;
