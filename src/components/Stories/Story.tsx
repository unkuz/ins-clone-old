import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ImageNextJS } from '../Common/ImageNextJS';

export const Story = () => {
  return (
    <div className="">
      <div className="h-[10px]"></div>
      <div className="bg-yellow-500 p-[3px] rounded-full inline-block">
        <a className="bg-white p-[1px] rounded-full z-10 flex">
          <ImageNextJS src="https://picsum.photos/seed/picsum/200/300" width={45} height={45} circle />
        </a>
      </div>
      <div className="flex justify-center">
        <p className="mx-auto">{(Math.random() + 1).toString(36).substring(7)}</p>
      </div>
    </div>
  );
};
