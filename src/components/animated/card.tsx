/*
  Appellation: card <animated>
  Contrib: @FL03
*/
'use client';

import * as React from 'react';
import { motion, SpringOptions, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type CardProps = {
  sensitivity?: number;
  springOptions?: SpringOptions;
}

export const AnimatedCard: React.FC<React.HTMLAttributes<HTMLDivElement> & CardProps> = ({ className, sensitivity, springOptions, ...props }) => {
  sensitivity ||= 0.25;
  console.log(sensitivity);
  springOptions ||= {
    stiffness: 100,
    damping: 15,
  };
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // setup the x-axis rotation
  const rotateX = useSpring(
    useTransform(y, [-100, 100], [5, -5]),
    springOptions
  );
  // setup the y-axis rotation
  const rotateY = useSpring(
    useTransform(x, [-100, 100], [-5, 5]),
    springOptions
  );
  // setup the scale
  const scale = useSpring(1.02, {
    stiffness: 100,
    damping: 20,
  });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set((event.clientX - centerX) * sensitivity!); // Reduce sensitivity
    y.set((event.clientY - centerY) * sensitivity!); // Reduce sensitivity
    scale.set(1.02);
  };

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    scale.set(1);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Card
        className={cn(
          '',
          className
        )}
        {...props}
      />
    </motion.div>
  );
};
AnimatedCard.displayName = 'AnimatedCard';