import { stripHTML } from "../../utilities/utility";
import CreatorTag from "./CreatorTag";

function CreatorInfo({
  name,
  description,
  positions,
  games_count,
  reviews_count,
  rating,
}) {
  console.log("positions : ", positions);

  return (
    <div className="flex-1 mr-1.5 ">
      <h3 className="text-white font-extrabold text-2xl ">{name}</h3>
      <p className="text-white font-light text-xl mt-5 ">
        {stripHTML(description)}
      </p>

      <div className="flex gap-2.5">
        {positions.map((position) => {
          console.log("position name : ", position.name);
          return (
            <h3 className="mt-5 text-white font-bold space-x-1.5 text-2xl">{`. ${position.name}`}</h3>
          );
        })}
      </div>

      <CreatorTag
        games_count={games_count}
        reviews_count={reviews_count}
        rating={rating}
      />
    </div>
  );
}

export default CreatorInfo;
