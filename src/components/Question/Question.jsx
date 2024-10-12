import BrideImg from "../../assets/img/bride2.png";

export default function Question() {
  return (
    <section className="flex flex-col md:flex-row items-center px-5">
      {/* Left side image */}
      <div className="py-8 md:w-1/4 pt-10">
        <img className="px-10 w-full md:w-auto" src={BrideImg} alt="Bride" />
      </div>

      {/* Middle text and buttons */}
      <div className="md:w-1/2 flex justify-center">
        <div className="md:flex flex-col justify-center text-center">
          <h1 className="text-4xl md:text-6xl text-black font-semibold mb-3">
            මැහුම් පාඨමාලාවට ඇතුලත් වීමට ඔබ සූදානම්ද ?
          </h1>
          <button className="primary-btn bg-primary text-white px-4 py-2 md:px-6 md:py-4 rounded-full text-lg md:text-xl mt-6 md:mt-10">
            ඔව් මම සුදා නම්
          </button>
          <button className="secondary-btn bg-secondary text-white px-4 py-2 rounded-full text-sm md:text-md mt-4">
            තව විස්තර බලන්න
          </button>
        </div>
      </div>

      {/* Right side image (duplicate) */}
      <div className="py-8 md:w-1/4 pt-10">
        <img className="px-10 w-full md:w-auto" src={BrideImg} alt="Bride" />
      </div>
    </section>
  );
}
