 
"use client";

import { useEffect } from "react";

export function Script() {
  useEffect(() => {
    const run = new Function(`
              // Simple scroll spy for sidebar
              const sections = document.querySelectorAll('section[id]');
              const navLinks = document.querySelectorAll('aside nav a');
      
              window.addEventListener('scroll', () => {
                  let current = '';
                  sections.forEach(section => {
                      const sectionTop = section.offsetTop;
                      const sectionHeight = section.clientHeight;
                      if (window.scrollY >= sectionTop - 200) {
                          current = section.getAttribute('id');
                      }
                  });
      
                  navLinks.forEach(link => {
                      link.classList.remove('text-wine', 'font-semibold', 'border-wine');
                      link.classList.add('text-taupe', 'border-transparent');
                      if (link.getAttribute('href').slice(1) === current) {
                          link.classList.add('text-wine', 'font-semibold', 'border-wine');
                          link.classList.remove('text-taupe', 'border-transparent');
                      }
                  });
              });
      
          `);
    run();
  }, []);

  return null;
}
