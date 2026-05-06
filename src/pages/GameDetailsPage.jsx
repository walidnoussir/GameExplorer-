import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../components/ui/Spinner";

function GameDetailsPage() {
  const [game, setGeme] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { game_id } = useParams();
  const Api_key = "9fe5f5d4da204bac8dbfda225c150524";
  useEffect(() => {
    console.log("id", game_id);

    async function fetchGeme() {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games/${game_id}?key=${Api_key}`,
        );
        console.log(response.data.description_raw);

        setGeme(response.data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchGeme();
  }, [game_id]);
  console.log(game);
  
  // if (!game) {
  //   return <h3>Loading...</h3>;
  // }
  if (isLoading) return <Spinner />;
  return (
    <div>
      {/* <img src ={game.background_image}  alt ={game.name} /> */}
      {/* <img src ={game.background_image_additional}  alt ={game.name} /> */}
      <h1>{game.name}</h1>
      {/* <p> {game.description_raw} </p> */}
    </div>
  );
}

export default GameDetailsPage;
