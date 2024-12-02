/*
  Appellation: particle-hero <module>
  Contrib: @FL03
*/
import * as React from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  HTMLMotionProps,
  useSpring,
} from 'motion/react';
import { cn } from '@/utils';

import { ParticleField } from './particle-field';

const ParticleHeroTitle = React.forwardRef<HTMLHeadingElement, HTMLMotionProps<'h1'>>(({
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
ParticleHeroTitle.displayName = 'ParticleHeroTitle';

export const ParticleFieldHeader: React.FC<
  HTMLMotionProps<'div'> & { count?: number, description?: any, title?: any }
> = ({ children, className, count, description, style, title, ...props }) => {
  title ??= 'Scattered-Systems';
  description ??= 'Empowering the next generation of internet-based experiences.';
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [0, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [0, 300], [-5, 5]);

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget?.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const springConfig = { stiffness: 100, damping: 30 };
  const scaleSpring = useSpring(1, springConfig);

  return (
    <div className="flex flex-col flex-1 w-full items-center justify-center justify-items-center overflow-hidden ">
      <motion.div
        className={cn(
          'relative my-4 flex flex-col flex-1 w-full bg-gradient-to-br from-background to-background/80',
          className
        )}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => scaleSpring.set(0.95)}
        onMouseLeave={() => scaleSpring.set(1)}
        style={{
          scale: scaleSpring,
          ...style,
        }}
        {...props}
      >
        <ParticleField count={count} />
        <motion.div
          className="relative z-10 text-center my-auto"
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
        >
          <ParticleHeroTitle
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </ParticleHeroTitle>
          <motion.span
            className="text-xl mb-8 text-muted-foreground"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {description}
          </motion.span>
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {children}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
ParticleFieldHeader.displayName = 'ParticleFieldHeader';

export default ParticleFieldHeader;