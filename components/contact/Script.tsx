 
"use client";

import { useEffect } from "react";

export function Script() {
  useEffect(() => {
    const run = new Function(`
              // Simple intersection observer for reveal animations
              const observerOptions = {
                  threshold: 0.1
              };
      
              const observer = new IntersectionObserver((entries) => {
                  entries.forEach(entry => {
                      if (entry.isIntersecting) {
                          entry.target.classList.add('opacity-100', 'translate-y-0');
                          entry.target.classList.remove('opacity-0', 'translate-y-10');
                      }
                  });
              }, observerOptions);
      
              document.querySelectorAll('section').forEach(section => {
                  section.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
                  observer.observe(section);
              });
      
              // Initialize immediately
              document.addEventListener('DOMContentLoaded', () => {
                  setTimeout(() => {
                      document.querySelector('main > section:first-child').classList.remove('opacity-0', 'translate-y-10');
                      document.querySelector('main > section:first-child').classList.add('opacity-100', 'translate-y-0');
                  }, 100);
              });
          `);
    run();
  }, []);

  return null;
}
