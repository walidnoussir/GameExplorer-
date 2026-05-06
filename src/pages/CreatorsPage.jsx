import CreatorList from "../components/Creators/CreatorList";

function CreatorsPage() {
  return (
    <div className="bg-slate-900 p-2">
      <h3 className="text-blue-500 font-extrabold text-2xl  ml-3">Game</h3>
      <h3 className="font-extrabold text-2xl text-blue-500 ml-6">Creators</h3>
      <div className="mb-3.5"></div>
      <CreatorList />
    </div>
  );
}

export default CreatorsPage;
