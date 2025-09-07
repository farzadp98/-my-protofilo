import React from 'react';
import { motion } from 'framer-motion';

const Avatar = ({ src, alt, size = 'medium', className = '', defaultImage = '', ...props }) => {
  let sizeClasses;
  switch (size) {
    case 'small':
      sizeClasses = 'w-16 h-16 text-lg';
      break;
    case 'medium':
      sizeClasses = 'w-24 h-24 text-xl';
      break;
    case 'large':
      sizeClasses = 'w-32 h-32 text-2xl';
      break;
    default:
      sizeClasses = 'w-24 h-24 text-xl';
  }

  const initials = alt ? alt.split(' ').map(n => n[0]).join('') : '';

  return (
    <motion.div
      className={`relative rounded-full flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-semibold shadow-md ${sizeClasses} ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
      ) : defaultImage ? (
        <img src={defaultImage} alt="Default Avatar" className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        <span>{initials}</span>
      )}
    </motion.div>
  );
};

export default Avatar; 