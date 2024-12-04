/*
  Appellation: particle-field <animated>
  Contrib: @FL03
*/
'use client';

import * as React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import {
  motion,
  HTMLMotionProps,
} from 'motion/react';
import { cn } from '@/utils';

const fieldVariants = cva('absolute inset-0 overflow-hidden w-full', {
  defaultVariants: {
    flavor: 'default',
    rounded: 'none',
    variant: 'default',
  },
  variants: {
    flavor: {
      default: 'bg-gradient-to-br from-foreground/25 to-background/85',
      foreground: 'bg-gradient-to-br from-foreground to-foreground/75',
      blueGreen: 'bg-gradient-to-br from-blue-500/50 to-green-500/50',
    },
    rounded: {
      'none': 'rounded-none',
      'full': 'rounded-full',
    },
    variant: {
      default: '',
    },
  },
});

type WeightedPoint = {
  weight: number;
  [key: string]: number;
};

type ParticleConstructor = (value: WeightedPoint, index: number,) => React.ReactNode;

type GenRand = (offset?: number, scale?: number) => number;

type ParticleProps = {
  index: number;
  value: WeightedPoint;
}

// Particle: React.FC<HTMLMotionProps<'div'> & ParticleProps
export const Particle: React.FC<
  HTMLMotionProps<'div'> &
    ParticleProps
> = ({ className, index, style, value, ...props }) => {

  const randBound: GenRand = (offset = 50, scale = 100) => Math.random() * scale - offset;
  const randDuration: GenRand = (offset = 10, scale = 10) => Math.random() * scale + offset;

  const generateBound = () => {
    const value = randBound();
    return [0, value, value, 0]
  }

  return (
    <motion.div
      key={index}
      className={cn('relative rounded-full',  'bg-gradient-to-br from-foreground to-foreground/75', className)}
      animate={{
        opacity: [0.75, 1, 0.75],
        x: generateBound(),
        y: generateBound(),
      }}
      style={{
        left: `${value.x}%`,
        top: `${value.y}%`,
        width: value.weight,
        height: value.weight,
        ...style,
      }}
      transition={{
        duration: randDuration(),
        repeat: Infinity,
        ...props.transition,
      }}
      {...props}
    />
  );
};

export const ParticleField: React.FC<
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof fieldVariants> & {
      count?: number;
      particle?: ParticleConstructor;
    }
> = ({ className, count = 100, flavor, variant, particle = (value, index) => <Particle key={index} index={index} value={value} />, ...props }) => {
  // initialize particles
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
      className={cn(fieldVariants({ flavor, variant }), className)}
      {...props}
    >
      {particles.map(particle)}
    </div>
  );
};
ParticleField.displayName = 'ParticleField';


export default ParticleField;