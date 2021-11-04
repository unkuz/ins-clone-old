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
  return (
    <div className="w-[315px] h-[500px] lg:flex flex-col relative border-[1px] border-ins-border hidden">
      <div className="w-11/12 mx-auto">
        <div className="w-full h-[70px] flex justify-between items-center border-b-[1px] border-ins-border">
          <div className="h-[45px] w-[45px] overflow-hidden rounded-full relative">
            <Image
              layout="fill"
              alt=""
              src={
                currentUser?.photoURL
                  ? currentUser?.photoURL
                  : 'https://firebasestorage.googleapis.com/v0/b/instagram-cuzknothz.appspot.com/o/userDefault%2F44884218_345707102882519_2446069589734326272_n.jpg?alt=media&token=51394aa8-7c3c-4496-8f70-8a9c922f62bb'
              }
            />
          </div>
          <div>{currentUser?.email}</div>
          <div onClick={() => dispatch(signOutRequest())} className="text-blue-500 font-bold">
            Switch
          </div>
        </div>
      </div>
      <div>
        {allUsers.map((user) => (
          <div key={user.userUid} className="w-11/12 mx-auto py-1 bg-black/20">
            <div className="flex justify-between items-center">
              <div className="scale-75">
                <div className="h-[45px] w-[45px] overflow-hidden rounded-full relative">
                  <Image
                    layout="fill"
                    alt=""
                    src={
                      user.photoURL
                        ? user.photoURL
                        : 'https://firebasestorage.googleapis.com/v0/b/instagram-cuzknothz.appspot.com/o/userDefault%2F44884218_345707102882519_2446069589734326272_n.jpg?alt=media&token=51394aa8-7c3c-4496-8f70-8a9c922f62bb'
                    }
                  />
                </div>
              </div>
              <div className="bg-yellow-600">
                <p
                  onClick={() => router.push(`account/${user.userUid}`)}
                  className="font-bold cursor-pointer"
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
  );
};
