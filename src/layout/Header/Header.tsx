import ActivityFeed from '@/assets/svg/activity_feed.svg';
import ActivityFeedSelected from '@/assets/svg/activity_feed_selected.svg';
import Direct from '@/assets/svg/direct.svg';
import DirectSelected from '@/assets/svg/direct_selected.svg';
import FindPeople from '@/assets/svg/find_people.svg';
import FindPeopleSelected from '@/assets/svg/find_people_selected.svg';
import Home from '@/assets/svg/home.svg';
import HomeSelected from '@/assets/svg/home_selected.svg';
import Instagram from '@/assets/svg/instagram.svg';
import NewPost from '@/assets/svg/new_post.svg';
import NewPostSelected from '@/assets/svg/new_post_selected.svg';
import { ImageNextJS } from '@/components/Common/ImageNextJS';
import { Icon } from '@/components/Icon';
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
import React from 'react';
import { RandomImage } from '../Profile/RandomImage';

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const selected = useAppSelector((state) => state.app.selected);
  const isAuth = useAppSelector((state) => state.auth.status);
  const user = useAppSelector((state) => state.auth.user);
  const isProfilePopUpShow = useAppSelector((state) => state.app.profile.isProfilePopUp);
  const router = useRouter();
  return (
    <header className="fixed bottom-0 md:top-0 w-full h-[60px] md:h-[50px] border-b-[1px] border-ins-border bg-white z-20  md:block">
      <div className="md:w-[600px] lg:w-[950px] mx-auto h-full flex justify-between items-center  ">
        {/* LEft Part Header */}
        <div className="flex-1 hidden md:flex">
          <Icon size={30} href={AppRoutes.HOME_PAGE}>
            <Instagram />
          </Icon>
        </div>
        {/* Middle Header */}
        {isAuth === 'authenticated' && (
          <div className="flex-1 justify-center hidden md:flex">
            <div onClick={() => dispatch(showSearch())}>
              <Search />
            </div>
          </div>
        )}

        {/* Right header as TaskBar */}
        <div className="flex-1 mx-auto">
          <nav className="flex w-full h-full justify-evenly md:space-x-2 lg:space-x-3 md:justify-end  items-center ">
            {/* Home */}
            <div
              onClick={() => {
                dispatch(selectedField(AppSelected.HOME));
                router.push(AppRoutes.HOME_PAGE);
              }}
            >
              <div className="w-[22px] h-[22px]">
                {selected === AppSelected.HOME ? <HomeSelected /> : <Home />}
              </div>
            </div>

            {/* Messenger */}

            {isAuth === 'authenticated' && (
              <div
                onClick={() => {
                  dispatch(selectedField(AppSelected.MESSENGER));
                  router.push(AppRoutes.CHAT_PAGE);
                }}
              >
                <div className="w-[22px] h-[22px]">
                  {selected === AppSelected.MESSENGER ? <DirectSelected /> : <Direct />}
                </div>
              </div>
            )}

            {/* POST */}

            {isAuth === 'authenticated' && (
              <div
                onClick={() => {
                  dispatch(selectedField(AppSelected.NEW_POST));
                  router.push(AppRoutes.NEW_POST_PAGE);
                }}
              >
                <div className="w-[22px] h-[22px]">
                  {selected === AppSelected.NEW_POST ? <NewPostSelected /> : <NewPost />}
                </div>
              </div>
            )}

            {/* FIND PEOPLE */}

            <div
              onClick={() => {
                dispatch(selectedField(AppSelected.FIND_PEOPLE));
                router.push(AppRoutes.EXPLORE_PAGE);
              }}
            >
              <div className="w-[22px] h-[22px]">
                {selected === AppSelected.FIND_PEOPLE ? <FindPeopleSelected /> : <FindPeople />}
              </div>
            </div>

            {/* Activity */}
            {isAuth === 'authenticated' && (
              <div
                onClick={() => {
                  dispatch(selectedField(AppSelected.ACTIVITY_FEED));
                  dispatch(setActivityFeedPopUp());
                }}
              >
                <div className="w-[22px] h-[22px]">
                  {selected === AppSelected.ACTIVITY_FEED ? (
                    <ActivityFeedSelected />
                  ) : (
                    <ActivityFeed />
                  )}
                </div>
              </div>
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
                    selected === AppSelected.PROFILE
                      ? 'border-[1px] rounded-full border-black '
                      : ''
                  }`}
                  onClick={() => dispatch(toogleProfileShow())}
                >
                  <div onClick={() => {}}>
                    {user && user.photoURL ? (
                      <ImageNextJS width={25} height={25} circle src={user?.photoURL} pointer />
                    ) : (
                      <div className="w-[22px] h-[22px]">
                        <RandomImage />
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <>
                  <div
                    className="w-[22px] h-[22px] relative cursor-pointer"
                    onClick={() => {
                      router.push(AppRoutes.SIGN_IN);
                    }}
                  >
                    <div className="w-[22px] h-[22px]">
                      <Image
                        src={require('@/assets/images/login.png')}
                        alt=""
                        layout="fill"
                        className="object-contain"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
