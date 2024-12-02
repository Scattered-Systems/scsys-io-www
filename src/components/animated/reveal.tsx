/*
  Appellation: sandbox <animated>
  Contrib: @FL03
*/
import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const ShowButton: React.FC = () => {
  const [show, setShow] = React.useState(true);

  function handleClick() {
    setShow(!show);
  }

  return (
    <div className="flex flex-col flex-1 space-y-4">
      <div className="flex flex-row">
        <motion.button
          className="block px-4 py-2 text-center items-center rounded-xl border bg-accent text-accent-foreground"
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
        >
          {show ? 'Remove' : 'Add'}
        </motion.button>
      </div>

      <AnimatePresence>
        {show ? (
          <motion.div
            className="block h-16 w-16 bg-blue-500 rounded-xl"
            exit={{ opacity: 0, scale: 1.1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
}
