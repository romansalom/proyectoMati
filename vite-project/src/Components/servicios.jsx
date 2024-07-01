import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './heroe.css';

export const Servicios = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className="py-20 relative mt-5">
      <div className="absolute inset-0 bg-gradient-to-br from-red-200 via-yellow-100 to-blue-200 opacity-50 blur-3xl"></div>

      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative max-w-2xl mx-auto sm:text-center">
          <div className="relative z-10" data-aos="fade-up">
            <h3 className="playfair-display-letras text-3xl font-extrabold text-[#333] sm:text-4xl">
              Sobre Nosotros
            </h3>
          </div>
        </div>
        <div className="relative mt-10 md:grid md:grid-cols-2 md:gap-8 items-center">
          <div className="relative z-10">
            <p className="mt-3 relative aos-init" data-aos="fade-up">
              <span className="absolute left-0 top-3 transform -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full"></span>
              <span className="playfair-display-letras ml-6 block">
                Mejoramos la experiencia de compra de nuestros consumidores.
                Quien nos elige recibe un paquete completo con todo lo necesario
                para mudarse directo con su valija o listo para ser alquilado.
              </span>
            </p>
            <p
              className="mt-10 relative aos-init"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className="absolute left-0 top-3 transform -translate-y-1/2 w-2 h-2 bg-yellow-500 rounded-full"></span>
              <span className="playfair-display-letras ml-6 block">
                Mejoramos la experiencia de compra de nuestros consumidores.
                Quien nos elige recibe un paquete completo con todo lo necesario
                para mudarse directo con su valija o listo para ser alquilado.
              </span>
            </p>
            <p
              className="mt-10 relative aos-init"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span className="absolute left-0 top-3 transform -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full"></span>
              <span className="playfair-display-letras ml-6 block">
                Mejoramos la experiencia de compra de nuestros consumidores.
                Quien nos elige recibe un paquete completo con todo lo necesario
                para mudarse directo con su valija o listo para ser alquilado.
              </span>
            </p>
          </div>
          <div
            className="relative mt-6 md:mt-0 flex justify-center"
            data-aos="fade-up"
          >
            <img
              src="logokts.png"
              alt="Sobre Nosotros"
              className="w-full max-w-xs h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
