 
"use client";

import { useEffect } from "react";

export function Script() {
  useEffect(() => {
    const run = new Function(`
              // Simple Intersection Observer for revealing elements on scroll
              const observerOptions = {
                  threshold: 0.1,
                  rootMargin: '0px 0px -50px 0px'
              };
      
              const observer = new IntersectionObserver((entries) => {
                  entries.forEach(entry => {
                      if (entry.isIntersecting) {
                          entry.target.classList.add('visible');
                      }
                  });
              }, observerOptions);
      
              document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
      
              // Micro-interactions for buttons
              document.querySelectorAll('button').forEach(button => {
                  button.addEventListener('mousedown', () => button.classList.add('scale-95'));
                  button.addEventListener('mouseup', () => button.classList.remove('scale-95'));
                  button.addEventListener('mouseleave', () => button.classList.remove('scale-95'));
              });
          `);
    run();
  }, []);

  return null;
}
