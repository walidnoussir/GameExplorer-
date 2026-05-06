import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function GameDetailsPage() {
  const [game, setGeme] = useState();
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
      }
    }
    fetchGeme();
  }, [game_id]);
  // if (!game) {
  //   return <h3>Loading...</h3>;
  // }
  if (game) return <Spinner />;
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
