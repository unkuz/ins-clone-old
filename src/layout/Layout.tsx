import React from 'react';
import { HeadMeta } from '@/layout/HeadMeta';
import { Header } from '@/layout/Header/Header';
import { TaskBar } from '@/layout/TaskBar/TaskBar';
import { SearchPopUp } from '@/components/SearchPopUp/SearchPopUp';
import { useAppSelector, useAppDispatch } from '@/store';
import Post from '@/layout/Post/Post';
import { ProfilePop } from '@/components/ProfilePop/ProfilePop';
import { AppSelected, toogleProfileShow, setEditProfileHidden } from '@/store/reducers/appSlice';
import EditProfile from './EditProfile/EditProfile';

export const Layout: React.FC = ({ children }) => {
  const isSearchPopUpShow = useAppSelector((state) => state.app.isShowSearchPopUp);
  const isProfilePopUpShow = useAppSelector((state) => state.app.isProfilePopUp);
  const isEditProfilePopUpShow = useAppSelector((state) => state.app.isEditProfilePopUp);
  const selected = useAppSelector((state) => state.app.selected);
  const dispatch = useAppDispatch();
  console.log(isEditProfilePopUpShow);

  return (
    <div
      className={`${
        selected === AppSelected.NEW_POST || isEditProfilePopUpShow === true
          ? 'max-h-screen overflow-hidden'
          : ''
      } text-xs w-full relative`}
    >
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
    </div>
  );
};
