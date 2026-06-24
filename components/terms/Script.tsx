 
"use client";

import { useEffect } from "react";

export function Script() {
  useEffect(() => {
    const run = new Function(`
              // Simple scroll reveal for nav
              let lastScroll = 0;
              const nav = document.querySelector('nav');
              
              window.addEventListener('scroll', () => {
                  const currentScroll = window.pageYOffset;
                  if (currentScroll <= 0) {
                      nav.classList.remove('shadow-md');
                      return;
                  }
                  
                  if (currentScroll > lastScroll) {
                      // Scrolling down
                      nav.style.transform = 'translateY(-100%)';
                  } else {
                      // Scrolling up
                      nav.style.transform = 'translateY(0)';
                      nav.classList.add('shadow-md');
                  }
                  lastScroll = currentScroll;
              });
      
              // Smooth scroll for anchors
              document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                  anchor.addEventListener('click', function (e) {
                      e.preventDefault();
                      document.querySelector(this.getAttribute('href')).scrollIntoView({
                          behavior: 'smooth'
                      });
                  });
              });
          `);
    run();
  }, []);

  return null;
}
