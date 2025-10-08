'use client';

import { ReactNode, useState } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedCard({ 
  children, 
  className = '', 
  delay = 0 
}: AnimatedCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  // Simple animation trigger on mount
  useState(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  });

  return (
    <div
      className={`
        bg-white rounded-lg shadow-md p-6
        transform transition-all duration-500 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        hover:shadow-xl hover:scale-105
        ${className}
      `}
    >
      {children}
    </div>
  );
}
