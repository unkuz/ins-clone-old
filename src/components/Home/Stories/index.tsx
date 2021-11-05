import { Story } from '@/components/Home/Stories/Story';
import { useAppSelector } from '@/store';
import React from 'react';
import { motion } from 'framer-motion';

const storiesVariants = {
  hidden: {
    x: '-100vw',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
    },
  },
};
export const Stories = () => {
  const isAuth = useAppSelector((state) => state.auth.status);
  const allUser = useAppSelector((state) => state.users.users);
  console.log(allUser);
  return (
    <>
      {isAuth === 'authenticated' && (
        <>
          <motion.div
            variants={storiesVariants}
            initial="hidden"
            animate="visible"
            className="w-screen md:w-[600px] shadow-md border-[1px] h-[115px] border-ins-border flex items-center space-x-3 pl-[10px] overflow-y-hidden overflow-x-scroll scrollbar-thin scrollbar-hide scrollbar scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 rounded-lg"
          >
            {allUser.map(({ userUid, photoURL, name, email }) => (
              <Story key={userUid} photoURL={photoURL} name={name} email={email} />
            ))}
          </motion.div>
        </>
      )}
    </>
  );
};
