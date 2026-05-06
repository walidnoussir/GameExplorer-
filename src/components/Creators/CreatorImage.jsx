function CreatorImage({ image }) {
  return (
    <div className=" size-141 rounded-2xl bg-blue-50/35 flex justify-center items-center">
      <img className="rounded-2xl size-140" src={image} alt="creator image" />
    </div>
  );
}

export default CreatorImage;
