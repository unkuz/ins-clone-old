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
import { ProfilePop } from '@/components/ProfilePop/ProfilePop';
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

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const selected = useAppSelector((state) => state.app.selected);
  const isAuth = useAppSelector((state) => state.auth.status);
  const user = useAppSelector((state) => state.auth.user);
  const isProfilePopUpShow = useAppSelector((state) => state.app.isProfilePopUp);
  const router = useRouter();
  return (
    <header className="fixed bottom-0 md:top-0 w-full h-[60px] md:h-[50px] border-b-[1px] border-ins-border bg-white z-10  md:block">
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
              }}
            >
              <Icon size={22} href={AppRoutes.HOME_PAGE}>
                {selected === AppSelected.HOME ? <HomeSelected /> : <Home />}
              </Icon>
            </div>

            {/* Messenger */}

            {isAuth === 'authenticated' && (
              <div
                onClick={() => {
                  dispatch(selectedField(AppSelected.MESSENGER));
                }}
              >
                <Icon size={22} href={AppRoutes.CHAT_PAGE}>
                  {selected === AppSelected.MESSENGER ? <DirectSelected /> : <Direct />}
                </Icon>
              </div>
            )}

            {/* POST */}

            {isAuth === 'authenticated' && (
              <div
                onClick={() => {
                  dispatch(selectedField(AppSelected.NEW_POST));
                }}
              >
                <Icon size={22} href={AppRoutes.NEW_POST_PAGE}>
                  {selected === AppSelected.NEW_POST ? <NewPostSelected /> : <NewPost />}
                </Icon>
              </div>
            )}

            {/* FIND PEOPLE */}

            <div
              onClick={() => {
                dispatch(selectedField(AppSelected.FIND_PEOPLE));
              }}
            >
              <Icon size={22} href={AppRoutes.EXPLORE_PAGE}>
                {selected === AppSelected.FIND_PEOPLE ? <FindPeopleSelected /> : <FindPeople />}
              </Icon>
            </div>

            {/* Activity */}
            {isAuth === 'authenticated' && (
              <div
                onClick={() => {
                  dispatch(selectedField(AppSelected.ACTIVITY_FEED));
                  dispatch(setActivityFeedPopUp());
                }}
              >
                <Icon size={22}>
                  {selected === AppSelected.ACTIVITY_FEED ? (
                    <ActivityFeedSelected />
                  ) : (
                    <ActivityFeed />
                  )}
                </Icon>
              </div>
            )}

            {/* Profile Picture or Sign In */}

            {isAuth === 'authenticated' ? (
              <div className={`relative`} onClick={() => dispatch(toogleProfileShow())}>
                <div onClick={() => {}}>
                  {user.photoURL ? (
                    <ImageNextJS width={25} height={25} circle src={user?.photoURL} pointer />
                  ) : (
                    <svg
                      aria-label="Profile"
                      color="#262626"
                      fill="#262626"
                      height="25"
                      role="img"
                      viewBox="0 0 32 32"
                      width="25"
                    >
                      <path d="M16 0C7.2 0 0 7.1 0 16c0 4.8 2.1 9.1 5.5 12l.3.3C8.5 30.6 12.1 32 16 32s7.5-1.4 10.2-3.7l.3-.3c3.4-3 5.5-7.2 5.5-12 0-8.9-7.2-16-16-16zm0 29c-2.8 0-5.3-.9-7.5-2.4.5-.9.9-1.3 1.4-1.8.7-.5 1.5-.8 2.4-.8h7.2c.9 0 1.7.3 2.4.8.5.4.9.8 1.4 1.8-2 1.5-4.5 2.4-7.3 2.4zm9.7-4.4c-.5-.9-1.1-1.5-1.9-2.1-1.2-.9-2.7-1.4-4.2-1.4h-7.2c-1.5 0-3 .5-4.2 1.4-.8.6-1.4 1.2-1.9 2.1C4.2 22.3 3 19.3 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13c0 3.3-1.2 6.3-3.3 8.6zM16 5.7c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 11c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path>
                    </svg>
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
                  <Icon size={22}>
                    <Image
                      src={require('@/assets/images/login.png')}
                      alt=""
                      layout="fill"
                      className="object-contain"
                    />
                  </Icon>
                </div>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
