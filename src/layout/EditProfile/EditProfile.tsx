import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAppDispatch, useAppSelector } from '@/store';
import { EditProfile as EditProfileData } from '@/utils/types/auth';
import { editProfileRequest } from '@/store/reducers/authSlice';
import { useRouter } from 'next/router';

const schema = yup
  .object({
    name: yup.string().min(5).required(),
    username: yup.string().min(5).required(),
    email: yup.string().email().required(),
    bio: yup.string().required(),
  })
  .required();

const EditProfile = () => {
  const userUid = useAppSelector((state) =>
    state.auth.user?.userUid ? state.auth.user?.userUid : ''
  );
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.auth.status);
  const router = useRouter();
  const errMsg = useAppSelector((state) => state.auth.errMsg);
  const user = useAppSelector((state) => state.auth.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: user?.name,
      username: user?.username,
      email: user?.email,
      bio: user?.bio,
    },
  });
  const onSubmit = (data: EditProfileData) => {
    data.userUid = userUid;
    console.log(data);
    dispatch(editProfileRequest(data));
  };

  return (
    <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 z-30 ">
      <div className="w-screen md:w-[400px] mx-auto border-[1px] border-ins-border bg-white  rounded-lg overflow-hidden shadow-lg">
        {/* top */}
        <div className="w-full h-[50px] flex justify-around items-center border-b-[1px] border-ins-border">
          {errMsg && <p className="">{errMsg}</p>}
          <p className="">Edit Profile</p>
        </div>
        {/* edit info */}
        <div className="">
          <div className="w-5/6 h-full mx-auto flex flex-col justify-between">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* name */}
              <div className="h-[20px]"></div>
              <div className="w-full h-[50px] ">
                <div className="flex justify-between items-center">
                  <p>Name :</p>
                  <input
                    {...register('name')}
                    className="py-2 px-6 focus:outline-none border-[1px] focus:border-indigo-400 rounded-md shadow-sm"
                  />
                </div>
                <div className="h-[20px] flex justify-center items-center">
                  <p className="text-red-500">{errors.name?.message}</p>
                </div>
              </div>
              <div className="h-[20px]"></div>
              <div className="w-full h-[50px] ">
                <div className="flex justify-between items-center">
                  <p>Username :</p>
                  <input
                    {...register('username')}
                    className="py-2 px-6 focus:outline-none border-[1px] focus:border-indigo-400 rounded-md shadow-sm"
                  />
                </div>
                <div className="h-[20px] flex justify-center items-center">
                  <p className="text-red-500">{errors.username?.message}</p>
                </div>
              </div>
              <div className="h-[20px]"></div>
              <div className="w-full h-[50px] ">
                <div className="flex justify-between items-center">
                  <p>Email :</p>
                  <input
                    {...register('email')}
                    className="py-2 px-6 focus:outline-none border-[1px] focus:border-indigo-400 rounded-md shadow-sm"
                  />
                </div>
                <div className="h-[20px] flex justify-center items-center">
                  <p className="text-red-500">{errors.email?.message}</p>
                </div>
              </div>
              <div className="h-[20px]"></div>
              <div className="w-full h-[50px] ">
                <div className="flex justify-between items-center">
                  <p>Bio :</p>
                  <textarea
                    {...register('bio')}
                    className="resize-none w-[195px] py-2 px-6 focus:outline-none border-[1px] focus:border-indigo-400 rounded-md shadow-sm"
                  />
                </div>
                <div className="h-[20px] flex justify-center items-center">
                  <p className="text-red-500">{errors.bio?.message}</p>
                </div>
              </div>
              <div className="h-[50px]"></div>
              <input
                type="submit"
                value="Save"
                className="w-full h-[40px] border-[1px] border-ins-border cursor-pointer bg-white hover:bg-blue-300 flex justify-center items-center rounded-lg active:bg-blue-300"
              />
              <div className="h-[10px]"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
