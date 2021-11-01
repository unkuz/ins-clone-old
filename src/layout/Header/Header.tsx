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
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { AppSelected, selectedField, showSearch } from '@/store/slice/appSlice';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

export const Header: React.FC = () => {
  const { data, status } = useSession();
  console.log(data);
  const dispatch = useAppDispatch();
  const selected = useAppSelector((state) => state.app.selected);
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
        <div className="flex-1 justify-center hidden md:flex">
          <div onClick={() => dispatch(showSearch())}>
            <Search />
          </div>
        </div>
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

            {status === 'authenticated' && (
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

            {status === 'authenticated' && (
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
            {status === 'authenticated' && (
              <div
                onClick={() => {
                  dispatch(selectedField(AppSelected.ACTIVITY_FEED));
                }}
              >
                <Icon size={22} href={AppRoutes.ERR_PAGE}>
                  {selected === AppSelected.ACTIVITY_FEED ? <ActivityFeedSelected /> : <ActivityFeed />}
                </Icon>
              </div>
            )}

            {/* Profile Picture or Sign In */}

            {data && data.user && data.user.image && status === 'authenticated' ? (
              <div onClick={() => signOut()}>
                <ImageNextJS width={25} height={25} circle src={data?.user?.image} pointer />
              </div>
            ) : (
              <>
                <div className="w-[22px] h-[22px] relative cursor-pointer" onClick={() => signIn()}>
                  <Icon size={22}>
                    <Image src={require('@/assets/images/login.png')} alt="" layout="fill" className="object-contain" />
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
