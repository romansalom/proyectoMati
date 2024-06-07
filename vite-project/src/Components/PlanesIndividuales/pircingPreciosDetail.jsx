import { useState } from 'react';
export const PrincingPriceDetail = () => {
  const [visibleTables, setVisibleTables] = useState([]);
  const checkIcon = (
    <svg
      className="w-5 h-5 mx-auto text-indigo-600"
      fill="blue"
      viewBox="0 0 20 20"
    >
      <path d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" />
    </svg>
  );
  const minusIcon = (
    <svg
      className="w-5 h-5 mx-auto text-gray-500"
      fill="blue"
      viewBox="0 0 20 20"
    >
      <path d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" />
    </svg>
  );
  const upArrowIcon = (
    <svg
      className="w-4 h-4 ml-2 inline-block"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 15l-7-7-7 7"
      />
    </svg>
  );

  /* const plans = [
    {
      name: 'Starter',
      desc: 'Lorem ipsum dolor sit amet torrel, consectet adipiscing elit.',
      price: '20.00',
    },
    {
      name: 'Professional',
      desc: 'Lorem ipsum dolor sit amet torrel, consectet adipiscing elit.',
      price: '8.00',
    },
    {
      name: 'Enterprise',
      desc: 'Lorem ipsum dolor sit amet torrel, consectet adipiscing elit.',
      price: '5.00',
    },
  ];
*/
  const tables = [
    {
      label: '',
      label_icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          />
        </svg>
      ),
      items: [
        {
          name: (
            <span
              onClick={() => setVisibleTables([])} // Oculta todas las tablas cuando se hace clic en la flecha hacia arriba
              className="cursor-pointer"
            >
              {upArrowIcon}
            </span>
          ),
          starter: 'Starter',
          professional: 'Professional',
          enterprise: 'Enterprise',
        },
        {
          name: 'Vestibulum tristique',
          starter: minusIcon,
          professional: checkIcon,
          enterprise: checkIcon,
        },
        {
          name: 'Aliquam finibus',
          starter: minusIcon,
          professional: minusIcon,
          enterprise: checkIcon,
        },
        {
          name: 'Praesent aliquet',
          starter: minusIcon,
          professional: '150GB',
          enterprise: 'Unlimited',
        },
        {
          name: 'Praesent aliquet',
          starter: minusIcon,
          professional: '150GB',
          enterprise: 'Unlimited',
        },
        {
          name: 'Praesent aliquet',
          starter: minusIcon,
          professional: '150GB',
          enterprise: 'Unlimited1',
        },
        {
          name: 'Praesent aliquet',
          starter: minusIcon,
          professional: '150GB',
          enterprise: 'Unlimited',
        },
        {
          name: 'Praesent aliquet',
          starter: minusIcon,
          professional: '150GB',
          enterprise: 'Unlimited',
        },
        {
          name: 'Praesent aliquet',
          starter: minusIcon,
          professional: '150GB',
          enterprise: 'Unlimited',
        },
        {
          name: 'Praesent aliquet',
          starter: minusIcon,
          professional: '150GB',
          enterprise: 'Unlimited',
        },
        {
          name: 'Praesent aliquet',
          starter: minusIcon,
          professional: '150GB',
          enterprise: 'Unlimited',
        },
        {
          name: 'Praesent aliquet',
          starter: minusIcon,
          professional: '150GB',
          enterprise: 'Unlimited',
        },
      ],
    },
  ];
  const downArrowIcon = (
    <svg
      className="w-4 h-4 ml-2 inline-block"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );

  return (
    <section className="text-gray-600">
      <div className="max-w-screen-xl mx-auto space-y-4 px-4 md:px-8">
        <div className="text-center">
          {/* Botón de abrir tabla centrado */}
          {!visibleTables.length ? (
            <button
              className="text-blue-600 hover:text-blue-700 flex items-center justify-center mx-auto"
              style={{ fontSize: '17px' }} // Aquí puedes ajustar el tamaño a tu gusto
              onClick={() => setVisibleTables([true])} // Muestra la tabla al hacer clic
            >
              Desglose de Planes
              {downArrowIcon}
            </button>
          ) : (
            <div className="overflow-auto md:overflow-visible">
              {tables.map(
                (table, idx) =>
                  visibleTables[idx] && ( // Solo muestra la tabla si su índice está en el estado visible
                    <table
                      key={idx}
                      className="w-full table-auto text-sm text-left"
                    >
                      <thead className="text-gray-600 font-medium border-b">
                        <tr>
                          <th className="py-6">
                            <div className="flex items-center justify-between gap-x-3">
                              <h4 className="text-gray-800 text-xl font-medium flex-1">
                                {table.label}
                              </h4>
                              {/* Flecha hacia arriba fija para cerrar la tabla */}
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600 divide-y">
                        {table.items.map((item, idx) => (
                          <tr key={idx}>
                            <td className="px-6 py-4 whitespace-nowrap font-semibold text-[#333]">
                              {item.name}
                            </td>
                            {/* Renderizado de los valores de los tres planes */}
                            <td className="text-center w-[250px] px-6 py-4 whitespace-nowrap">
                              {item.starter}
                            </td>
                            <td className="text-center w-[250px] px-6 py-4 whitespace-nowrap">
                              {item.professional}
                            </td>
                            <td className="text-center w-[250px] px-6 py-4 whitespace-nowrap">
                              {item.enterprise}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )
              )}
            </div>
          )}
        </div>
      </div>
      <hr />
    </section>
  );
};
