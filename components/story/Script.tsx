 
"use client";

import { useEffect } from "react";

export function Script() {
  useEffect(() => {
    const run = new Function(`
              // Simple top nav scroll effect
              window.addEventListener('scroll', () => {
                  const nav = document.getElementById('top-nav');
                  if (window.scrollY > 50) {
                      nav.classList.add('bg-primary/90', 'backdrop-blur-md', 'border-b', 'border-terracotta/10');
                  } else {
                      nav.classList.remove('bg-primary/90', 'backdrop-blur-md', 'border-b', 'border-terracotta/10');
                  }
              });
          `);
    run();
  }, []);

  return null;
}
