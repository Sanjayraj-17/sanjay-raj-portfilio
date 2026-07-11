"use client";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  showRadialGradient?: boolean;
}

export default function AuroraBackground({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-background text-foreground transition-colors duration-300 ${className || ""}`}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute -inset-[10px] opacity-40 blur-[80px] filter mix-blend-screen animate-aurora-bg"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 50% 20%, rgba(0, 240, 255, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 10% 40%, rgba(139, 92, 246, 0.25) 0%, transparent 50%),
              radial-gradient(ellipse at 90% 60%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
              radial-gradient(ellipse at 30% 80%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)
            `,
            backgroundSize: "200% 200%",
          }}
        />
        {showRadialGradient && (
          <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_30%,#030303_100%)]" />
        )}
      </div>
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
