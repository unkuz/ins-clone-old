import { CardFeed } from '@/components/CardFeed/CardFeed';
import { Feed } from '@/components/Feed/Feed';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Home from '@/layout/Home/Home';
import { withHeader } from '@/hoc/layout/withHeader';

const HomePage: NextPage = () => {
  return (
    <>
      <Home footer layout header />
    </>
  );
};

export default HomePage;
