import React from 'react';
import Instagram from '@/assets/svg/instagram.svg';
import Home from '@/assets/svg/home.svg';
import ActivityFeed from '@/assets/svg/activity_feed.svg';
import Messenger from '@/assets/svg/messenger.svg';
import FindPeople from '@/assets/svg/find_people.svg';
import NewPost from '@/assets/svg/new_post.svg';
import { Icon } from '@/components/Icon';
import { Search } from '@/layout/Header/Search';
import Image from 'next/image';
import instagram_logo from '@/assets/images/instagram_logo.png';

export const Header = () => {
  return (
    <header className="w-full h-[55px] border-b-[1px] border-ins-border">
      <div className="w-9/12 mx-auto h-full flex justify-between items-center">
        <div className="flex-1">
          <Icon>
            <div className="block w-[120px] h-[35px]">
              <Image src={instagram_logo} layout="responsive" alt="" quality={100} />
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
                <Icon href="">
                  <Home />
                </Icon>
              </li>
              <li>
                <Icon href="">
                  <Messenger />
                </Icon>
              </li>
              <li>
                <Icon href="">
                  <NewPost />
                </Icon>
              </li>
              <li className="hidden sm:block">
                <Icon href="">
                  <FindPeople />
                </Icon>
              </li>

              <li className="hidden sm:block">
                <Icon href="">
                  <ActivityFeed />
                </Icon>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
