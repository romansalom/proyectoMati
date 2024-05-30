import * as Tabs from '@radix-ui/react-tabs';
import { useState } from 'react';
import { PrincingPriceCrds } from './PlanesIndividuales/pircingPrecioCards';
import { PrincingPriceDetail } from './PlanesIndividuales/pircingPreciosDetail';
import { PrincingPriceCrdsDoble } from './PlanesDobles/pircingPrecioCardsDobles';
import { PrincingPriceDetailDoble } from './PlanesDobles/pircingPreciosDetailDoble';
import { PrincingPriceDetailFamiliar } from './PlanesFamiliares/pircingPreciosDetailFamiliar';
import { PrincingPriceCrdsFamiliar } from './PlanesFamiliares/pircingPrecioCardsFamiliar';

const Individual = () => (
  <div>
    <PrincingPriceCrds></PrincingPriceCrds>
    <div className="mb-10">
      {' '}
      <PrincingPriceDetail></PrincingPriceDetail>
    </div>
  </div>
);

const Doble = () => (
  <div>
    <PrincingPriceCrdsDoble></PrincingPriceCrdsDoble>
    <div className="mb-10">
      {' '}
      <PrincingPriceDetailDoble></PrincingPriceDetailDoble>
    </div>
  </div>
);

const Familiar = () => (
  <div>
    <PrincingPriceCrdsFamiliar></PrincingPriceCrdsFamiliar>
    <div className="mb-10">
      {' '}
      <PrincingPriceDetailFamiliar></PrincingPriceDetailFamiliar>
    </div>
  </div>
);

export const Tabsventana = () => {
  const [selectedTab, setSelectedTab] = useState('Individual');

  const tabItems = ['Individual', 'Doble', 'Familiar'];

  const renderContent = () => {
    switch (selectedTab) {
      case 'Individual':
        return <Individual />;
      case 'Doble':
        return <Doble />;
      case 'Familiar':
        return <Familiar />;
      default:
        return null;
    }
  };

  return (
    <Tabs.Root
      className="max-w-screen-xl mt-2 mx-auto px-4 md:px-8"
      value={selectedTab}
      onValueChange={(val) => setSelectedTab(val)}
    >
      <Tabs.List
        className="hidden bg-gray-100 py-1.5 px-2.5 rounded-lg gap-x-3 overflow-x-auto text-sm sm:flex"
        aria-label="Manage your account"
      >
        {tabItems.map((item, idx) => (
          <Tabs.Trigger
            key={idx}
            className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm py-1.5 px-3 rounded-lg duration-150 text-gray-500 hover:text-blue-600 hover:bg-white active:bg-white/50 font-medium"
            value={item}
          >
            {item}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      <div className="relative text-gray-500 sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="pointer-events-none w-5 h-5 absolute right-2 inset-y-0 my-auto"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
        <select
          value={selectedTab}
          className="py-2 px-3 w-full bg-transparent appearance-none outline-none border rounded-lg shadow-sm focus:border-blue-600 text-sm"
          onChange={(e) => setSelectedTab(e.target.value)}
        >
          {tabItems.map((item, idx) => (
            <option key={idx} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      {tabItems.map((item, idx) => (
        <Tabs.Content key={idx} className="py-6" value={item}>
          {selectedTab === item && renderContent()}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};
