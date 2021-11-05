import { Story } from '@/components/Home/Stories/Story';
import { useAppSelector } from '@/store';
import React from 'react';

export const Stories = () => {
  const isAuth = useAppSelector((state) => state.auth.status);
  const allUser = useAppSelector((state) => state.users.users);
  console.log(allUser);
  return (
    <>
      {isAuth === 'authenticated' && (
        <>
          <div className="w-screen md:w-[600px] border-[1px] h-[115px] border-ins-border flex items-center space-x-3 pl-3 overflow-y-hidden overflow-x-scroll scrollbar-thin scrollbar-hide scrollbar scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 rounded-lg">
            {allUser.map(({ userUid, photoURL, name, email }) => (
              <Story key={userUid} photoURL={photoURL} name={name} email={email} />
            ))}
          </div>
        </>
      )}
    </>
  );
};
