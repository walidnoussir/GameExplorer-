import { useParams } from "react-router-dom";
import useRetreive from "../../hooks/useRetreive";
import { creatorUrl } from "../../utilities/utility";
import SpinnerBaseColorCyanHalf from "../SpinnerBaseColorCyanHalf";
import CreatorImage from "./CreatorImage";
import CreatorInfo from "./CreatorInfo";

function CreatorProfile() {
  const { id } = useParams();
  const { loading, error, data } = useRetreive(creatorUrl(id));

  if (loading) {
    return (
      <div className="relative z-10 min-h-screen flex justify-center items-center">
        <SpinnerBaseColorCyanHalf />
      </div>
    );
  } else if (error) {
    return <div>{error.message}</div>;
  } else {
    const { image } = data;
    return (
      <div className="bg-slate-900 min-h-screen">
        <h3 className="text-blue-500 font-extrabold text-2xl ml-3">Game</h3>
        <h3 className="font-extrabold text-2xl text-blue-500 ml-6">Creators</h3>
        <div className="text-white mt-3.5 ml-3 flex gap-x-5">
          <CreatorImage image={image} />
          <CreatorInfo {...data} />
        </div>
      </div>
    );
  }
}

export default CreatorProfile;
