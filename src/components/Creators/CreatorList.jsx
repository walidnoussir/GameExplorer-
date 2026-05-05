import CreatorCard from "./CreatorCard";
import useRetreive from "../../hooks/useRetreive.js";
function CreatorList() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const secretKey = import.meta.env.VITE_SECRET_KEY;
  const apiKey = baseUrl + "creators?" + secretKey;

  const { loading, error, data } = useRetreive(apiKey);

  if (loading) {
    return <div>Loading</div>;
  } else if (error) {
    return <div>{error.message}</div>;
  } else {
    console.log("Data", data.results);
    return (
      <div className="grid md:grid-cols-4 gap-2.5 m-2 sm:grid-cols-3">
        {data.results.map((creator) => (
          <CreatorCard {...creator} />
        ))}
      </div>
    );
  }
}

export default CreatorList;
