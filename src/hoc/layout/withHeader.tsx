import { Header } from '@/layout/Header/Header';
import React from 'react';

export const withHeader = (WrappedComponent: any) => {
  const WithHeader = () => {
    return (
      <>
        <Header />
        <WrappedComponent />
      </>
    );
  };
  return WithHeader;
};
