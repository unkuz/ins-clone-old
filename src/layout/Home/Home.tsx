import React from 'react';
import { HomeSuggests } from '@/layout/Home/HomeSuggets';
import { HomeMain } from '@/layout/Home/HomeMain';
import { withLayout } from '@/hoc/layout/withLayout';

const Home: React.FC = () => {
  return (
    <div className="flex lg:justify-between justify-center ">
      <HomeMain />
      <div className="hiden sm:block">
        <HomeSuggests />
      </div>
    </div>
  );
};
export default withLayout(Home);
