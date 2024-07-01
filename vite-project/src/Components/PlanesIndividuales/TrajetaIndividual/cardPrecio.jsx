import { useState } from 'react';
import '../../heroe.css';
import './styles.css';

const PirceddPrice = () => {
  const [activeTab, setActiveTab] = useState('description'); // Estado para controlar la pestaña activa

  // Función para cambiar la pestaña activa
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="contenedore-zoomes">
      {' '}
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="relative z-10">
          <h3 className="playfair-display-letras text-3xl font-extrabold text-[#333] sm:text-4xl mt-10">
            Nuestras Lineas{' '}
          </h3>
        </div>

        <div className="container px-5 py-20 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="playfair-display-letras text-sm title-font text-gray-500 tracking-widest">
                Linea{' '}
              </h2>
              <h1 className="playfair-display-letras text-gray-900 text-3xl title-font font-medium mb-4">
                Airbnb Standard{' '}
              </h1>

              <div className="flex mb-4">
                <a
                  className={`playfair-display-letras flex-grow ${
                    activeTab === 'description'
                      ? 'text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1'
                      : 'border-b-2 border-gray-300 py-2 text-lg px-1'
                  }`}
                  onClick={() => handleTabClick('description')}
                >
                  Description
                </a>
                <a
                  className={`playfair-display-letras flex-grow ${
                    activeTab === 'reviews'
                      ? 'text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1'
                      : 'border-b-2 border-gray-300 py-2 text-lg px-1'
                  }`}
                  onClick={() => handleTabClick('reviews')}
                >
                  Reviews
                </a>
                <a
                  className={`playfair-display-letras flex-grow ${
                    activeTab === 'details'
                      ? 'text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1'
                      : 'border-b-2 border-gray-300 py-2 text-lg px-1'
                  }`}
                  onClick={() => handleTabClick('details')}
                >
                  Details
                </a>
              </div>
              {activeTab === 'description' && (
                <p className="playfair-display-letras leading-relaxed mb-4">
                  La linea Airbnb Standard contiene un diseño bueno bonito
                  barato para empezar hacer rendir tu departamento
                </p>
              )}
              {activeTab === 'reviews' && (
                <div className="playfair-display-letras flex border-t border-gray-200 py-2">
                  <span className="text-gray-500">Reviews Content</span>
                  {/* Aquí puedes colocar el contenido específico para Reviews */}
                </div>
              )}
              {activeTab === 'details' && (
                <div className="playfair-display-letras flex border-t border-gray-200 py-2">
                  <span className="text-gray-500">Details Content</span>
                  {/* Aquí puedes colocar el contenido específico para Details */}
                </div>
              )}
              <div className="playfair-display-letras flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Color</span>
                <span className="ml-auto text-gray-900">Blue</span>
              </div>
              <div className="playfair-display-letras flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Size</span>
                <span className="ml-auto text-gray-900">Medium</span>
              </div>
              <div className="playfair-display-letras flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">Quantity</span>
                <span className="ml-auto text-gray-900">4</span>
              </div>
              <div className="playfair-display-letras flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  $58.00
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PirceddPrice;
