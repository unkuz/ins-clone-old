import { CardFeed } from '@/components/CardFeed/CardFeed';
import { Feed } from '@/components/Feed/Feed';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div>
      <Feed />
      <div className="w-[600px] h-[20px]"></div>
      <CardFeed />
    </div>
  );
};

export default Home;
