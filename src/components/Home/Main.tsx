import { FC } from 'react';
import { HomeSuggests } from '@/components/Home/Suggets';
import { Stories } from '@/components/Home/Stories';
import { v4 as uuid } from 'uuid';
import { useAppSelector } from '@/store';
import { Cards } from '@/components/Home/Cards';

export const HomeMain: FC = () => {
  const posts = useAppSelector((state) => state.posts.posts);
  return (
    <div>
      <Stories />
      <div className="h-[20px]"></div>
      <Cards />
    </div>
  );
};
