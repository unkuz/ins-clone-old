import Comment from '@/assets/svg/comment.svg';
import Emoji from '@/assets/svg/emoji.svg';
import Like from '@/assets/svg/like.svg';
import MoreOptions from '@/assets/svg/more_options.svg';
import Save from '@/assets/svg/save.svg';
import Share from '@/assets/svg/share.svg';
import { ImageNextJS } from '@/components/Common/ImageNextJS';
import { Story } from '@/components/Home/Stories/Story';
import { Post } from '@/store/reducers/postsSlice';
import React, { useEffect, useState } from 'react';
import { Icon } from '@/components/Icon';
import Image from 'next/image';
import { useAppSelector } from '@/store';

export const Card = ({ id, user, imageURL, likes, dislikes, timeStamp, caption, comment }: any) => {
  const authCurrentUser = useAppSelector((state) => state.auth.user);
  const isAuth = useAppSelector((state) => state.auth.status);
  const [commentInput, setCommentInput] = useState('');
  const [isCommentInputHasContent, setIsCommentInputHasContent] = useState(false);
  useEffect(() => {
    if (commentInput !== '') {
      setIsCommentInputHasContent(true);
    } else {
      setIsCommentInputHasContent(false);
    }
  }, [commentInput]);

  return (
    <>
      <div className="w-screen shadow-md md:w-[600px] border-[1px] border-ins-border rounded-lg">
        {/* top card */}

        <div className="h-[50px] flex justify-between items-center">
          {/* userpost area */}
          <div className="ml-[10px] bg-blue/20 h-full flex justify-center items-center">
            <div className="bg-[#1770E6] rounded-full p-[2px] md:cursor-pointer">
              <div className="bg-white rounded-full p-[2px]">
                <div className="relative w-[35px] h-[35px] rounded-full bg-white overflow-hidden p-[2px]">
                  <Image
                    src={user?.photoURL}
                    alt={user?.username}
                    layout="fill"
                    className="object-fill"
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="ml-2 md:cursor-pointer">{user.username}</p>
            </div>
          </div>
          {/* option post */}
          <div className="mr-[10px]">
            <div className="w-[30px] md:cursor-pointer">
              <MoreOptions />
            </div>
          </div>
        </div>
        {/* Picture video area */}
        <div>
          <div className="relative w-full h-auto aspect-w-5 aspect-h-6">
            <Image
              src={imageURL ? imageURL : ''}
              layout="fill"
              alt={caption}
              className="object-cover"
            />
          </div>
        </div>
        {/* Icon section */}
        <div className="h-[50px] flex justify-between items-center">
          {/* left */}
          <div className="flex space-x-2 ml-[10px]">
            <div className="w-[22px] md:cursor-pointer">
              <Like />
            </div>
            <div className="w-[22px] md:cursor-pointer">
              <Comment />
            </div>
            <div className="w-[22px] md:cursor-pointer">
              <Share />
            </div>
          </div>
          {/* right */}
          <div className="mr-[10px]">
            <div className="w-[22px] md:cursor-pointer">
              <Save />
            </div>
          </div>
        </div>
        {/* like count */}
        <div>
          <p className="md:cursor-pointer ml-[10px]">{likes.length} Likes</p>
        </div>
        <div className="h-[10px]"></div>
        {/* caption section */}
        <div>
          <div className="ml-[10px] mr-[10px]">
            <span className="md:cursor-pointer font-semibold mr-[6px]">{user.username}</span>
            <p className="inline-block">{caption}</p>
          </div>
        </div>
        {/* view all comment */}
        <div>
          <div className="ml-[10px] text-[#9e9e9e] text-sm md:cursor-pointer">
            <p>View all {(comment && comment?.comment && comment.comment.length) || 0} comments</p>
          </div>
        </div>
        {/* timestamp */}
        <div>
          <div className="ml-[10px] text-[#9e9e9e]">
            <p>1 year ago</p>
          </div>
        </div>
        <div className="h-[10px]"></div>
        {/* comment section */}
        {isAuth === 'authenticated' && (
          <div className="border-t-[1px] border-ins-border">
            <div className="ml-[10px] mr-[10px]">
              <div className="h-[50px] flex justify-between items-center">
                {/* avatar section */}
                <div>
                  <div className="bg-[#1770E6] rounded-full p-[2px] md:cursor-pointer inline-block">
                    <div className="bg-white rounded-full p-[2px]  flex justify-center items-center">
                      <div className="relative w-[30px] h-[30px] rounded-full bg-white overflow-hidden p-[2px]">
                        <Image
                          src={authCurrentUser?.photoURL ? authCurrentUser?.photoURL : ''}
                          alt={authCurrentUser?.name}
                          layout="fill"
                          className="object-fill"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* comment content section */}
                <div>
                  <input
                    type="text"
                    className="w-[190px] sm:w-[300px] md:w-[400px] py-2 px-9 focus:outline-none"
                    placeholder="Add a comment .../"
                    value={commentInput}
                    onChange={(e) => {
                      setCommentInput((prev) => e.target.value);
                    }}
                  />
                </div>
                {/* post section */}
                <div>
                  <p
                    className={`md:cursor-pointer ${
                      isCommentInputHasContent ? 'text-blue-500' : ''
                    }`}
                  >
                    Post
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="h-[22px]"></div>
    </>
  );
};
