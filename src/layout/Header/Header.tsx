import React from 'react';
import Instagram from '@/assets/svg/instagram.svg';
import Home from '@/assets/svg/home.svg';
import HomeSelected from '@/assets/svg/home_selected.svg';
import ActivityFeed from '@/assets/svg/activity_feed.svg';
import ActivityFeedSelected from '@/assets/svg/activity_feed_selected.svg';
import Messenger from '@/assets/svg/messenger.svg';
import MessengerSelected from '@/assets/svg/messenger_selected.svg';

import FindPeople from '@/assets/svg/find_people.svg';
import FindPeopleSelected from '@/assets/svg/find_people_selected.svg';
import NewPost from '@/assets/svg/new_post.svg';
import NewPostSelected from '@/assets/svg/new_post_selected.svg';
import { Icon } from '@/components/Icon';
import { Search } from '@/layout/Header/Search';
import Image from 'next/image';
import instagram_logo from '@/assets/images/instagram_logo.png';
import { useAppDispatch } from '@/store/hooks';
import { selectedField } from '@/store/slice/appSlice';
import { AppSelected } from '@/store/slice/appSlice';
import { useAppSelector } from '@/store/hooks';
import { useRouter } from 'next/router';

export const Header = () => {
  const dispatch = useAppDispatch();
  const selected = useAppSelector((state) => state.app.selected);
  const router = useRouter();
  return (
    <header className="fixed w-full h-[55px] border-b-[1px] border-ins-border z-10 bg-white">
      <div className="w-9/12 mx-auto h-full flex justify-between items-center">
        <div className="flex-1">
          <Icon>
            <div className="block w-[120px] h-[35px]" onClick={() => router.push('/')}>
              <div className="w-[33px] h-[33px]">
                <Instagram />
              </div>
            </div>
          </Icon>
        </div>
        <div className="flex-1 justify-center hidden sm:flex">
          <Search />
        </div>
        <div className="flex-1">
          <nav>
            <ul className="flex justify-end space-x-5">
              <li className="hidden sm:block">
                {selected === AppSelected.HOME ? (
                  <Icon href="/">
                    <HomeSelected
                      onClick={() => {
                        dispatch(selectedField(AppSelected.HOME));
                      }}
                    />
                  </Icon>
                ) : (
                  <Icon href="/">
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
                  <Icon href="/direct/inbox">
                    <MessengerSelected
                      onClick={() => {
                        dispatch(selectedField(AppSelected.MESSENGER));
                      }}
                    />
                  </Icon>
                ) : (
                  <Icon href="/direct/inbox">
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
                  <Icon href="/create/select">
                    <NewPostSelected
                      onClick={() => {
                        dispatch(selectedField(AppSelected.NEW_POST));
                      }}
                    />
                  </Icon>
                ) : (
                  <Icon href="/create/select">
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
                  <Icon href="/explore">
                    <FindPeopleSelected
                      onClick={() => {
                        dispatch(selectedField(AppSelected.FIND_PEOPLE));
                      }}
                    />
                  </Icon>
                ) : (
                  <Icon href="/explore">
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
                  <Icon href="">
                    <ActivityFeedSelected
                      onClick={() => {
                        dispatch(selectedField(AppSelected.ACTIVITY_FEED));
                      }}
                    />
                  </Icon>
                ) : (
                  <Icon href="">
                    <ActivityFeed
                      onClick={() => {
                        dispatch(selectedField(AppSelected.ACTIVITY_FEED));
                      }}
                    />
                  </Icon>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
