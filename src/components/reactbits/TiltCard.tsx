"use client";
import React, { useRef, useState } from "react";

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxRotation?: number;
}

export default function TiltCard({
  children,
  maxRotation = 10,
  className = "",
  ...props
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    
    // Scale between -maxRotation and maxRotation
    const rX = ((y - midY) / midY) * -maxRotation;
    const rY = ((x - midX) / midX) * maxRotation;
    
    setRotation({ x: rX, y: rY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-300 ease-out select-none ${className}`}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1.02)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        transformStyle: "preserve-3d"
      }}
      {...props}
    >
      <div style={{ transform: "translateZ(30px)" }} className="h-full w-full">
        {children}
      </div>
    </div>
  );
}
