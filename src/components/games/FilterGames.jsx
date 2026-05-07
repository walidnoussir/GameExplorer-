import { ChevronDown } from "lucide-react";

function FilterGames({ setGenre, genre }) {
  // console.log(data);
  const genres = ["Action", "RPG", "Shooter", "Adventure", "Indie"];

  return (
    <div className="py-8">
      <div className="relative md:w-70 lg:w-55">
        <select
          name="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          id="genre"
          className="w-full
      appearance-none
      rounded-xl
      border border-[#2A3A5A]
      bg-[#18243D]
      px-5
      py-3
      text-sm
      text-[#B8C1D9]
      outline-none
      transition
      focus:border-[#4F7CFF]
      focus:ring-2
      focus:ring-[#4F7CFF]/40
      cursor-pointer
    "
        >
          <option value="all">All</option>
          {genres.map((genre) => (
            <option key={genre} value={genre.toLowerCase()}>
              {genre}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#B8C1D9]">
          <ChevronDown className="text-gray-700" />
        </div>
      </div>
    </div>
  );
}

export default FilterGames;
