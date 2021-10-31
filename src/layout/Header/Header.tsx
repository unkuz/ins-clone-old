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
import { Icon } from '@/components/Icon';
import { Search } from '@/layout/Header/Search';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { AppSelected, selectedField, showSearch } from '@/store/slice/appSlice';
import { useRouter } from 'next/router';
import React from 'react';

export const Header = () => {
  const dispatch = useAppDispatch();
  const selected = useAppSelector((state) => state.app.selected);
  const router = useRouter();
  return (
    <header className="fixed w-full h-[50px] border-b-[1px] border-ins-border bg-white z-10 hidden md:block">
      <div className="md:w-[600px] lg:w-[950px] mx-auto h-full flex justify-between items-center">
        <div className="flex-1">
          <Icon size={30} href="/">
            <Instagram />
          </Icon>
        </div>
        <div className="flex-1 justify-center hidden sm:flex">
          <div onClick={() => dispatch(showSearch())}>
            <Search />
          </div>
        </div>
        <div className="flex-1">
          <nav>
            <ul className="flex justify-end lg:space-x-5 md:space-x-3">
              <li className="hidden sm:block">
                {selected === AppSelected.HOME ? (
                  <Icon size={22} href="/">
                    <HomeSelected
                      onClick={() => {
                        dispatch(selectedField(AppSelected.HOME));
                      }}
                    />
                  </Icon>
                ) : (
                  <Icon size={22} href="/">
                    <Home
                      onClick={() => {
                        dispatch(selectedField(AppSelected.HOME));
                      }}
                    />
                  </Icon>
                )}
              </li>
              <li>
                {selected === AppSelected.MESSENGER ? (
                  <Icon size={22} href="/direct/inbox">
                    <MessengerSelected
                      onClick={() => {
                        dispatch(selectedField(AppSelected.MESSENGER));
                      }}
                    />
                  </Icon>
                ) : (
                  <Icon size={22} href="/direct/inbox">
                    <Messenger
                      onClick={() => {
                        dispatch(selectedField(AppSelected.MESSENGER));
                      }}
                    />
                  </Icon>
                )}
              </li>
              <li>
                {selected === AppSelected.NEW_POST ? (
                  <Icon size={22} href="/create/select">
                    <NewPostSelected
                      onClick={() => {
                        dispatch(selectedField(AppSelected.NEW_POST));
                      }}
                    />
                  </Icon>
                ) : (
                  <Icon size={22} href="/create/select">
                    <NewPost
                      onClick={() => {
                        dispatch(selectedField(AppSelected.NEW_POST));
                      }}
                    />
                  </Icon>
                )}
              </li>
              <li className="hidden sm:block">
                {selected === AppSelected.FIND_PEOPLE ? (
                  <Icon size={22} href="/explore">
                    <FindPeopleSelected
                      onClick={() => {
                        dispatch(selectedField(AppSelected.FIND_PEOPLE));
                      }}
                    />
                  </Icon>
                ) : (
                  <Icon size={22} href="/explore">
                    <FindPeople
                      onClick={() => {
                        dispatch(selectedField(AppSelected.FIND_PEOPLE));
                      }}
                    />
                  </Icon>
                )}
              </li>

              <li className="hidden sm:block">
                {selected === AppSelected.ACTIVITY_FEED ? (
                  <Icon size={22} href="">
                    <ActivityFeedSelected
                      onClick={() => {
                        dispatch(selectedField(AppSelected.ACTIVITY_FEED));
                      }}
                    />
                  </Icon>
                ) : (
                  <Icon size={22} href="">
                    <ActivityFeed
                      onClick={() => {
                        dispatch(selectedField(AppSelected.ACTIVITY_FEED));
                      }}
                    />
                  </Icon>
                )}
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
