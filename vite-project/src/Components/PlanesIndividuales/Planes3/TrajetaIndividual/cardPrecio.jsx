import './styles.css';

const PirceddPrice3 = () => {
  return (
    <div className="  contenedore-zoom   ">
      <div className="container mx-auto px-6 py-20 md:px-12 lg:px-20 ">
        <div className="text-center lg:w-8/12 xl:w-7/12 mx-auto "></div>

        <div className=" mt-20 flex flex-col md:flex-row items-center justify-center md:space-x-4 xl:w-10/12 mx-auto  ">
          <div className="relative z-10 group md:w-6/12 lg:w-5/12 mb-8 md:mb-0 md:mx-0">
            <div
              aria-hidden="true"
              className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition-transform duration-500 transform group-hover:scale-105 lg:group-hover:scale-110"
            ></div>
            <div className="relative p-6 space-y-6 lg:p-8">
              <h3 className="text-3xl text-gray-700 font-semibold text-center">
                Plan 1
              </h3>
              <div className="flex justify-around">
                <div className="flex items-end">
                  <span className="text-8xl text-gray-800 font-bold leading-none">
                    35
                  </span>
                  <div className="pb-2">
                    <span className="block text-2xl text-gray-700 font-bold">
                      %
                    </span>
                    <span className="block text-xl text-blue-600 font-bold">
                      Off
                    </span>
                  </div>
                </div>
              </div>
              <ul
                role="list"
                className="w-max space-y-4 py-6 mx-auto text-gray-600"
              >
                <li className="flex items-center space-x-2">
                  <span className="text-blue-600 font-semibold">&check;</span>
                  <span>First premium advantage</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-600 font-semibold">&check;</span>
                  <span>Second advantage weekly</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-600 font-semibold">&check;</span>
                  <span>Third advantage donate to project</span>
                </li>
              </ul>
              <p className="flex items-center justify-center space-x-4 text-lg text-gray-600 text-center">
                <span>Call us at</span>
                <a
                  href="tel:+24300"
                  className="flex space-x-2 items-center text-blue-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-6"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>
                  <span className="font-semibold">+1 000 000</span>
                </a>
                <span>or</span>
              </p>
              <button
                type="submit"
                title="Submit"
                className="block w-full py-3 px-6 text-center rounded-xl transition bg-blue-600 hover:bg-blue-800 active:bg-blue-800 focus:bg-indigo-600"
              >
                <span className="text-white font-semibold">
                  Send us an email
                </span>
              </button>
            </div>
          </div>
          <div className="hidden md:block relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-xl lg:pl-20 lg:p-16 border-2 border-gray-50 rounded-lg shadow-xl">
            <ul role="list" className="space-y-4 py-4 text-gray-600">
              <li className="flex items-center space-x-2">
                <span className="text-blue-600 font-semibold">&check;</span>
                <span>First premium advantage</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-600 font-semibold">&check;</span>
                <span>Second advantage weekly</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-600 font-semibold">&check;</span>
                <span>Third advantage donate to project</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-600 font-semibold">&check;</span>
                <span>Fourth, access to all components weekly</span>
              </li>
            </ul>

            <div className="mt-6 flex justify-center gap-6">
              <img
                className="w-16 lg:w-24"
                src="https://tailus.io/sources/blocks/organization/preview/images/clients/airbnb.svg"
                loading="lazy"
                alt="airbnb"
              />
              <img
                className="w-8 lg:w-16"
                src="https://tailus.io/sources/blocks/organization/preview/images/clients/bissell.svg"
                loading="lazy"
                alt="bissell"
              />
              <img
                className="w-6 lg:w-12"
                src="https://tailus.io/sources/blocks/organization/preview/images/clients/ge.svg"
                loading="lazy"
                alt="ge"
              />
              <img
                className="w-20 lg:w-28"
                src="https://tailus.io/sources/blocks/organization/preview/images/clients/microsoft.svg"
                loading="lazy"
                alt="microsoft"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PirceddPrice3;
