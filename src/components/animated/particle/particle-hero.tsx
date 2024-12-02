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

import {
  AnimatedDescription,
  AnimatedTitle,
} from '@/components/animated/typography';
import { ParticleField } from './particle-field';

type HeaderProps = {
  count?: number;
  description?: any;
  title?: any;
}

export const ParticleFieldHeader: React.FC<
  HTMLMotionProps<'div'> & HeaderProps
> = ({ children, className, count, description, style, title, ...props }) => {
  title ??= 'Scattered-Systems';
  description ??=
    'Empowering the next generation of internet-based experiences.';
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
    <div className="inset-0 flex flex-col flex-1 justify-start w-full overflow-hidden">
      <motion.div
        className={cn('relative', 'flex flex-col flex-1 w-full', className)}
        onMouseMove={handleMouseMove}
        style={{
          scale: scaleSpring,
          ...style,
        }}
        {...props}
      >
        <ParticleField count={count} className="rounded-full" />
        <motion.div
          className="relative z-10 text-center m-auto bg-gradient-to-br from-background to-background/50 w-fit px-4 py-2 rounded-xl"
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
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
