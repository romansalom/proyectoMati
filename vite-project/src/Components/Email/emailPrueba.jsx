import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const EmailPrueba = () => {
  const form = useRef();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    if (isFormSubmitted) return; // Evitar que el formulario se envíe de nuevo

    setIsLoading(true);

    emailjs
      .sendForm('service_nkryj1p', 'template_vhojq2d', form.current, {
        publicKey: 'xKpm3cse7rdoAfbV1',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsLoading(false);
          setIsFormSubmitted(true);
          setConfirmationMessage('✔️ Enviado con éxito');
          setTimeout(() => {
            setIsModalOpen(false);
            setConfirmationMessage('');
          }, 3000); // Cerrar el modal después de 3 segundos
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsLoading(false);
        }
      );
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 p-4 flex justify-center items-center z-50 bg-black bg-opacity-50">
          <div
            className="w-full max-w-lg bg-white shadow-xl rounded-xl p-6 relative"
            style={{ zoom: '80%' }} // Desactivar el zoom en dispositivos móviles
          >
            {!isFormSubmitted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 cursor-pointer fill-gray-500 hover:fill-red-500 absolute top-4 right-4"
                viewBox="0 0 320.591 320.591"
                onClick={() => setIsModalOpen(false)}
              >
                <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"></path>
                <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"></path>
              </svg>
            )}
            <div className=" text-center">
              {isLoading ? (
                <div className="flex justify-center items-center">
                  <div className="loader">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 animate-spin fill-blue-600 block mx-auto"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
                        data-original="#000000"
                      />
                    </svg>
                  </div>{' '}
                  {/* Añade un spinner de carga aquí */}
                </div>
              ) : confirmationMessage ? (
                <div className="text-green-500 text-xl font-semibold">
                  {confirmationMessage}
                </div>
              ) : (
                <>
                  <h4 className="text-2xl text-gray-800 font-semibold">
                    Subscribe to our Newsletter
                  </h4>
                  <p className="text-sm text-gray-500 mt-4">
                    Join thousands getting emails in their inbox.
                  </p>
                  <form ref={form} onSubmit={sendEmail} className="mt-6">
                    <label className="block text-left text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      placeholder="Nombre"
                      className="px-4 py-3 mt-2 bg-gray-100 text-black w-full text-sm rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <label className="block text-left text-gray-700 mt-4">
                      Email
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Email"
                      className="px-4 py-3 mt-2 bg-gray-100 text-black w-full text-sm rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <label className="block text-left text-gray-700 mt-4">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="user_Phone"
                      placeholder="Phone"
                      className="px-4 py-3 mt-2 bg-gray-100 text-black w-full text-sm rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <input
                      type="submit"
                      value="Send"
                      className="px-6 py-2.5 mt-4 w-full rounded text-white text-sm font-semibold bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EmailPrueba;
