import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("font-semibold tracking-tight", {
  variants: {
    level: {
      h1: "text-4xl lg:text-5xl xl:text-6xl",
      h2: "text-3xl lg:text-4xl xl:text-5xl",
      h3: "text-2xl lg:text-3xl xl:text-4xl",
      h4: "text-xl lg:text-2xl xl:text-3xl",
      h5: "text-lg lg:text-xl xl:text-2xl",
      h6: "text-base lg:text-lg xl:text-xl",
    },
    variant: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      primary: "text-primary",
      gradient: "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",
    },
  },
  defaultVariants: {
    level: "h2",
    variant: "default",
  },
});

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

/**
 * Responsive heading component with consistent styling
 */
function Heading({ as, level, variant, className, children, ...props }: HeadingProps) {
  const Component = as || level || "h2";

  return (
    <Component
      className={cn(headingVariants({ level: level || as, variant }), className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export { Heading, headingVariants };
export type { HeadingProps };
