import * as React from "react";
import { type LucideIcon, type LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconProps extends Omit<LucideProps, "ref"> {
  icon: LucideIcon;
}

function Icon({ icon: IconComponent, className, size = 20, ...props }: IconProps) {
  return <IconComponent className={cn("shrink-0", className)} size={size} {...props} />;
}

export { Icon };
export type { IconProps };
