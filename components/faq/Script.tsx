 
"use client";

import { useEffect } from "react";

export function Script() {
  useEffect(() => {
    const run = new Function(`
              function toggleAccordion(button) {
                  const item = button.parentElement;
                  const wasActive = item.classList.contains('active');
                  
                  // Close all items in this group (optional, depending on desired behavior)
                  const parentGroup = item.parentElement;
                  parentGroup.querySelectorAll('.accordion-item').forEach(el => {
                      el.classList.remove('active');
                  });
      
                  // Toggle current item
                  if (!wasActive) {
                      item.classList.add('active');
                  }
              }
          `);
    run();
  }, []);

  return null;
}
