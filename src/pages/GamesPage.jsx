import GamesLists from "../components/games/GamesLists";
import Spinner from "../components/ui/Spinner";
import useRetreive from "../hooks/useRetreive";

function GamesPage() {
  const apiKey = "9fe5f5d4da204bac8dbfda225c150524";
  const apiUrl = `https://api.rawg.io/api/games?key=${apiKey}`;

  console.log(apiUrl);
  const { data, loading: isLoading, error } = useRetreive(apiUrl);

  console.log(data);

  if (error) console.log(error);

  if (isLoading) return <Spinner />;

  return (
    <div className="py-6 px-12">
      <GamesLists data={data} />
    </div>
  );
}

export default GamesPage;
