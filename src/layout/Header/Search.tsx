import { useAppDispatch, useAppSelector } from '@/store/hooks';
import React from 'react';

export const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const isSearchPopUpShow = useAppSelector((state) => state.app.isShowSearchPopUp);
  return (
    <>
      <input
        className="focus:outline-none w-full py-[5px] px-7 focus:border-indigo-500 md:w-[150px] lg:w-[300px] border-[1px] border-[#dbdbdb] bg-white z-50 rounded-md"
        placeholder="Search"
      />
    </>
  );
};
