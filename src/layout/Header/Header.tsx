import ActivityFeed from '@/assets/svg/activity_feed.svg';
import ActivityFeedSelected from '@/assets/svg/activity_feed_selected.svg';
import Direct from '@/assets/svg/direct.svg';
import DirectSelected from '@/assets/svg/direct_selected.svg';
import FindPeople from '@/assets/svg/find_people.svg';
import FindPeopleSelected from '@/assets/svg/find_people_selected.svg';
import Home from '@/assets/svg/home.svg';
import HomeSelected from '@/assets/svg/home_selected.svg';
import NewPost from '@/assets/svg/new_post.svg';
import NewPostSelected from '@/assets/svg/new_post_selected.svg';
import { ImageNextJS } from '@/components/Common/ImageNextJS';
import { Search } from '@/layout/Header/Search';
import { AppRoutes } from '@/routes';
import { useAppDispatch, useAppSelector } from '@/store';
import {
  AppSelected,
  selectedField,
  setActivityFeedPopUp,
  showSearch,
  toogleProfileShow,
} from '@/store/reducers/appSlice';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export const Header: React.FC = () => {
  const widthUserDevice = window.innerWidth;
  const dispatch = useAppDispatch();
  const selected = useAppSelector((state) => state.app.selected);
  const isAuth = useAppSelector((state) => state.auth.status);
  const user = useAppSelector((state) => state.auth.user);
  const isProfilePopUpShow = useAppSelector((state) => state.app.profile.isProfilePopUp);
  const router = useRouter();
  return (
    <header className="fixed bottom-0 md:top-0 w-screen h-[65px] md:h-[50px] border-t-[1px] md:border-t-0 md:border-b-[1px] border-ins-border bg-white z-20">
      <div className="w-full md:w-[600px] lg:w-[950px] mx-auto h-full flex justify-between">
        {/* logo section */}
        <div className="hidden md:flex h-full justify-start items-center flex-1">
          <div
            onClick={() => {
              router.push(AppRoutes.HOME_PAGE);
            }}
            className="relative w-[40px] h-[40px] md:cursor-pointer"
          >
            <Image src={require('@/assets/png/icon.png')} alt="" className="object-cover" />
          </div>
        </div>
        {/* seacrh section */}
        {isAuth === 'authenticated' && (
          <div className="justify-center hidden h-full md:flex items-center flex-1">
            <div onClick={() => dispatch(showSearch())}>
              <Search />
            </div>
          </div>
        )}

        {/* nav */}
        <div className="h-full w-screen md:w-auto flex justify-evenly md:justify-end items-center space-x-3 flex-1">
          {/* Home */}
          {isAuth === 'authenticated' && (
            <>
              <div
                onClick={() => {
                  dispatch(selectedField(AppSelected.HOME));
                  router.push(AppRoutes.HOME_PAGE);
                }}
              >
                <div className="w-[25px] h-[25px] md:w-[22px] md:h-[22px] md:cursor-pointer flex justify-center items-center">
                  {selected === AppSelected.HOME ? <HomeSelected /> : <Home />}
                </div>
              </div>

              <div
                onClick={() => {
                  dispatch(selectedField(AppSelected.MESSENGER));
                  // unavailable
                  dispatch(setActivityFeedPopUp());
                  // router.push(AppRoutes.CHAT_PAGE);
                }}
              >
                <div className="w-[25px] h-[25px] md:w-[22px] md:h-[22px] md:cursor-pointer flex justify-center items-center">
                  {selected === AppSelected.MESSENGER ? <DirectSelected /> : <Direct />}
                </div>
              </div>

              <div
                onClick={() => {
                  dispatch(selectedField(AppSelected.NEW_POST));
                  router.push(AppRoutes.NEW_POST_PAGE);
                }}
              >
                <div className="w-[25px] h-[25px] md:w-[22px] md:h-[22px] md:cursor-pointer flex justify-center items-center">
                  {selected === AppSelected.NEW_POST ? <NewPostSelected /> : <NewPost />}
                </div>
              </div>

              <div
                onClick={() => {
                  dispatch(selectedField(AppSelected.FIND_PEOPLE));
                  router.push(AppRoutes.EXPLORE_PAGE);
                }}
              >
                <div className="w-[25px] h-[25px] md:w-[22px] md:h-[22px] md:cursor-pointer flex justify-center items-center">
                  {selected === AppSelected.FIND_PEOPLE ? <FindPeopleSelected /> : <FindPeople />}
                </div>
              </div>

              <div
                onClick={() => {
                  dispatch(selectedField(AppSelected.ACTIVITY_FEED));
                  dispatch(setActivityFeedPopUp());
                }}
              >
                <div className="w-[25px] h-[25px] md:w-[22px] md:h-[22px] md:cursor-pointer flex justify-center items-center">
                  {selected === AppSelected.ACTIVITY_FEED ? (
                    <ActivityFeedSelected />
                  ) : (
                    <ActivityFeed />
                  )}
                </div>
              </div>
            </>
          )}

          {/* Profile Picture or Sign In */}
          <div
            onClick={() => {
              dispatch(selectedField(AppSelected.PROFILE));
            }}
          >
            {isAuth === 'authenticated' ? (
              <div
                className={`relative ${
                  selected === AppSelected.PROFILE ? 'border-[1px] rounded-full border-black ' : ''
                }`}
                onClick={() => {
                  if (widthUserDevice > 768) {
                    return dispatch(toogleProfileShow());
                  }
                  router.push(AppRoutes.PROFILE);
                }}
              >
                <div onClick={() => {}}>
                  <div className="w-[25px] h-[25px] md:w-[22px] md:h-[22px] md:cursor-pointer flex justify-center items-center">
                    <ImageNextJS
                      width={25}
                      height={25}
                      circle
                      src={user?.photoURL ? user?.photoURL : ''}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div
                  className="w-[40px] h-[40px] relative md:cursor-pointer"
                  onClick={() => {
                    router.push(AppRoutes.SIGN_IN);
                  }}
                >
                  <Image
                    src={require('@/assets/png/login.png')}
                    alt=""
                    layout="fill"
                    className="object-contain"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
