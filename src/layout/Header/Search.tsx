import React from 'react';

export const Search = () => {
  return (
    <div className="w-[200px] border-[1px] border-[#dbdbdb] flex justify-end items-center">
      <input className="focus:outline-none w-full py-1 px-4" placeholder="Search" />
    </div>
  );
};
