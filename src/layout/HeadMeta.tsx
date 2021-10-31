import React from 'react';
import Head from 'next/head';

export const HeadMeta: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Cuzknothz</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="theme-color" content="#000000"></meta>
      </Head>
    </div>
  );
};
