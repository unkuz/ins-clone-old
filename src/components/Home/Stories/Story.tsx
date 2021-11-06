import React from 'react';
import { ImageNextJS } from '../../Common/ImageNextJS';

export const Story = ({ photoURL, name, email }: any) => {
  return (
    <div className="h-[110px] w-[67px]">
      <div className="h-[15px]"></div>
      <div className="bg-white p-[2px] rounded-full inline-block">
        <div className="bg-[#1770E6] p-[2px] rounded-full inline-block">
          <a className="bg-white p-[2px] rounded-full z-10 flex">
            <ImageNextJS
              src={
                photoURL
                  ? photoURL
                  : 'https://firebasestorage.googleapis.com/v0/b/instagram-cuzknothz.appspot.com/o/default.jpg?alt=media&token=c6dfb887-b739-4260-827e-608d1f405eed'
              }
              width={55}
              height={55}
              circle
            />
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <span className="mx-auto whitespace-nowrap !overflow-hidden overflow-ellipsis">
          {name || email}
        </span>
      </div>
    </div>
  );
};
