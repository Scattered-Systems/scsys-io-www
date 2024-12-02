/*
  Appellation: color-block <module>
  Contrib: @FL03
*/
'use client';

import * as React from 'react';
import { motion } from 'motion/react';

export const ColorBlock: React.FC = () => {
  
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-r from-foreground to-foreground/90"
      animate={{ scale: [1, 1.25, 1.5, 1.25, 1] }}
      transition={{ duration: 10, repeat: Infinity }}
    />
  );
}
ColorBlock.displayName = 'ColorBlock';

export const ColorChangingBackground: React.FC = () => {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ff0000'];

  return (
    <motion.div
      className="absolute inset-0"
      animate={{ backgroundColor: colors }}
      transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
    />
  );
};
ColorChangingBackground.displayName = 'ColorChangingBackground';

export const ColorBlockBackground: React.FC = () => {
  return (
    <div className="fixed inset-0">
        <ColorBlock />
    </div>
  );
};
ColorBlockBackground.displayName = 'ColorBlockBackground';

export default ColorBlock;
