import { ChevronDown, Search } from "lucide-react";

function FilterGames({ setGenre, genre, search, setSearch, onReset }) {
  // console.log(data);
  const genres = ["Action", "RPG", "Shooter", "Adventure", "Indie"];

  return (
    <div className="py-8 flex flex-col md:flex-row gap-4">
      <div className="relative md:w-70 lg:w-55">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search games..."
          className="
      w-full
      rounded-xl
      border border-[#2A3A5A]
      bg-[#18243D]
      px-5
      py-3
      pr-12
      text-sm
      text-white
      placeholder:text-[#8B95A7]
      outline-none
      transition
      focus:border-[#4F7CFF]
      focus:ring-2
      focus:ring-[#4F7CFF]/40
    "
        />

        {/* Search Icon */}
        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#8B95A7]">
          <Search />
        </div>
      </div>

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
      <button
        onClick={onReset}
        className="
    rounded-xl cursor-pointer
    border border-[#2A3A5A]
    bg-[#18243D]
    px-6
    py-3
    text-sm
    font-medium
    text-[#B8C1D9]
    transition
    hover:border-[#4F7CFF]
    hover:text-white
    hover:bg-[#1D2B4A]
    active:scale-95
  "
      >
        Reset
      </button>
    </div>
  );
}

export default FilterGames;
