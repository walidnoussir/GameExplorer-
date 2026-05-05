import CreatorCard from "./CreatorCard";
import useRetreive from "../../hooks/useRetreive.js";
import SpinnerBaseColorCyanHalf from "../SpinnerBaseColorCyanHalf.jsx";
import { apiKey } from "../../utilities/utility.js";
function CreatorList() {
  const { loading, error, data } = useRetreive(apiKey);

  if (loading) {
    return (
      <div className="relative z-10 min-h-screen flex justify-center items-center">
        <SpinnerBaseColorCyanHalf />
      </div>
    );
  } else if (error) {
    return <div>{error.message}</div>;
  } else {
    console.log("Data", data.results);
    return (
      <div className="grid md:grid-cols-4 gap-2.5 m-2 sm:grid-cols-3">
        {data.results.map((creator) => (
          <CreatorCard key={creator.id} {...creator} />
        ))}
      </div>
    );
  }
}

export default CreatorList;
