/*
  Appellation: particle-hero <module>
  Contrib: @FL03
*/
import * as React from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from 'motion/react';
import { cn } from '@/utils';
import { ParticleField } from './particle-field';

export const ParticleFieldHeader: React.FC<
  React.HTMLAttributes<HTMLDivElement> & {
    count?: number;
  }
> = ({ children, className, count, ...props }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [0, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [0, 300], [-5, 5]);

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget?.getBoundingClientRect();
    mouseX.set(e.clientX + rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const springConfig = { stiffness: 100, damping: 30 };
  const scaleSpring = useSpring(1, springConfig);

  return (
    <div
      className={cn(
        'relative',
        'relative inset-0 flex flex-col flex-1 justify-start w-full overflow-hidden',
        className
      )}
      {...props}
    >
      <ParticleField count={count} className="rounded-full" />
      <div className="block m-auto w-fit">
        <motion.div
          className="relative z-10 text-center m-auto bg-gradient-to-br from-background to-background/50 w-fit px-4 py-2 rounded-xl"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, stiffness: 100, damping: 30 }}
          onMouseEnter={() => scaleSpring.set(1)}
          onMouseLeave={() => scaleSpring.set(0.95)}
          onMouseMove={handleMouseMove}
          style={{
            rotateX,
            rotateY,
            scale: scaleSpring,
            transformStyle: 'preserve-3d',
          }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};
ParticleFieldHeader.displayName = 'ParticleFieldHeader';

export default ParticleFieldHeader;
