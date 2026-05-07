import Tag from "./Tag";
import gameImage from "../../assets/images/game.png";
import RatingImage from "../../assets/images/rating.png";
import reviewImage from "../../assets/images/review.png";

function CreatorTag({ games_count, reviews_count, rating }) {
  return (
    <div className="flex gapx-10 mt-6 justify-around ">
      <Tag image={gameImage} name={"Games"} tag={games_count} />
      <Tag image={RatingImage} name={"Rate"} tag={rating} />
      <Tag image={reviewImage} name={"Review"} tag={reviews_count} />
    </div>
  );
}

export default CreatorTag;
