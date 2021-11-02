import React from 'react';
import { HeadMeta } from '@/layout/HeadMeta';
import { Header } from '@/layout/Header/Header';
import { TaskBar } from '@/layout/TaskBar/TaskBar';
import { SearchPopUp } from '@/components/SearchPopUp/SearchPopUp';
import { useAppSelector, useAppDispatch } from '@/store';
import Post from '@/layout/Post/Post';
import { ProfilePop } from '@/components/ProfilePop/ProfilePop';
import { toogleProfileShow } from '@/store/reducers/appSlice';

export const Layout: React.FC = ({ children }) => {
  const isSearchPopUpShow = useAppSelector((state) => state.app.isShowSearchPopUp);
  const isProfilePopUpShow = useAppSelector((state) => state.app.isProfilePopUp);
  const dispatch = useAppDispatch();

  return (
    <div className="text-xs w-full relative">
      <HeadMeta />
      {/* {isSearchPopUpShow && <SearchPopUp />} */}
      {/* <div className="w-screen sm:w-[950px] mx-auto">{children}</div> */}
      {children}
      {/* <TaskBar />
      <div className="w-full h-[100px]"></div> */}

      {/* PopUp */}
      <Post />
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
    </div>
  );
};
