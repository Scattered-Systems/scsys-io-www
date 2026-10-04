import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import { SITE } from '@/lib/config';

/** Text signature while exact approved SVG bytes are unavailable.
 * This is not a replacement mark. Never approximate canonical geometry.
 */
export const ScsysLogo = ({ className, ...props }: ComponentProps<'span'>) => (
  <span className={cn('site-signature', className)} {...props}>
    {SITE.short.toUpperCase()}
  </span>
);
export default ScsysLogo;
