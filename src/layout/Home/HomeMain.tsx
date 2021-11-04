import { FC } from 'react';
import { HomeSuggests } from '@/layout/Home/HomeSuggets';
import { Feed } from '@/components/Feed/Feed';
import { CardFeed } from '@/components/CardFeed/CardFeed';
import { v4 as uuid } from 'uuid';
import { useAppSelector } from '@/store';

export const HomeMain: FC = () => {
  const posts = useAppSelector((state) => state.posts.posts);
  const isAuth = useAppSelector((state) => state.auth.status);
  return (
    <div>
      {isAuth === 'authenticated' && (
        <>
          <Feed />
          <div className="h-[20px]"></div>
        </>
      )}

      {posts?.map(({ id, imageURL, user, likes, caption, timeStamp }) => (
        <>
          <CardFeed
            key={id}
            id={id}
            imageURL={imageURL}
            user={user}
            likes={likes}
            caption={caption}
            timeStamp={timeStamp}
          />
          <div className="h-4"></div>
        </>
      ))}
    </div>
  );
};
