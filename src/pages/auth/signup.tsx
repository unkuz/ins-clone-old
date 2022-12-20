import BackIcon from '@/assets/svg/back_arrow_icon.svg';
import { ISignUpWithEmail } from '@/utils/types/auth';
import { useAppDispatch, useAppSelector } from '@/store';
import { createUserWithEmailRequest } from '@/store/reducers/authSlice';
import { yupResolver } from '@hookform/resolvers/yup';
import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Icon } from '@/components/Icon';
import { AppRoutes } from '@/routes';
import Instagram from '@/assets/svg/instagram.svg';
import { motion } from 'framer-motion';

const signUpAnimate = {
  hidden: {
    opacity: 0,
    y: '-100vh',
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: 'spring',
    },
  },
};
const schema = yup
  .object({
    username: yup.string().min(3).max(20).required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(20).required(),
    passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
  })
  .required();

const SignUpPage: NextPage = () => {
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
  const onSubmit = (data: ISignUpWithEmail) => dispatch(createUserWithEmailRequest(data));
  const errMsg = useAppSelector((state) => state.auth.errMsg);
  return (
    <div className="w-full bg-[#fafafa] min-h-screen">
      {/* space between header */}
      <div className="md:h-[90px] h-[50px]"></div>
      <motion.div
        variants={signUpAnimate}
        initial="hidden"
        animate="visible"
        className="w-full md:w-[400px] mx-auto md:border-[1px] md:bg-white md:border-ins-border rounded-xl md:shadow-md"
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
            <input
              type="text"
              className="py-3 px-5 w-full rounded-lg border-ins-border border-[1px] shadow-lg"
              {...register('username')}
              placeholder="Username"
            />
            <div className="h-[30px] flex justify-center items-center text-red-500">
              {errors.username?.message}
            </div>
            <input
              type="text"
              className="py-3 px-5 w-full rounded-lg border-ins-border border-[1px] shadow-lg"
              {...register('email')}
              placeholder="Email"
            />
            <div className="h-[30px] flex justify-center items-center text-red-500">
              {errors.email?.message}
            </div>
            <input
              type="password"
              className="py-3 px-5 w-full rounded-lg border-ins-border border-[1px] shadow-lg"
              placeholder="Password"
              {...register('password')}
            />
            <div className="h-[30px] flex justify-center items-center text-red-500">
              {errors.password?.message}
            </div>
            <input
              type="password"
              className="py-3 px-5 w-full rounded-lg border-ins-border border-[1px] shadow-lg"
              placeholder="Confirm Password"
              {...register('passwordConfirmation')}
            />
            <div className="h-[30px] flex justify-center items-center text-red-500">
              {errors.passwordConfirmation?.message}
            </div>
            <button
              className="px-10 py-3 border rounded-xl w-full bg-gradient-to-r border-ins-border shadow-lg from-[#FBDA61] to-[#FC00FF] hover:bg-blue-300 active:bg-blue-300"
              type="submit"
            >
              Create Account
            </button>
          </form>
        </div>
        {/* space */}

        {/* space */}
        <div className="h-[15px]"></div>

        <div className="h-[20px]"></div>
      </motion.div>
    </div>
  );
};

export default React.memo(SignUpPage);
