import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium transition-colors [&>svg]:size-3",
  {
    variants: {
      tone: {
        primary: "",
        secondary: "",
        info: "focus-visible:ring-info/20",
        success: "focus-visible:ring-success/20",
        warning: "focus-visible:ring-warning/20",
        error: "focus-visible:ring-error/20",
      },
      variant: {
        solid: "bg-primary text-text-primary",
        outline: "border bg-background",
      },
    },
    compoundVariants: [
      // Default styles for each variant when tone is not specified
      {
        variant: "solid",
        className: "bg-primary text-primary-foreground", // primary is default for solid
      },
      {
        variant: "outline",
        className: "border-border text-text-primary", // secondary is default for outline
      },

      // Solid variants with specific tones
      {
        variant: "solid",
        tone: "secondary",
        className:
          "bg-muted text-text-primary",
      },
      {
        variant: "solid",
        tone: "info",
        className: "bg-info-50 dark:bg-info-950 text-info-600 dark:text-info-400",
      },
      {
        variant: "solid",
        tone: "success",
        className: "bg-success-50 dark:bg-success-950 text-success-600 dark:text-success-400",
      },
      {
        variant: "solid",
        tone: "warning",
        className: "bg-warning-50 dark:bg-warning-950 text-warning-600 dark:text-warning-400",
      },
      {
        variant: "solid",
        tone: "error",
        className: "bg-error-50 dark:bg-error-950 text-error-600 dark:text-error-400",
      },

      // Outline variants with specific tones
      {
        variant: "outline",
        tone: "primary",
        className: "border-primary text-text-primary",
      },
      {
        variant: "outline",
        tone: "info",
        className: "border-info text-info-600 dark:text-info-500",
      },
      {
        variant: "outline",
        tone: "success",
        className: "border-success text-success-600 dark:text-success-500   ",
      },
      {
        variant: "outline",
        tone: "warning",
        className: "border-warning text-warning-600 dark:text-warning-500",
      },
      {
        variant: "outline",
        tone: "error",
        className: "border-error text-error-600 dark:text-error-500",
      },
    ],
    defaultVariants: {
      tone: undefined,
      variant: "solid",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  rounded?: boolean;
}

function Badge({ className, variant, tone, rounded, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        badgeVariants({ variant, tone }),
        rounded && "rounded-full",
        className
      )}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
