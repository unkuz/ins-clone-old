import React from 'react';
import { Card } from '@/components/Home/Cards/Card';
import { useAppSelector } from '@/store';
import { motion } from 'framer-motion';
const cardsVariants = {
  hidden: {
    y: '100vh',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      delay: 1,
    },
  },
};
export const Cards = () => {
  const allPosts = useAppSelector((state) => state.posts);
  console.log(allPosts);
  return (
    <>
      <motion.div variants={cardsVariants} initial="hidden" animate="visible">
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
      </motion.div>
    </>
  );
};
