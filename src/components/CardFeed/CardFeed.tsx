import React, { useState, useEffect } from 'react';
import { Story } from '@/components/Stories/Story';
import MoreOptions from '@/assets/svg/more_options.svg';
import { Icon } from '../Icon';
import Like from '@/assets/svg/like.svg';
import Share from '@/assets/svg/share.svg';
import Comment from '@/assets/svg/comment.svg';
import Save from '@/assets/svg/save.svg';
import Emoji from '@/assets/svg/emoji.svg';
import Image from 'next/image';

export const CardFeed = () => {
  const [comment, setComment] = useState('');
  const [isComment, setIsComment] = useState<boolean>(false);
  useEffect(() => {
    if (comment) {
      return setIsComment((prev) => true);
    }
    setIsComment((prev) => false);
  }, [comment, isComment]);

  return (
    <div>
      {/* header section */}
      <div className="w-full sm:w-[615px] h-[70px] border-[1px] border-ins-border ">
        <div className="w-11/12 h-full flex justify-between items-center mx-auto">
          <div className="scale-75">
            <Story />
          </div>
          <Icon>
            <MoreOptions />
          </Icon>
        </div>
      </div>
      {/* picture video section */}
      <div className="w-[615px] border-ins-border border-[1px] border-t-0 flex flex-col justify-end">
        <div className="w-full h-[700px] relative">
          <Image
            layout="fill"
            className="object-cover"
            alt=""
            quality={100}
            src="https://images.unsplash.com/photo-1635451321197-9c7528b18a5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
          />
        </div>
        {/* comment section */}
        <div className="w-full h-[235px] flex flex-col justify-end">
          <div className="w-11/12 h-[60px] mx-auto flex justify-between items-center">
            <div className="flex justify-center items-center space-x-3">
              <Icon>
                <Like />
              </Icon>
              <Icon>
                <Comment />
              </Icon>
              <Icon>
                <Share />
              </Icon>
            </div>
            <div>
              <Icon>
                <Save />
              </Icon>
            </div>
          </div>
          <div className="w-11/12 mx-auto text-red-600 cursor-pointer">800 Like</div>
          <div className="w-11/12 mx-auto">
            <span className="text-blue-500 cursor-pointer text-sm">wavesaudio </span>
            🌌 Could you create depth in your mixes WITHOUT any reverbs, delays and spatial effects? We’ll prove how can
            you do just...
          </div>
          <div className="w-full h-5"></div>
          <div className="border-t-[1px] border-ins-border w-full h-[55px]">
            <div className="w-11/12 h-full mx-auto flex justify-between items-center">
              <div className="cursor-pointer">
                <Emoji />
              </div>
              <input
                className="focus:outline-none py-2 w-[400px]"
                placeholder="Add Comment"
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              />
              <p className={`${isComment ? 'text-blue-500' : ''} cursor-pointer `}>Post</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
