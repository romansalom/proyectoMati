import ImageComparisonSlider from './SliderImagen/sliderImage';

export const Heroe = () => {
  return (
    <div className="font-sans text-[#333] max-w-6xl mx-auto mt-20 mb-0">
      <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
        <div className="md:hidden">
          <div className="relative z-10">
            <ImageComparisonSlider></ImageComparisonSlider>
          </div>
        </div>
        <div>
          <h2 className="md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[55px]">
            Lorem ipsum dolor sit amet consectetur
          </h2>
          <p className="mt-4 text-base text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            itaque ut deleniti mollitia blanditiis nesciunt maxime, minus,
          </p>
          <div className="mt-10 space-x-4">
            <button
              type="button"
              className="bg-blue-600 hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all text-white font-bold text-sm rounded-full px-6 py-2.5"
            >
              Get started
            </button>
            <button
              type="button"
              className="bg-transparent hover:bg-blue-600 hover:text-white border-2 border-blue-500 transition-all text-blue-600 font-bold text-sm rounded-full px-6 py-2.5"
            >
              Learn more
            </button>
          </div>
          <hr className="mt-10" />
        </div>
        <div className="hidden md:flex items-center justify-center relative">
          <div className="relative z-10">
            <ImageComparisonSlider></ImageComparisonSlider>
          </div>
        </div>
      </div>
    </div>
  );
};
