import { useState } from "react";
import FilterGames from "../components/games/FilterGames";
import GamesLists from "../components/games/GamesLists";
import Spinner from "../components/ui/Spinner";
import useRetreive from "../hooks/useRetreive";

function GamesPage() {
  const [genre, setGenre] = useState("all");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const handleReset = () => {
    setGenre("all");
    setSearch("");
  };

  const apiKey = import.meta.env.VITE_RAWG_API_KEY;
  const apiUrl = search
    ? `https://api.rawg.io/api/games?key=${apiKey}&search=${search}`
    : genre == "all"
      ? `https://api.rawg.io/api/games?key=${apiKey}&page=${page}`
      : `https://api.rawg.io/api/games?key=${apiKey}&genres=${genre}&page=${page}`;

  const { data, loading: isLoading, error } = useRetreive(apiUrl);

  if (error) console.log(error);

  if (isLoading) return <Spinner />;

  console.log(data);

  const tags = data.results.map((game) => [...game.tags]);
  console.log(tags);

  return (
    <div className="w-full px-4 py-6 lg:px-12">
      <FilterGames
        genre={genre}
        setGenre={setGenre}
        search={search}
        setSearch={setSearch}
        onReset={handleReset}
      />

      <GamesLists data={data} page={page} setPage={setPage} />
    </div>
  );
}

export default GamesPage;
