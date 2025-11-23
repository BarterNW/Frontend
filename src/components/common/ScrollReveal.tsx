"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "slide" | "zoom" | "flip" | "blur-fade" | "rotate-fade" | "slide-rotate";
  delay?: number;
  className?: string;
  triggerOnce?: boolean;
  threshold?: number;
}

export function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  className,
  triggerOnce = true,
  threshold = 0.15,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation({ triggerOnce, threshold });

  const animationClass = {
    "fade-up": "scroll-fade-in-up",
    "fade-down": "scroll-fade-in-down",
    "fade-left": "scroll-fade-in-left",
    "fade-right": "scroll-fade-in-right",
    scale: "scroll-scale-in",
    slide: "scroll-slide-in",
    zoom: "scroll-zoom-in",
    flip: "scroll-flip-in",
    "blur-fade": "scroll-blur-fade-in",
    "rotate-fade": "scroll-rotate-fade-in",
    "slide-rotate": "scroll-slide-rotate-in",
  }[animation];

  const delayClass = delay > 0 ? `scroll-delay-${delay}` : "";

  return (
    <div
      ref={ref}
      className={cn(
        isVisible && animationClass,
        isVisible && delayClass,
        className
      )}
      style={{
        willChange: isVisible ? 'auto' : 'transform, opacity',
      }}
    >
      {children}
    </div>
  );
}
