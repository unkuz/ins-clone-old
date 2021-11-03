import { ISignInWithEmail } from '@/utils/types/auth';
import { useAppDispatch, useAppSelector } from '@/store';
import {
  signInWithEmailRequest,
  signInWithFacebookRequest,
  signInWithGoogleRequest,
} from '@/store/reducers/authSlice';
import { yupResolver } from '@hookform/resolvers/yup';
import Instagram from '@/assets/svg/instagram.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Icon } from '@/components/Icon';
import { AppRoutes } from '@/routes';
import { NextPage } from 'next';

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(20).required(),
  })
  .required();

const SignInPage: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.auth.status);
  const errMsg = useAppSelector((state) => state.auth.errMsg);
  useEffect(() => {
    if (isAuth === 'authenticated') {
      router.push('/');
    }
  }, [isAuth, router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: ISignInWithEmail) => dispatch(signInWithEmailRequest(data));
  return (
    <div className="w-screen sm:w-full h-screen flex justify-center items-center ">
      <div className="w-[320px] h-[550px]">
        <div className="h-[30px]"></div>
        <div className="h-[450px] border-[1px] border-ins-border flex flex-col items-center justify-start">
          <div className="w-[170px] mt-16 flex justify-center items-center">
            <Icon size={50} href={AppRoutes.HOME_PAGE}>
              <Instagram />
            </Icon>
          </div>
          <div className="h-[90px] flex justify-center items-center text-red-500">
            <p>{errMsg && errMsg}</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
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

            <div className="h-[30px] text-red-500">
              <p>{errors.password?.message}</p>
            </div>
            <input
              type="submit"
              value="Log In"
              className="border-[1px] border-ins-border focus:outline-none w-[230px] py-2 px-3 cursor-pointer text-blue-500"
            />
          </form>
          <div className="h-[10px]"></div>
          <div className="cursor-pointer text-blue-500">Or</div>
          <div className="h-[30px] w-[230px]  flex justify-between items-center">
            <div
              onClick={() => dispatch(signInWithGoogleRequest())}
              className="h-full cursor-pointer w-[110px] flex justify-center items-center bg-blue-300 border-[1px] border-indigo-400"
            >
              SignIn w Google
            </div>
            <div
              onClick={() => dispatch(signInWithFacebookRequest())}
              className="h-full cursor-pointer w-[110px] flex justify-center items-center bg-blue-300 border-[1px] border-indigo-400"
            >
              SignIn w Facebook
            </div>
          </div>
        </div>
        <div className="h-[30px]"></div>
        <div className="h-[60px] border-[1px] border-ins-border flex justify-center items-center">
          <div>
            <span>{"Don't have an account ? "}</span>
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => {
                router.push('/auth/signup');
              }}
            >
              Sign up
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SignInPage);
