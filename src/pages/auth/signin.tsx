import React, { useLayoutEffect } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { InputFormText } from '@/components/Common/InputFormText';
import { getProviders, signIn, useSession } from 'next-auth/react';
import { AppRoutes } from '@/routes';

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
};

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(5).max(20).required(),
  })
  .required();

const SignIn: React.FC = ({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { status } = useSession();
  useLayoutEffect(() => {
    if (status === 'authenticated') {
      router.push(AppRoutes.HOME_PAGE);
    }
  }, [status, router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => console.log(data);
  return (
    <div className="w-screen sm:w-full h-screen flex justify-center items-center ">
      <div className="w-[320px] h-[550px]">
        <div className="h-[30px]"></div>
        <div className="h-[450px] border-[1px] border-ins-border flex flex-col items-center justify-start">
          <div className="w-[170px] mt-16">
            <Image src={require('@/assets/images/instagram_logo.png')} alt="" className="object-cover" />
          </div>
          <div className="h-[90px]"></div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <InputFormText {...register('email')} placeholder="Email" />
            <div className="h-[20px] text-red-500">
              <p>{errors.email?.message}</p>
            </div>
            <InputFormText {...register('password')} placeholder="Password" />
            <div className="h-[20px] text-red-500">
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
            {Object.values(providers).map((i: any) => (
              <div
                onClick={() => signIn(i?.id)}
                key={i?.id}
                className="h-full cursor-pointer w-[110px] flex justify-center items-center bg-blue-300 border-[1px] border-indigo-400"
              >
                SignIn w {i?.name}
              </div>
            ))}
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

export default SignIn;
