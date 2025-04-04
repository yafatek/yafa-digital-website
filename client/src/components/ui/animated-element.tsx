import React, { useRef, ReactNode } from 'react';
import { useRevealAnimation } from '@/hooks/use-reveal-animation';
import { cn } from '@/lib/utils';

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade' | 'slide' | 'scale';
  delay?: 'none' | '100' | '200' | '300' | '400' | '500';
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function AnimatedElement({
  children,
  className,
  animation = 'slide',
  delay = 'none',
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
}: AnimatedElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useRevealAnimation(ref, { threshold, rootMargin, triggerOnce });

  const animationClass = 
    animation === 'fade' ? 'reveal-fade' :
    animation === 'scale' ? 'reveal-scale' : 
    'reveal-animation';

  const delayClass = delay !== 'none' ? `reveal-delay-${delay}` : '';

  return (
    <div
      ref={ref}
      className={cn(
        animationClass,
        delayClass,
        isInView ? 'revealed' : '',
        className
      )}
    >
      {children}
    </div>
  );
}