import CreatorCard from "./CreatorCard";
import useRetreive from "../../hooks/useRetreive.js";
import SpinnerBaseColorCyanHalf from "../SpinnerBaseColorCyanHalf.jsx";
import { creatorsUrl } from "../../utilities/utility.js";
import { useState } from "react";
import searchIcon from "../../assets/images/search.png";
import { Search } from "lucide-react";
function CreatorList() {
  const { loading, error, data } = useRetreive(creatorsUrl);

  const [filtrage, setFiltrage] = useState("");
  const [searching, setSearching] = useState(false);

  const trySearch = () => {
    setSearching(true);
  };

  const searchHandler = (e) => {
    setFiltrage(e.target.value);
  };

  const filteredCreators =
    filtrage.trim() === ""
      ? data?.results
      : data.results?.filter((creator) =>
          creator.name.toLowerCase().includes(filtrage.toLowerCase()),
        );

  if (loading) {
    return (
      <div className="relative z-10 min-h-screen flex justify-center items-center">
        <SpinnerBaseColorCyanHalf />
      </div>
    );
  } else if (error) {
    return <div>{error.message}</div>;
  } else {
    return (
      <div>
        <div
          onMouseEnter={() => trySearch()}
          className="flex justify-end items-center w-100 relative my-18"
        >
          <input
            onMouseLeave={() => {}}
            className="absolute transition duration-1000 ease-in-out border-2 text-white border-blue-400 w-full p-3 h-15 rounded-2xl"
            type="text"
            name="search"
            id="search"
            placeholder="Search creator"
            value={filtrage}
            onChange={(e) => searchHandler(e)}
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-h-screen">
          {filteredCreators.length > 0 ? (
            filteredCreators.map((creator) => (
              <CreatorCard key={creator.id} {...creator} />
            ))
          ) : (
            <p className="text-white text-center col-span-full">
              No creators found
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default CreatorList;
