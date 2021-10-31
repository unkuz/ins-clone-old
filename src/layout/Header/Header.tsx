import ActivityFeed from '@/assets/svg/activity_feed.svg';
import ActivityFeedSelected from '@/assets/svg/activity_feed_selected.svg';
import FindPeople from '@/assets/svg/find_people.svg';
import FindPeopleSelected from '@/assets/svg/find_people_selected.svg';
import Home from '@/assets/svg/home.svg';
import HomeSelected from '@/assets/svg/home_selected.svg';
import Instagram from '@/assets/svg/instagram.svg';
import Messenger from '@/assets/svg/messenger.svg';
import MessengerSelected from '@/assets/svg/messenger_selected.svg';
import NewPost from '@/assets/svg/new_post.svg';
import NewPostSelected from '@/assets/svg/new_post_selected.svg';
import Direct from '@/assets/svg/direct.svg';
import DirectSelected from '@/assets/svg/direct_selected.svg';
import { Icon } from '@/components/Icon';
import { Search } from '@/layout/Header/Search';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { AppSelected, selectedField, showSearch } from '@/store/slice/appSlice';
import { useRouter } from 'next/router';
import React from 'react';
import { AppRoutes } from '@/routes';

export const Header = () => {
  const dispatch = useAppDispatch();
  const selected = useAppSelector((state) => state.app.selected);
  const router = useRouter();
  return (
    <header className="fixed bottom-0 md:top-0 w-full h-[60px] md:h-[50px] border-b-[1px] border-ins-border bg-white z-10  md:block">
      <div className="md:w-[600px] lg:w-[950px] mx-auto h-full flex justify-between items-center  ">
        <div className="flex-1 hidden md:flex">
          <Icon size={30} href={AppRoutes.HOME_PAGE}>
            <Instagram />
          </Icon>
        </div>
        <div className="flex-1 justify-center hidden md:flex">
          <div onClick={() => dispatch(showSearch())}>
            <Search />
          </div>
        </div>
        <div className="flex-1 ">
          <nav>
            <ul className="flex lg:justify-end lg:space-x-5 md:space-x-3 justify-evenly ">
              <li className="">
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
              </li>
              <li>
                {/* Messenger */}
                <div
                  onClick={() => {
                    dispatch(selectedField(AppSelected.MESSENGER));
                  }}
                >
                  <div className="relative">
                    <div className="w-[10px] right-0 top-0 h-[10px] rounded-full bg-red-500 animate-pulse absolute"></div>
                    <Icon size={22} href={AppRoutes.CHAT_PAGE}>
                      {selected === AppSelected.MESSENGER ? <DirectSelected /> : <Direct />}
                    </Icon>
                  </div>
                </div>
              </li>
              <li>
                {/* POST */}
                <div
                  onClick={() => {
                    dispatch(selectedField(AppSelected.NEW_POST));
                  }}
                >
                  <Icon size={22} href={AppRoutes.NEW_POST_PAGE}>
                    {selected === AppSelected.NEW_POST ? <NewPostSelected /> : <NewPost />}
                  </Icon>
                </div>
              </li>
              {/* FIND PEOPLE */}
              <li className="">
                <div
                  onClick={() => {
                    dispatch(selectedField(AppSelected.FIND_PEOPLE));
                  }}
                >
                  <Icon size={22} href={AppRoutes.EXPLORE_PAGE}>
                    {selected === AppSelected.FIND_PEOPLE ? <FindPeopleSelected /> : <FindPeople />}
                  </Icon>
                </div>
              </li>
              {/* Activity */}
              <li className="">
                <div
                  onClick={() => {
                    dispatch(selectedField(AppSelected.ACTIVITY_FEED));
                  }}
                >
                  <Icon size={22} href={AppRoutes.ERR_PAGE}>
                    {selected === AppSelected.ACTIVITY_FEED ? <ActivityFeedSelected /> : <ActivityFeed />}
                  </Icon>
                </div>
              </li>
              <div
                className="cursor-pointer"
                onClick={() => {
                  router.push('/auth/signin');
                }}
              >
                Sign In
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
