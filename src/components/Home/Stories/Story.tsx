import React from 'react';
import { ImageNextJS } from '../../Common/ImageNextJS';

export const Story = ({ photoURL, name, email }: any) => {
  return (
    <div>
      <div className="h-[15px]"></div>
      <div className="bg-white p-[2px] rounded-full inline-block">
        <div className="bg-[#1770E6] p-[2px] rounded-full inline-block">
          <a className="bg-white p-[2px] rounded-full z-10 flex">
            <ImageNextJS src={photoURL} width={55} height={55} circle />
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="mx-auto">{name || email}</p>
      </div>
    </div>
  );
};
