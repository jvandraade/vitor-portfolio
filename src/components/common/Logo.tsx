import React from 'react';
import { motion } from 'framer-motion';

export const Logo: React.FC = () => {
  return (
    <motion.div
      className="relative cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.h1
        className="text-3xl md:text-4xl font-display font-bold text-aqua-green transition-colors duration-300 hover:text-gold"
        whileHover={{
          textShadow: '0 0 20px rgba(255, 215, 0, 0.6)',
        }}
      >
        VA
      </motion.h1>

      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 blur-sm"
        whileHover={{ opacity: 0.3 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};
