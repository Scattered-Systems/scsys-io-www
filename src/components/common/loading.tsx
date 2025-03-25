/*
  Appellation: loading <screens>
  Contrib: @FL03
*/
'use client';

import * as React from 'react';
import { Centered } from '@/components/common/layouts';
import { HTMLMotionProps, motion } from 'motion/react';


export const Loading: React.FC = () => {
  return (
    <Centered>
      <div className="flex flex-1 items-center justify-center m-auto">
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 border-t-2 border-b-2 border-gray-800 rounded-full animate-spin" />
        </div>
      </div>
    </Centered>
  );
}
Loading.displayName = 'Loading';

export const CustomLoading: React.FC<HTMLMotionProps<'div'>> = ({
  ...props
}) => {
  return <motion.div {...props} />;
};
CustomLoading.displayName = 'CustomLoading';