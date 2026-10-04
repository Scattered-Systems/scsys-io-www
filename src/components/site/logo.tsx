import type { ComponentProps } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { SITE } from '@/lib/config';

/** Exact canonical master, with its original geometry and fixed fills. */
export const ScsysLogo = ({ className, ...props }: ComponentProps<'span'>) => (
  <span className={cn('site-logo', className)} {...props}>
    <Image
      src='/logo.svg'
      alt={SITE.name}
      width={294}
      height={274}
      loading='eager'
      unoptimized
      className='site-logo-mark'
    />
  </span>
);
export default ScsysLogo;
