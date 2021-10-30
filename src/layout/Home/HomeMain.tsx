import { FC } from 'react';
import { HomeSuggests } from '@/layout/Home/HomeSuggets';
import { Feed } from '@/components/Feed/Feed';
import { CardFeed } from '@/components/CardFeed/CardFeed';
import { v4 as uuid } from 'uuid';

export const HomeMain: FC = () => {
  return (
    <div>
      <Feed />
      <div className="h-[20px]"></div>
      {'fksdhafjklsdhjklfhkj'.split('').map((i) => (
        <>
          <CardFeed key={uuid()} />
          <div className="h-4"></div>
        </>
      ))}
    </div>
  );
};
