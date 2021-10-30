import { FC } from 'react';
import { HomeSuggests } from '@/layout/Home/HomeSuggets';
import { Feed } from '@/components/Feed/Feed';
import { CardFeed } from '@/components/CardFeed/CardFeed';

export const HomeMain: FC = () => {
  return (
    <div>
      <Feed />
      <div className="h-[20px]"></div>
      <CardFeed />
    </div>
  );
};
