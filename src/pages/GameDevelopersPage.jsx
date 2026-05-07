import { useParams } from "react-router-dom";
import Spinner from "../components/ui/Spinner";
import "../css/GameDevelopersPage.css";
import useRetreive from "../hooks/useRetreive";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

function GameDevelopersPage() {
  const { id } = useParams();
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = `https://api.rawg.io/api/games/3498?key=${apiKey}`;

  const { data, loading } = useRetreive(apiUrl);

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
                src={
                  "https://r2.photoaistudio.com/photo_demo_flux/packages/professional/photos2Results/m/photo8.jpeg"
                }
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