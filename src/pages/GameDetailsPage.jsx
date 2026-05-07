import axios from "axios";
import { useParams, Link} from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../components/ui/Spinner";
import CityLogo from "../Logos/city-logo.png";
import PngEgg from "../Logos/pngegg.png";
import SonyLogo from "../Logos/sony-logo.png";
import "../Details.css";
import PopapDetails from "./PopapDetails";

function GameDetailsPage() {
  const [ispopap, setPopap] = useState(false);
  const [game, setGeme] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { game_id } = useParams();
  const Api_key = "9fe5f5d4da204bac8dbfda225c150524";

  const closePopupDetails = () => {
    setPopap(false);
  };
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
  if (isLoading) return <Spinner />;
  return (
    <div className="game-details">
      <div className="game-images">
        <img
          className="main-image"
          src={game.background_image}
          alt={game.name}
        />

        <div className="images-small" onClick={() => setPopap(true)}>
          <img src={game.background_image_additional} />
          <img src={game.background_image_additional} />
          <img src={game.background_image_additional} />
        </div>
      </div>
      {ispopap && (
        <PopapDetails
          image={game.background_image_additional}
          closePopup={closePopupDetails}
        />
      )}
      <div className="game-info">
        <h1>{game.name}</h1>

        <p className="rating">⭐ {game.rating}</p>

        <p className="release">Release Date : {game.released}</p>

        <div className="genres">
          {game.genres.map((genre) => (
            <span className="catigo" key={genre.id}>
              {genre.name}
            </span>
          ))}
        </div>

        <div className="platforms">
          <img src={CityLogo} />
          <img src={PngEgg} />
          <img src={SonyLogo} />
        </div>

        <p className="description">{game.description_raw}</p>
          <Link to = "/games/{game_id}/developers-team">
            <button className="dev-btn">View Developers</button>
          </Link>
      </div>
    </div>
  );
}

export default GameDetailsPage;
