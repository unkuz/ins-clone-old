import { NextPage } from 'next';
import React from 'react';
import { Feed } from '@/components/Feed/Feed';
import { CardFeed } from '@/components/CardFeed/CardFeed';

const Storie: NextPage = () => {
  return (
    <div>
      <Feed />
      <div className="w-[600px] h-[20px]"></div>
      <CardFeed />
    </div>
  );
};

export default Storie;
