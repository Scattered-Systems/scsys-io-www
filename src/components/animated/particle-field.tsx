/*
  Appellation: particle-field <animated>
  Contrib: @FL03
*/
'use client';

import * as React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { Button } from '@/components/ui/button';

type Props = {
  count?: number;
}

type Particle = {
  x: number;
  y: number;
  size: number;
}

export const ParticleField: React.FC<Props> = ({ count = 50 }) => {
  const [particles, setParticles] = React.useState<
    Particle[]
  >([]);

  React.useEffect(() => {
    const newParticles = Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
    }));
    setParticles(newParticles);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute bg-primary/30 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}
    </div>
  );
};
ParticleField.displayName = 'ParticleField';

export const ParticleFieldHeader: React.FC<Props> = ({ count }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [0, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [0, 300], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const springConfig = { stiffness: 100, damping: 30 };
  const scaleSpring = useSpring(1, springConfig);

  return (
    <motion.div
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-background/80"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => scaleSpring.set(1.05)}
      onMouseLeave={() => scaleSpring.set(1)}
      style={{
        scale: scaleSpring,
      }}
    >
      <ParticleField count={count}/>
      <motion.div
        className="relative z-10 text-center"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        <motion.h1
          className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Scattered-Systems
        </motion.h1>
        <motion.p
          className="text-xl mb-8 text-muted-foreground"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Innovating the Future of Distributed Technologies
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button size="lg" className="mr-4">
            Explore Our Solutions
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
ParticleFieldHeader.displayName = 'ParticleFieldHeader';