import { useParams } from "react-router-dom";

function CreatorProfile() {
  const creatorId = useParams();
  console.log("creatorId", creatorId);
  return <div>CreatorProfile{creatorId}</div>;
}

export default CreatorProfile;
