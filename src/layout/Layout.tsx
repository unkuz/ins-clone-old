import { ProfilePop } from '@/components/ProfilePop/ProfilePop';
import { HeadMeta } from '@/layout/HeadMeta';
import Post from '@/layout/Post/Post';
import { useAppDispatch, useAppSelector } from '@/store';
import {
  AppSelected,
  setActivityFeedHidden,
  setEditProfileHidden,
  toogleProfileShow,
} from '@/store/reducers/appSlice';
import { fetchAllPostsRequest } from '@/store/reducers/postsSlice';
import { fetchAllUsersRequest } from '@/store/reducers/usersSlice';
import React, { useEffect } from 'react';
import { ActivityFeed } from './ActivityFeed/ActivityFeed';
import EditProfile from './EditProfile/EditProfile';

export const Layout: React.FC = ({ children }) => {
  const isSearchPopUpShow = useAppSelector((state) => state.app.isShowSearchPopUp);
  const isProfilePopUpShow = useAppSelector((state) => state.app.profile.isProfilePopUp);
  const isEditProfilePopUpShow = useAppSelector((state) => state.app.profile.isEditProfilePopUp);
  const isActivityFeedPopUpShow = useAppSelector((state) => state.app.activity.isActivityFeedPopUp);
  const selected = useAppSelector((state) => state.app.selected);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllPostsRequest());
    dispatch(fetchAllUsersRequest());
  });

  return (
    <div
      className={`${
        selected === AppSelected.NEW_POST ||
        isEditProfilePopUpShow === true ||
        isActivityFeedPopUpShow === true
          ? 'h-screen overflow-hidden'
          : ''
      }text-xs w-full relative`}
    >
      <HeadMeta />
      {/* {isSearchPopUpShow && <SearchPopUp />} */}
      {/* <div className="w-screen sm:w-[950px] mx-auto">{children}</div> */}
      {children}
      {/* <TaskBar />
      <div className="w-full h-[100px]"></div> */}

      {/* PopUp */}
      <Post header layout footer />
      {isProfilePopUpShow && (
        <>
          <div
            className="fixed md:top-12 z-30 md:right-52 bottom-16 right-0"
            onClick={() => dispatch(toogleProfileShow())}
          >
            <ProfilePop />
          </div>
          <div
            className="absolute inset-0  z-20"
            onClick={() => dispatch(toogleProfileShow())}
          ></div>
        </>
      )}
      {isEditProfilePopUpShow && (
        <>
          <div className="" onClick={() => {}}>
            <EditProfile />
          </div>
          <div
            className="absolute inset-0 z-20 bg-black/20"
            onClick={() => dispatch(setEditProfileHidden())}
          ></div>
        </>
      )}
      {isActivityFeedPopUpShow && (
        <>
          <div className="" onClick={() => {}}>
            <ActivityFeed />
          </div>
          <div
            className="absolute inset-0 z-20 bg-black/20"
            onClick={() => dispatch(setActivityFeedHidden())}
          ></div>
        </>
      )}
    </div>
  );
};
