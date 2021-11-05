import React from 'react';
import { HomeSuggests } from '@/components/Home/Suggets';
import { HomeMain } from '@/components/Home/Main';
import { withLayout } from '@/hoc/layout/withLayout';

import { useAppSelector } from '@/store';

const Home: React.FC = () => {
  const isAuth = useAppSelector((state) => state.auth.status);
  return (
    <div
      className={`w-full flex justify-center ${
        isAuth === 'authenticated' ? 'lg:justify-between justify-center' : 'justify-center'
      }`}
    >
      <HomeMain />
      <HomeSuggests />
    </div>
  );
};
export default withLayout(Home);
