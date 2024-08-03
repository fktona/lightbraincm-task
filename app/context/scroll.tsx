'use client';
import { useRef, useContext, createContext } from 'react';

type ScrollContextType = {
  aboutRef: React.RefObject<HTMLDivElement>;
  featureRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
};

export const ScrollContext = createContext<ScrollContextType | null>(null);

export default function ScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const featureRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  return (
    <ScrollContext.Provider
      value={
        {
          aboutRef,
          contactRef,
          featureRef,
          scrollToSection,
        } as ScrollContextType
      }
    >
      {children}
    </ScrollContext.Provider>
  );
}
export function useScroll() {
  return useContext(ScrollContext);
}
