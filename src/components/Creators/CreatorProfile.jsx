import { useParams } from "react-router-dom";
import useRetreive from "../../hooks/useRetreive";
import { creatorUrl } from "../../utilities/utility";
import SpinnerBaseColorCyanHalf from "../SpinnerBaseColorCyanHalf";

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
    return (
      <div className="bg-slate-900">
        <div className="text-white">{data.name}</div>
      </div>
    );
  }
}

export default CreatorProfile;
