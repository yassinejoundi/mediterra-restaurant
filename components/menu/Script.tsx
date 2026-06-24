 
"use client";

import { useEffect } from "react";

export function Script() {
  useEffect(() => {
    const run = new Function(`
              // Simple active state observer for side nav
              document.addEventListener('DOMContentLoaded', () => {
                  const sections = document.querySelectorAll('section[id]');
                  const navLinks = document.querySelectorAll('aside nav a[href^="#"]');
                  
                  // Function to reset all links to inactive state based on JSON
                  const resetLinks = () => {
                      navLinks.forEach(link => {
                          link.className = "flex items-center gap-3 text-taupe hover:bg-sage transition-colors p-3 rounded-lg font-label uppercase tracking-widest text-xs group";
                          // Reset text color span if exists
                          const textSpan = link.querySelector('span');
                          if(textSpan) textSpan.classList.add('group-hover:text-text-primary', 'transition-colors');
                      });
                  };
      
                  // Function to set active link based on JSON active state
                  const setActiveLink = (id) => {
                      resetLinks();
                      const activeLink = document.querySelector(\`aside nav a[href="#\${id}"]\`);
                      if (activeLink) {
                          activeLink.className = "flex items-center gap-3 text-wine font-bold bg-plaster rounded-lg p-3 translate-x-1 transition-transform font-label uppercase tracking-widest text-xs group";
                          const textSpan = activeLink.querySelector('span');
                          if(textSpan) textSpan.classList.remove('group-hover:text-text-primary');
                      }
                  };
      
                  const observerOptions = {
                      root: null,
                      rootMargin: '-20% 0px -60% 0px', // Adjust triggers slightly above middle
                      threshold: 0
                  };
      
                  const observer = new IntersectionObserver((entries) => {
                      entries.forEach(entry => {
                          if (entry.isIntersecting) {
                              setActiveLink(entry.target.id);
                          }
                      });
                  }, observerOptions);
      
                  sections.forEach(section => observer.observe(section));
              });
          `);
    run();
  }, []);

  return null;
}
