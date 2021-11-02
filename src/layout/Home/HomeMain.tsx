import { FC } from 'react';
import { HomeSuggests } from '@/layout/Home/HomeSuggets';
import { Feed } from '@/components/Feed/Feed';
import { CardFeed } from '@/components/CardFeed/CardFeed';
import { v4 as uuid } from 'uuid';
import { useAppSelector } from '@/store';

export const HomeMain: FC = () => {
  const isAuth = useAppSelector((state) => state.auth.status);
  return (
    <div>
      {isAuth === 'authenticated' && (
        <>
          <Feed />
          <div className="h-[20px]"></div>
        </>
      )}

      {'fksdhj'.split('').map((i) => (
        <>
          <CardFeed key={uuid()} />
          <div className="h-4"></div>
        </>
      ))}
    </div>
  );
};
