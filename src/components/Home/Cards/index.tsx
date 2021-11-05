import React from 'react';
import { Card } from '@/components/Home/Cards/Card';
import { useAppSelector } from '@/store';

export const Cards = () => {
  const allPosts = useAppSelector((state) => state.posts);
  console.log(allPosts);
  return (
    <>
      {allPosts.posts.map(
        ({ id, user, imageURL, likes, dislikes, timeStamp, caption, comment }) => (
          <Card
            key={id}
            imageURL={imageURL}
            user={user}
            likes={likes}
            dislikes={dislikes}
            timeStamp={timeStamp}
            caption={caption}
            comment={comment}
          />
        )
      )}
    </>
  );
};
