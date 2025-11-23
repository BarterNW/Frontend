"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ParallaxScrollProps {
  children: React.ReactNode;
  speed?: number; // 0.1 to 1, where 1 is fastest
  direction?: "up" | "down";
  className?: string;
}

export function ParallaxScroll({
  children,
  speed = 0.5,
  direction = "up",
  className,
}: ParallaxScrollProps) {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      
      if (scrollProgress >= 0 && scrollProgress <= 1) {
        const movement = scrollProgress * 100 * speed;
        setOffset(direction === "up" ? -movement : movement);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, direction]);

  return (
    <div ref={ref} className={cn("scroll-parallax", className)}>
      <div
        style={{
          transform: `translateY(${offset}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        {children}
      </div>
    </div>
  );
}
