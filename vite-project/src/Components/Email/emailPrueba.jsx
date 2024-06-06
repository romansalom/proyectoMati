import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const EmailPrueba = () => {
  const form = useRef();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nkryj1p', 'template_vhojq2d', form.current, {
        publicKey: 'xKpm3cse7rdoAfbV1',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsModalOpen(false);
          setIsBannerVisible(true);
          setTimeout(() => setIsBannerVisible(false), 3000); // Ocultar el banner después de 3 segundos
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <>
      {isBannerVisible && (
        <div className="fixed top-0 left-0 w-full bg-green-500 text-white p-4 text-center">
          Email enviado con éxito
        </div>
      )}
      {isModalOpen && (
        <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
          <div className="w-full max-w-lg bg-white shadow-lg rounded-md p-6 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 cursor-pointer shrink-0 fill-[#333] hover:fill-red-500 float-right"
              viewBox="0 0 320.591 320.591"
              onClick={() => setIsModalOpen(false)}
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
            <div className="my-8 text-center">
              <h4 className="text-2xl text-[#333] font-semibold">
                Subscribe to our Newsletter
              </h4>
              <p className="text-sm text-gray-500 mt-4">
                Join thousands getting emails in their inbox.
              </p>
              <form ref={form} onSubmit={sendEmail} className="mt-6">
                <label className="block text-left text-gray-700">Name</label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Nombre"
                  className="px-4 py-3 mt-2 bg-[#f0f1f2] text-black w-full text-sm outline-[#333] rounded"
                />
                <label className="block text-left text-gray-700 mt-4">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  className="px-4 py-3 mt-2 bg-[#f0f1f2] text-black w-full text-sm outline-[#333] rounded"
                />

                <input
                  type="submit"
                  value="Send"
                  className="px-6 py-2.5 mt-4 w-full rounded text-white text-sm font-semibold border-none outline-none bg-[#333] hover:bg-[#222]"
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EmailPrueba;
