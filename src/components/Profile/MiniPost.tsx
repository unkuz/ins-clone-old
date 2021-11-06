import Comment from '@/assets/svg/comment.svg';
import Like from '@/assets/svg/like.svg';
import { Icon } from '@/components/Icon';
import Image from 'next/image';
import React from 'react';

interface IProps {
  likes: number;
  comments: number;
  imageUrl: string;
}

export const MiniPost: React.FC<IProps> = ({ likes, comments, imageUrl }) => {
  return (
    <div className="bg-blue-300 min-h-[100px] aspect-w-1 aspect-h-1 relative group">
      <Image
        src={
          imageUrl
            ? imageUrl
            : 'https://firebasestorage.googleapis.com/v0/b/instagram-cuzknothz.appspot.com/o/default.jpg?alt=media&token=c6dfb887-b739-4260-827e-608d1f405eed'
        }
        alt=""
        layout="fill"
        className="object-cover"
      />
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
