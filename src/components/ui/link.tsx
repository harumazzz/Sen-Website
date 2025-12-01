import * as React from "react";
import NextLink from "next/link";
import { cn } from "@/lib/utils";

interface LinkProps extends React.ComponentProps<typeof NextLink> {
  variant?: "default" | "muted" | "primary";
}

const linkVariants = {
  default:
    "text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline",
  muted:
    "text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline",
  primary:
    "text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline",
};

function Link({ className, variant = "default", children, ...props }: LinkProps) {
  return (
    <NextLink className={cn(linkVariants[variant], className)} {...props}>
      {children}
    </NextLink>
  );
}

export { Link };
export type { LinkProps };
