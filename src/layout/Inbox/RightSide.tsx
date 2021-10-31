import AddPhotos from '@/assets/svg/add_photos.svg';
import Emoji from '@/assets/svg/emoji.svg';
import Like from '@/assets/svg/like.svg';
import React from 'react';

export const RightSide = () => {
  return (
    <div>
      <div className="w-4/6 h-full relative ">
        <div className="w-full h-[55px] flex justify-center items-center border-[1px]">iklfhjklsahjkf</div>
        <div className="h-full w-full">
          <div className=" absolute bottom-[10px] mx-auto w-full">
            <div className="w-11/12 mx-auto h-[50px] rounded-full border-[1px] border-ins-border ">
              <div className="w-11/12 h-full mx-auto flex items-center justify-between ">
                <div className="flex w-[450px] space-x-3 cursor-pointer">
                  <Emoji />
                  <input type="text" className="focus:outline-none w-[340px]" placeholder="Messenge..." />
                </div>
                <div className="flex space-x-2">
                  <div className="w-[20px] h-[20px] cursor-pointer">
                    <AddPhotos />
                  </div>
                  <div className="w-[20px] h-[20px] cursor-pointer">
                    <Like />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
