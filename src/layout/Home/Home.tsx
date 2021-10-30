import React from 'react';
import { HomeSuggests } from '@/layout/Home/HomeSuggets';
import { HomeMain } from '@/layout/Home/HomeMain';

export const Home: React.FC = () => {
  return (
    <div className="flex justify-between">
      <HomeMain />
      <div className="hiden sm:block">
        <HomeSuggests />
      </div>
    </div>
  );
};
