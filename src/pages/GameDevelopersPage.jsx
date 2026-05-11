import { useParams } from "react-router-dom";
import Spinner from "../components/ui/Spinner";
import "../css/GameDevelopersPage.css";
import useRetreive from "../hooks/useRetreive";
// import { faUsers } from "@fortawesome/free-solid-svg-icons";

function GameDevelopersPage() {
  const { game_id: id } = useParams();
  const apiKey = import.meta.env.VITE_RAWG_API_KEY;
  const apiUrl = `https://api.rawg.io/api/games/${id}?key=${apiKey}`;

  const { data, loading } = useRetreive(apiUrl);
  console.log(id);

  if (loading) return <Spinner />;

  return (
    <section className="developers-page">
      <h1 className="page-title">
        {/* <FontAwesomeIcon icon={faUsers} className="title-icon" /> */}
        Game Developers
      </h1>

      <div className="developers-grid">
        {data?.developers?.map((dev) => (
          <article className="dev-card">
            <div className="img-container">
              <img
                src={dev.image_background}
              />
            </div>

            <div className="dev-info">
              <h2>{dev.name}</h2>
              {/* <h2>devlopper</h2> */}
              <p className="role">{dev.slug}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default GameDevelopersPage;
