import React from 'react';
import { HomeSuggests } from '@/layout/Home/HomeSuggets';
import { HomeMain } from '@/layout/Home/HomeMain';
import { withLayout } from '@/hoc/layout/withLayout';

import { useAppSelector } from '@/store';

const Home: React.FC = () => {
  const isAuth = useAppSelector((state) => state.auth.status);
  return (
    <div className="w-full flex justify-center lg:justify-between  ">
      <HomeMain />
      <div className="hidden sm:block">{isAuth === 'authenticated' && <HomeSuggests />}</div>
    </div>
  );
};
export default withLayout(Home);
