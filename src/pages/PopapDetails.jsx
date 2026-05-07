function PopapDetails({ image, closePopup }) {
  return (
    <div className="fixed inset-0 bg-slate-800/60 bg-opacity-50 flex items-center justify-center  flex-col backdrop-blur-md z-100">
      <div className="relative w-[60%]" onClick={closePopup}>
        <button className="absolute top-0 right-0 text-2xl bg-white/50 text-white h-8 w-8 rounded-full cursor-pointer">
          X
        </button>

        <img src={image} alt="image" />
      </div>
    </div>
  );
}

export default PopapDetails;
