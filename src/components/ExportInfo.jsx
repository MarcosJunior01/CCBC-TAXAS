import React from 'react';
import CurrencyCard from './CurrencyCard';
import GrowthCard from './GrowthCard';
import TopProductsCard from './TopProductsCard';

const InfoSidebar = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width:"600px", }}>
      <CurrencyCard />
      <GrowthCard />
      <TopProductsCard />
    </div>
  );
};

export default InfoSidebar;
