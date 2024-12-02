/*
  Appellation: particle-field <animated>
  Contrib: @FL03
*/
'use client';

import * as React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  HTMLMotionProps,
} from 'motion/react';
import { cn } from '@/utils';
import { AnimatedTitle } from '@/components/animated/typography';

const particleVariants = cva('relative', {
  defaultVariants: {
    flavor: 'default',
    variant: 'default',
  },
  variants: {
    flavor: {
      default: 'bg-gradient-to-r from-foreground to-foreground/90',
      destructive: 'bg-gradient-to-r from-destructive to-destructive/90',
      blueGreen: 'bg-gradient-to-r from-blue-500/90 to-green-500/90',
    },
    variant: {
      default: 'rounded-full',
    },
  },
});

type ParticleFieldProps = {
  count?: number;
};

type Point = {
  [key: string]: number;
};

type WeightedPoint = {
  weight: number;
} & Point;

export const Particle: React.FC<
  HTMLMotionProps<'div'> &
    VariantProps<typeof particleVariants> & {
      index: number;
      value: WeightedPoint;
    }
> = ({ className, flavor, variant, index, value, ...props }) => {
  const generateBound = () => Math.random() * 100 - 50;

  const generateDuration = () => Math.random() * 10 + 10;

  return (
    <motion.div
      key={index}
      className={cn(particleVariants({ flavor, variant }), className)}
      style={{
        left: `${value.x}%`,
        top: `${value.y}%`,
        width: value.weight,
        height: value.weight,
      }}
      animate={{
        x: [0, generateBound()],
        y: [0, generateBound()],
      }}
      transition={{
        duration: generateDuration(),
        repeat: Infinity,
        repeatType: 'reverse',
      }}
      {...props}
    />
  );
};

export const ParticleField: React.FC<
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof particleVariants> &
    ParticleFieldProps
> = ({ className, count, flavor, variant, ...props }) => {
  count ||= 100;

  const [particles, setParticles] = React.useState<WeightedPoint[]>([]);

  React.useEffect(() => {
    const newParticles = Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      weight: Math.random() * 3 + 1,
    }));
    setParticles(newParticles);
  }, [count, setParticles]);

  return (
    <div
      className={cn('absolute inset-0 overflow-hidden', className)}
      {...props}
    >
      {particles.map((value, index) => (
        <Particle
          key={index}
          index={index}
          value={value}
          flavor={flavor}
          variant={variant}
        />
      ))}
    </div>
  );
};
ParticleField.displayName = 'ParticleField';


export default ParticleField;