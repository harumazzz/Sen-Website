import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    variant: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      primary: "text-primary",
      secondary: "text-secondary",
      destructive: "text-destructive",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    size: "base",
    variant: "default",
    weight: "normal",
  },
});

type ElementType = "p" | "span" | "div" | "label";

type TextProps<T extends ElementType = "p"> = VariantProps<typeof textVariants> & {
  as?: T;
  children?: React.ReactNode;
  className?: string;
} & (T extends "p"
    ? React.HTMLAttributes<HTMLParagraphElement>
    : T extends "span"
      ? React.HTMLAttributes<HTMLSpanElement>
      : T extends "div"
        ? React.HTMLAttributes<HTMLDivElement>
        : T extends "label"
          ? React.LabelHTMLAttributes<HTMLLabelElement>
          : never);

function Text<T extends ElementType = "p">({
  as,
  size,
  variant,
  weight,
  className,
  children,
  ...props
}: TextProps<T>) {
  const Component = (as || "p") as any;
  return (
    <Component className={cn(textVariants({ size, variant, weight }), className)} {...props}>
      {children}
    </Component>
  );
}

export { Text, textVariants };
export type { TextProps };
