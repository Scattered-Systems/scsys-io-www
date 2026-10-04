import type { PropsWithChildren, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export const SectionHeader = ({
  title,
  description,
  className,
}: {
  title?: ReactNode;
  description?: ReactNode;
  className?: string;
}) => (
  <header className={cn('flex flex-col gap-5', className)}>
    {title && <h2 className='site-heading'>{title}</h2>}
    {description && (
      <p className='max-w-xl text-lg text-muted-foreground'>{description}</p>
    )}
  </header>
);
export const Section = ({
  id,
  className,
  containerClassName,
  children,
}: PropsWithChildren<{
  id?: string;
  className?: string;
  containerClassName?: string;
}>) => (
  <section id={id} className={cn('site-section', className)}>
    <div className={cn('site-container', containerClassName)}>{children}</div>
  </section>
);
export default Section;
