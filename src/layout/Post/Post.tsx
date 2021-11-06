/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react';
import { NextPage } from 'next';
import Close from '@/assets/svg/close.svg';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectedField, AppSelected } from '@/store/reducers/appSlice';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { withLayout } from '@/hoc/layout/withLayout';
import { userPostRequest } from '@/store/reducers/postsSlice';
import CreatePost from '@/assets/svg/create_post.svg';
import Cropper from 'cropperjs';
import imageCompression from 'browser-image-compression';

const Post: NextPage = () => {
  const dispatch = useAppDispatch();
  const selected = useAppSelector((state) => state.app.selected);
  const user = useAppSelector((state) => state.auth.user);
  const router = useRouter();
  const inputUpload = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<string | null | undefined>();
  const [caption, setCaption] = useState('');
  const handleUpload = () => {
    if (inputUpload.current) {
      inputUpload.current.click();
    }
  };
  const handleImageUpload = async (event: any) => {
    const imageFile = event.target.files[0];
    const options = {
      maxSizeMB: 0.25,
      maxWidthOrHeight: 1500,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(imageFile, options);
      console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
      console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`);
      const base64URL = await imageCompression.getDataUrlFromFile(compressedFile);
      setSelectedFile(base64URL as unknown as string);
    } catch (error) {
      console.log(error);
    }
  };
  const handlePostToFireBase = () => {
    const data = {
      caption,
      selectedFile,
      userUid: user?.userUid,
    };
    dispatch(userPostRequest(data));
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Head>
        <title>Create Post</title>
      </Head>
      {selected === AppSelected.NEW_POST && (
        <div className="absolute inset-0 w-screen h-screen bg-black/70 z-30 flex justify-center items-center">
          <div
            onClick={() => {
              dispatch(selectedField(AppSelected.HOME));
              router.push('/');
            }}
            className="absolute right-4 top-4"
          >
            <Close className="cursor-pointer" />
          </div>
          <div className="z-50 w-full md:w-[400px] md:h-[550px] border-[1px] border-ins-border flex flex-col bg-white rounded-xl shadow-lg">
            <p className="w-full h-[50px] flex justify-center items-center border-b-[1px] border-ins-border">
              Create new post
            </p>
            <div className="h-[30px]"></div>
            <div className="w-full h-full flex flex-col justify-center items-center ">
              <div>
                {/* Area Drop Image */}
                {!selectedFile && (
                  <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    className="bg-black/20 w-[300px] h-[200px] flex flex-col justify-center items-center"
                  >
                    <CreatePost />
                    <p>Drag Image here !🤑🤑🤑</p>
                  </div>
                )}
              </div>
              <div>
                {selectedFile && (
                  <img
                    src={selectedFile}
                    alt=""
                    className={`object-cover w-[300px] h-[250px] md:h-[300px]`}
                    onClick={() => setSelectedFile((prev) => null)}
                  />
                )}
              </div>
              <div>
                {selectedFile && (
                  <>
                    <div className="mt-3 mb-3 text-blue-400 w-full flex justify-center items-center">
                      <p className="">Write a caption...</p>
                    </div>
                    <textarea
                      value={caption}
                      onChange={(e) => {
                        setCaption((prev) => e.target.value);
                      }}
                      className="resize-none w-[300px] h-[50px] border-ins-border border-[1px] focus:outline-none scrollbar-thin scrollbar-thumb-black"
                    ></textarea>
                  </>
                )}
              </div>
              <div>
                <input
                  type="file"
                  id="upload"
                  accept="image/*"
                  className="z-50 hidden"
                  ref={inputUpload}
                  onChange={handleImageUpload}
                />
                {!selectedFile && (
                  <div
                    onClick={handleUpload}
                    className="border-ins-border mb-4 border-[1px] rounded-md px-10 py-1 bg-blue-500 text-white mt-5 cursor-pointer"
                  >
                    Or Selected Image
                  </div>
                )}
                {selectedFile && (
                  <div
                    onClick={handlePostToFireBase}
                    className="border-ins-border active:bg-blue-400 mb-5 border-[1px] rounded-md px-32 md:px-10 py-2 md:py-1 bg-blue-500 text-white mt-5 cursor-pointer"
                  >
                    Post
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default withLayout(Post);
