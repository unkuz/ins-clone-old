import React from 'react';
import { HomeSuggests } from '@/layout/Home/HomeSuggets';
import { HomeMain } from '@/layout/Home/HomeMain';
import { withLayout } from '@/hoc/layout/withLayout';

const Home: React.FC = () => {
  return (
    <div className="w-full flex justify-center lg:justify-between  ">
      <HomeMain />
      <div className="hidden sm:block">
        <HomeSuggests />
      </div>
    </div>
  );
};
export default withLayout(Home);
