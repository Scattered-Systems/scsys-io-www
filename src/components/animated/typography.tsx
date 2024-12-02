/*
  Appellation: typography <module>
  Contrib: @FL03
*/
import * as React from 'react';
import { motion, useMotionValue, useTransform, HTMLMotionProps } from 'motion/react';
import { cn } from '@/utils';

export const AnimatedTitle = React.forwardRef<HTMLHeadingElement, HTMLMotionProps<'h1'>>(({
  className,
  style,
  ...props
}, ref) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [0, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [0, 300], [-5, 5]);

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget?.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.h1
      ref={ref}
      className={cn(
        'text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary',
        className
      )}
      onMouseMove={handleMouseMove}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        ...style,
      }}
      {...props}
    />
  );
});
AnimatedTitle.displayName = 'AnimatedTitle';


export const AnimatedDescription = React.forwardRef<
  HTMLSpanElement,
  HTMLMotionProps<'span'>
>(({ className, style, ...props }, ref) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [0, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [0, 300], [-5, 5]);

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget?.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.span
      ref={ref}
      className={cn(
        'text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary',
        className
      )}
      onMouseMove={handleMouseMove}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        ...style,
      }}
      {...props}
    />
  );
});
AnimatedDescription.displayName = 'AnimatedDescription';