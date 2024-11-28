/*
  Appellation: loading <screens>
  Contrib: @FL03
*/
'use client';

import * as React from 'react';
import { TailSpin } from 'react-loader-spinner';
import { Centered } from '@/components/common/layouts';

export const Loading: React.FC = () => {
  return (
    <Centered>
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Centered>
  );
}
Loading.displayName = 'Loading';
