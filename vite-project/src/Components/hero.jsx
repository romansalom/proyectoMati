import ImageComparisonSlider from './SliderImagen/sliderImage';
import './heroe.css';

export const Heroe = () => {
  return (
    <div className="playfair-display-letras text-[#333] max-w-6xl mx-auto md:mt-10 mt-10 mb-0 ">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-yellow-100 to-red-300 opacity-50 blur-3xl"></div>
      <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
        <div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-[#333] sm:text-4xl">
              Transformamos tu espacio vacío en un departamento, moderno,
              estético y funcional.
            </h3>
          </div>
          <hr className="mt-10" />
        </div>
        <div className="md:hidden">
          <div className="relative z-10">
            <ImageComparisonSlider />
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center relative">
          <div className="relative z-10">
            <ImageComparisonSlider />
          </div>
        </div>
      </div>
    </div>
  );
};
