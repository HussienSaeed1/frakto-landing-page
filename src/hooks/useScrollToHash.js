'use client';
import { useEffect } from 'react';

export default function useScrollToHash() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        // Delay scroll slightly to ensure it's rendered
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);
}
