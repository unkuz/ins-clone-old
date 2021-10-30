import React from 'react';
import { toogleSearch } from '@/store/slice/appSlice';
import { useAppDispatch } from '@/store/hooks';
import { hiddenSearch } from '@/store/slice/appSlice';

export const SearchPopUp = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="z-30 absolute bg-white top-[55px] right-1/2 transform translate-x-1/2 w-[400px] h-[300px] border border-ins-border">
        <p className="ml-4 mt-4">Recent</p>
      </div>
      {/* exit */}
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-yellow-400/50 z-20"
        onClick={() => dispatch(hiddenSearch())}
      ></div>
    </>
  );
};
