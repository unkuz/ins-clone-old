import Home from '@/components/Home';
import type { NextPage } from 'next';
import React from 'react';

const HomePage: NextPage = () => {
  return (
    <>
      <Home footer layout header />
    </>
  );
};

export default React.memo(HomePage);
