'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa6';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-14 xl:bottom-16 right-4 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-colorsPrimaryPrimaryColor text-textColor rounded-full shadow-lg z-50 overflow-hidden animate-bounce"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
      transition={{ duration: 1, ease: "easeInOut" }}>
      <FaArrowUp
        size={18}
        className="mx-auto text-white "
      />
    </motion.button>
  );
}
