import { Icon } from '@/components/Icon';
import React from 'react';
import Image from 'next/image';
import Comment from '@/assets/svg/comment.svg';

import Like from '@/assets/svg/like.svg';

interface IProps {
  likes: number;
  comments: number;
  imageUrl: string;
}

export const MiniPost: React.FC<IProps> = ({ likes, comments, imageUrl }) => {
  return (
    <div className="bg-blue-300 min-h-[100px] aspect-w-1 aspect-h-1 relative group">
      <Image src={imageUrl} alt="" layout="fill" className="object-cover" />
      <div className="absolute hidden group-hover:flex inset-0 justify-center items-center bg-black/50 text-white space-x-8">
        <div>
          <div className="text-black invert flex flex-col justify-center items-center">
            <Icon size={25}>
              <Like />
            </Icon>
            <p>{likes}</p>
          </div>
        </div>
        <div>
          <div className="text-black invert flex flex-col justify-center items-center">
            <Icon size={25}>
              <Comment />
            </Icon>
            <p>{comments}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
