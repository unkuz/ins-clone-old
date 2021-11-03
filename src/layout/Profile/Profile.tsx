import { ImageNextJS } from '@/components/Common/ImageNextJS';
import { withLayout } from '@/hoc/layout/withLayout';
import { useAppDispatch, useAppSelector } from '@/store';
import Comment from '@/assets/svg/comment.svg';

import Like from '@/assets/svg/like.svg';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  setEditProfilePopUp,
  setSelectedOnProfilePageIsPosts,
  setSelectedOnProfilePageIsSaved,
} from '@/store/reducers/appSlice';
import router from 'next/router';
import { AppRoutes } from '@/routes';
import { Icon } from '@/components/Icon';
import { MiniPost } from './MiniPost';

enum SelectedField {
  POSTS = 'POSTS',
  SAVED = 'SAVED',
}

const Profile = () => {
  const user = useAppSelector((state) => state.auth.user);
  const selectedField = useAppSelector((state) => state.app.selectedOnProfilePage);
  const dispatch = useAppDispatch();

  return (
    <div className="min-h-screen">
      <div className="md:w-10/12 mx-auto w-full">
        {/* top */}
        <div className="h-[150px]  flex justify-between ">
          {/* left profile picture */}
          <div className="w-[150px] h-full  flex justify-center items-center">
            <ImageNextJS src={user?.photoURL} alt="" pointer circle width={110} height={110} />
          </div>
          {/* right info */}
          <div className="w-[200px] md:w-[400px] h-full flex flex-col">
            <div className="w-full h-[70px] flex justify-center items-center text-xl">
              Cuzknothz
            </div>
            <div className="w-full h-full flex justify-between items-center ">
              <div className="h-full flex-1 flex flex-col justify-center items-center">
                <p className="text-xl">{Math.round(Math.random() * 100)}</p>
                <p>Posts</p>
              </div>
              <div className="h-full flex-1 flex flex-col justify-center items-center">
                <p className="text-xl cursor-pointer">{Math.round(Math.random() * 100)}</p>
                <p>Followers</p>
              </div>
              <div className="h-full flex-1 flex flex-col justify-center items-center">
                <p className="text-xl cursor-pointer">{Math.round(Math.random() * 100)}</p>
                <p>Following</p>
              </div>
            </div>
          </div>
          <div className="w-[150px] h-full flex justify-center items-center">
            <div
              onClick={() => {
                dispatch(setEditProfilePopUp());
              }}
              className="cursor-pointer border-[1px] border-ins-border py-2 px-5 rounded-lg hover:bg-blue-300 bg-white"
            >
              Edit Profile
            </div>
          </div>
        </div>
        {/* middle */}
        <div className="sticky top-0">
          <hr />
          <div>
            <div className="h-[50px] flex md:space-x-48 space-x-8 justify-center items-center">
              <div
                onClick={() => dispatch(setSelectedOnProfilePageIsPosts())}
                className={`${
                  selectedField === 'POSTS' ? 'bg-blue-300' : ''
                } border-[1px] cursor-pointer border-ins-border py-2 px-16 rounded-lg hover:bg-blue-300`}
              >
                Posts
              </div>
              <div
                onClick={() => dispatch(setSelectedOnProfilePageIsSaved())}
                className={`${selectedField === SelectedField.SAVED ? 'bg-blue-300' : ''}
              border-[1px] cursor-pointer border-ins-border py-2 px-16 rounded-lg hover:bg-blue-300`}
              >
                Saved
              </div>
            </div>
          </div>
          <hr />
        </div>
        {/* post */}
        <div className="grid grid-cols-3 gap-1">
          {/* Only post show */}
          {selectedField === 'POSTS' &&
            'fsdjafsdafsdfhasdfsfaf'
              .split('')
              .map((i) => (
                <MiniPost
                  key={i}
                  likes={50}
                  comments={56}
                  imageUrl="https://images.unsplash.com/photo-1633809787036-b06db15939c4?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8Qm4tRGpyY0Jyd298fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
              ))}
          {/* Only saved show */}
          {selectedField === 'SAVED' &&
            'fsdjahasadgssdfsfaf'
              .split('')
              .map((i) => (
                <MiniPost
                  key={i}
                  likes={500989}
                  comments={56}
                  imageUrl="https://images.unsplash.com/photo-1635807013625-d4c06fad0a29?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default withLayout(Profile);
