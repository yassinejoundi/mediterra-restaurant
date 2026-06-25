 
"use client";

import { useEffect } from "react";

export function Script() {
  useEffect(() => {
    const run = new Function(`
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
