/*
  Appellation: card <animated>
  Contrib: @FL03
*/
'use client';

import * as React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Card } from '@/components/ui/card';
import { cn } from '@/utils';

type CardProps = {}


export const AnimatedCard: React.FC<React.HTMLAttributes<HTMLDivElement> & CardProps> = ({ className, ...props }) => {
  const scaleParms = {
    stiffness: 5,
    damping: 15,
  }
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // Create smoother spring animations with reduced rotation
  const rotateX = useSpring(useTransform(y, [-100, 100], [5, -5]), scaleParms);
  const rotateY = useSpring(useTransform(x, [-100, 100], [-5, 5]), scaleParms);

  // Add a subtle scale effect
  const scale = useSpring(1.02, {
    stiffness: 100,
    damping: 20,
  });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set((event.clientX - centerX) * 0.5); // Reduce sensitivity
    y.set((event.clientY - centerY) * 0.5); // Reduce sensitivity
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