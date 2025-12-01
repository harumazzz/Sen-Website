import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps extends Omit<React.ComponentProps<typeof Image>, "src" | "alt"> {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg" | "xl";
}

const logoSizes = {
  sm: { width: 40, height: 40 },
  md: { width: 60, height: 60 },
  lg: { width: 80, height: 80 },
  xl: { width: 120, height: 120 },
};

function Logo({ variant = "dark", size = "md", className, ...props }: LogoProps) {
  const dimensions = logoSizes[size];

  return (
    <Image
      src={`/assets/logo.webp`}
      alt="Sen Logo"
      width={dimensions.width}
      height={dimensions.height}
      className={cn("object-contain", className)}
      priority
      {...props}
    />
  );
}

export { Logo };
export type { LogoProps };
