import React from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'minecraft' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  className?: string;
  href?: string;
  target?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  href,
  target,
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-aqua-green/50 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-gradient-primary text-white hover:shadow-glow hover:scale-105',
    secondary:
      'bg-transparent border-2 border-aqua-green text-aqua-green hover:bg-aqua-green hover:text-white',
    minecraft: 'minecraft-btn',
    glass:
      'glass-card hover:bg-white/20 dark:hover:bg-black/30 text-gray-700 dark:text-gray-300 hover:text-aqua-green',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-2xl',
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon
          className={`${size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'} ${
            children ? 'mr-2' : ''
          }`}
        />
      )}
      {children}
      {Icon && iconPosition === 'right' && (
        <Icon
          className={`${size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'} ${
            children ? 'ml-2' : ''
          }`}
        />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        className={classes}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {content}
    </motion.button>
  );
};
