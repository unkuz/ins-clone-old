import React from 'react';
import Head from 'next/head';

export const HeadMeta: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Instagram Cuzknothz</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Clone by Cuzknothz" />
        <meta name="theme-color" content="#000000"></meta>
      </Head>
    </div>
  );
};
