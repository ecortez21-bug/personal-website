"use client";

import { useState, useEffect } from 'react';

export function useScrollSpy(
  sectionIds: string[],
  options?: {
    offset?: number;
  }
) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const offset = options?.offset ?? 100;
      let currentSection: string | null = null;
      
      const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];

      for (const section of sections) {
        const sectionTop = section.offsetTop - offset;
        if (scrollPosition >= sectionTop) {
          currentSection = section.id;
        }
      }
      
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        currentSection = sectionIds[sectionIds.length - 1];
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, options?.offset]);

  return activeSection;
}
