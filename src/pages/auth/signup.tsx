import BackIcon from '@/assets/svg/back_arrow_icon.svg';
import { ISignUpWithEmail } from '@/models/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { createUserWithEmailRequest } from '@/store/reducers/authSlice';
import { useAppDispatch } from '@/store/hooks';

const schema = yup
  .object({
    username: yup.string().min(3).max(20).required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(20).required(),
  })
  .required();

const SignUp: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: ISignUpWithEmail) => dispatch(createUserWithEmailRequest(data));
  return (
    <div className="w-screen sm:w-full min-h-screen flex justify-center items-center">
      <div className="w-[320px] h-[550px]">
        <div className="h-[30px]"></div>
        <div className="h-[450px] border-[1px] border-ins-border flex flex-col items-center justify-start relative">
          <div className="w-[170px] mt-16">
            <Image
              src={require('@/assets/images/instagram_logo.png')}
              alt=""
              className="object-cover"
            />
          </div>
          <div className="h-[90px]"></div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register('username')}
              placeholder="Username"
              className="border-[1px] border-ins-border focus:outline-none w-[230px] py-2 px-3 focus:border-indigo-600"
            />

            <div className="h-[20px] text-red-500">
              <p>{errors.username?.message}</p>
            </div>
            <input
              {...register('email')}
              placeholder="Email"
              className="border-[1px] border-ins-border focus:outline-none w-[230px] py-2 px-3 focus:border-indigo-600"
            />

            <div className="h-[20px] text-red-500">
              <p>{errors.email?.message}</p>
            </div>
            <input
              {...register('password')}
              placeholder="Password"
              type="password"
              className="border-[1px] border-ins-border focus:outline-none w-[230px] py-2 px-3 focus:border-indigo-600"
            />

            <div className="h-[20px] text-red-500">
              <p>{errors.password?.message}</p>
            </div>
            <input
              type="submit"
              value="Sign Up"
              className="border-[1px] border-ins-border focus:outline-none w-[230px] py-2 px-3 cursor-pointer text-blue-500"
            />
          </form>
          <div className="h-[10px]"></div>
          {/* back to sign in */}
          <div
            className="absolute top-0 left-0 flex cursor-pointer w-[60px] h-[35px] justify-center items-center"
            onClick={() => {
              router.push('/auth/signin');
            }}
          >
            <BackIcon />
            <span>Back</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
