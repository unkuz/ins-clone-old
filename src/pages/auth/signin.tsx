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
import Google from '@/assets/svg/google.svg';
import Facebook from '@/assets/svg/facebook.svg';
import { motion } from 'framer-motion';

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(20).required(),
  })
  .required();

const signInVariants = {
  hidden: {
    x: -100,
    opacity: 90,
    rotate: 900,
  },
  visible: {
    x: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
};
const loginButtonVariants = {
  hidden: {
    x: '-100vw',
    rotate: -90,
    scale: 0,
  },
  visible: {
    x: 0,
    rotate: 0,
    scale: 1,
    transition: {
      type: 'spring',
    },
  },
};
const loginButtonVariantsZ = {
  hidden: {
    x: '100vw',
    rotate: 90,
    scale: 0,
  },
  visible: {
    x: 0,
    rotate: 0,
    scale: 1,
    transition: {
      type: 'spring',
    },
  },
};
const dropVariants = {
  hidden: {
    y: '-100vh',
    opacity: 0,
    rotate: 360,
  },
  visible: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      type: 'spring',
    },
  },
};

const SignInPage: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.auth.status);
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
    <div className="w-full bg-[#fafafa]">
      {/* space between header */}
      <div className="md:h-[90px] h-[50px]"></div>
      <motion.div
        variants={signInVariants}
        initial="hidden"
        animate="visible"
        className="w-full overflow-hidden md:w-[400px] mx-auto md:border-[1px] md:bg-white md:border-ins-border rounded-xl md:shadow-md"
      >
        <div className="h-[70px]"></div>
        {/* logo section */}
        <div className="flex justify-center items-center ">
          <div className="relative w-[120px] h-[120px]">
            <Image src={require('@/assets/png/icon.png')} alt="" className="object-fill" />
          </div>
        </div>
        {/* space */}
        <div className="h-[40px]"></div>
        {/* form section */}
        <div className="flex justify-center items-center">
          <form onSubmit={handleSubmit(onSubmit)} className="w-4/5 md:w-4/6">
            <motion.input
              variants={loginButtonVariants}
              type="text"
              className="py-3 px-5 w-full rounded-lg border-ins-border border-[1px] shadow-lg"
              {...register('email')}
              placeholder="Email"
            />
            <div className="h-[30px] flex justify-center items-center text-red-500">
              {errors.email?.message}
            </div>
            <motion.input
              variants={loginButtonVariantsZ}
              type="password"
              className="py-3 px-5 w-full rounded-lg border-ins-border border-[1px] shadow-lg"
              placeholder="Password"
              {...register('password')}
            />
            <div className="h-[30px] flex justify-center items-center text-red-500">
              {errors.password?.message}
            </div>
            <motion.button
              variants={dropVariants}
              className="px-10 py-3 border rounded-xl w-full bg-gradient-to-r border-ins-border shadow-lg from-[#FBDA61] to-[#FC00FF] hover:bg-blue-300 active:bg-blue-300"
              type="submit"
            >
              Login
            </motion.button>
          </form>
        </div>
        {/* space */}
        <div className="h-[30px] flex justify-center items-center ">/---------OR---------/</div>
        <motion.div
          variants={dropVariants}
          onClick={() => router.push('/auth/signup')}
          className="shadow-lg sm:cursor-pointer bg-gradient-to-br from-[#FAD961] to-[#F76B1C] w-4/5 h-[42px] md:w-4/6 mx-auto flex justify-center items-center border-ins-border border-[1px] rounded-lg"
        >
          <p>Create Account with Email</p>
        </motion.div>
        {/* space */}
        <div className="h-[15px]"></div>
        <motion.div
          variants={dropVariants}
          onClick={() => dispatch(signInWithGoogleRequest())}
          className="shadow-lg sm:cursor-pointer w-4/5 bg-gradient-to-l from-[#FFE53B] to-[#FF2525] h-[42px] md:w-4/6 mx-auto flex justify-center items-center border-ins-border border-[1px] rounded-lg"
        >
          <div className="w-[27px] h-[27px]">
            <Google />
          </div>
          <p className="ml-3">SignIn with Google</p>
        </motion.div>
        <div className="h-[15px]"></div>
        <motion.div
          variants={dropVariants}
          onClick={() => dispatch(signInWithFacebookRequest())}
          className="shadow-lg sm:cursor-pointer w-4/5 bg-gradient-to-r from-[#21D4FD] to-[#B721FF] h-[42px] md:w-4/6 mx-auto flex justify-center items-center border-ins-border border-[1px] rounded-lg"
        >
          <div className="w-[30px] h-[30px]">
            <Facebook />
          </div>
          <p className="ml-3">SignIn with Facebook</p>
        </motion.div>
        <div className="h-[10px]"></div>
        <div className="h-[20px]"></div>
      </motion.div>
    </div>
  );
};

export default React.memo(SignInPage);
