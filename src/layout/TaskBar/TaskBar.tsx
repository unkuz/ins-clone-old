import React from 'react';
import Instagram from '@/assets/svg/instagram.svg';
import Home from '@/assets/svg/home.svg';
import ActivityFeed from '@/assets/svg/activity_feed.svg';
import Messenger from '@/assets/svg/messenger.svg';
import FindPeople from '@/assets/svg/find_people.svg';
import NewPost from '@/assets/svg/new_post.svg';
import Search from '@/assets/svg/search.svg';
import { Icon } from '@/components/Icon';

export const TaskBar: React.FC = () => {
  return (
    <div className="h-[55px] sm:hidden border-t-[1px] border-[#dbdbdb] w-full fixed bottom-0 left-0 flex justify-evenly items-center">
      <Icon>
        <Home />
      </Icon>
      <Icon>
        <Search />
      </Icon>
      <Icon>
        <NewPost />
      </Icon>
      <Icon>
        <ActivityFeed />
      </Icon>
    </div>
  );
};
