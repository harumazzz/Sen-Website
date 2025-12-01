import * as React from "react";
import { ExternalLink as ExternalLinkIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExternalLinkProps extends React.ComponentProps<"a"> {
  showIcon?: boolean;
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

function ExternalLink({
  className,
  children,
  showIcon = true,
  variant = "default",
  ...props
}: ExternalLinkProps) {
  return (
    <a
      className={cn("inline-flex items-center gap-1", linkVariants[variant], className)}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
      {showIcon && <ExternalLinkIcon className="size-4" />}
    </a>
  );
}

export { ExternalLink };
export type { ExternalLinkProps };
