function Tag({ image, name, tag }) {
  return (
    <div className="flex gap-2.5 justify-center items-center">
      <img className="size-14 rounded" src={image} alt="image" />
      <h3 className="text-white font-extrabold text-2xl ">{tag}</h3>
      <h3 className="text-white font-extrabold text-2xl ">{name}</h3>
    </div>
  );
}

export default Tag;
