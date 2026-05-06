import Text from "../Text";

const CreatorCard = ({ id, name, image }) => {
  return (
    <div
      key={id}
      className="bg-[#1E293B] rounded-2xl flex flex-col gap-2 h-80 justify-center items-center"
    >
      <img className="rounded-full size-50" src={image} alt="creator image" />
      <Text text={name} style={"font-extrabold text-white"} />
    </div>
  );
};

export default CreatorCard;
