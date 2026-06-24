 
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
      
              // Header transparency on scroll
              const header = document.getElementById('main-nav');
              window.addEventListener('scroll', () => {
                  if (window.scrollY > 50) {
                      header.classList.add('py-4', 'shadow-sm');
                      header.classList.remove('py-6');
                  } else {
                      header.classList.add('py-6');
                      header.classList.remove('py-4', 'shadow-sm');
                  }
              });
          `);
    run();
  }, []);

  return null;
}
