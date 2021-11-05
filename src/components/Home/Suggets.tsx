import React from 'react';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/store';
import { signOutRequest } from '@/store/reducers/authSlice';
import { useRouter } from 'next/router';

export const HomeSuggests: React.FC = () => {
  const allUsers = useAppSelector((state) => state.users.users);
  const currentUser = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const isAuth = useAppSelector((state) => state.auth.status);

  return (
    <>
      {isAuth === 'authenticated' && (
        <div className="w-[315px] h-[500px] lg:flex flex-col relative border-[1px] border-ins-border hidden rounded-lg">
          <div className="w-11/12 mx-auto border-b-[1px] border-ins-border">
            <div className="w-full h-[70px] flex justify-between items-center">
              <div className="h-[45px] w-[45px] overflow-hidden rounded-full relative">
                <Image
                  layout="fill"
                  alt=""
                  src={currentUser?.photoURL ? currentUser?.photoURL : ''}
                />
              </div>
              <div className="whitespace-nowrap overflow-ellipsis">
                {currentUser?.username || currentUser?.email}
              </div>
              <div onClick={() => dispatch(signOutRequest())} className="text-blue-500 font-bold">
                Switch
              </div>
            </div>
          </div>
          <div>
            {allUsers.map((user) => (
              <div key={user.userUid} className="w-11/12 mx-auto py-1">
                <div className="flex justify-between items-center">
                  <div className="scale-75">
                    <div className="h-[45px] w-[45px] overflow-hidden rounded-full relative">
                      <Image layout="fill" alt="" src={user.photoURL} />
                    </div>
                  </div>
                  <div>
                    <p
                      onClick={() => router.push(`account/${user.userUid}`)}
                      className="cursor-pointer"
                    >
                      {user?.name ? user.name : user.email}
                    </p>
                    <p>Suggest for you</p>
                  </div>
                  <div className="text-blue-500 font-bold md:cursor-pointer">Follow</div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full h-[30px] absolute bottom-0 border-t-[1px] border-ins-border flex justify-center items-center">
            <p className="mx-auto">© 2021 cuzknothz</p>
          </div>
        </div>
      )}
    </>
  );
};
