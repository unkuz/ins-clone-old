import { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';
import { withLayout } from '@/hoc/layout/withLayout';
import Explore from '@/layout/Explore/Explore';

const ExplorePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chat</title>
      </Head>
      <Explore header footer layout />
    </>
  );
};

export default React.memo(ExplorePage);
