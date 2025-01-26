import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md text-sm font-medium transition-all outline-none focus-visible:ring-4 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
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
        solid: "",
        outline: "border bg-background",
        ghost: "",
        link: "underline-offset-4 hover:underline px-2",
      },
      size: {
        default: "h-8 px-3.5",
        sm: "h-7 rounded-md px-2.5 text-xs",
        lg: "h-9 rounded-lg px-5 text-base",
        icon: "h-8 w-8 rounded-sm",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        className: "bg-primary text-primary-foreground hover:bg-base-700 dark:hover:bg-base-300",
      },
      {
        variant: "outline",
        className: "border-border text-primary hover:bg-muted",
      },
      {
        variant: "ghost",
        className: "text-text-primary hover:bg-muted",
      },
      // Solid variants with specific tones
      {
        variant: "solid",
        tone: "secondary",
        className:
          "bg-muted text-text-primary hover:bg-accent",
      },
      {
        variant: "solid",
        tone: "info",
        className: "bg-info-600 text-white hover:bg-info-700 dark:hover:bg-info-500",
      },
      {
        variant: "solid",
        tone: "success",
        className: "bg-success-500 dark:bg-success-600 text-white hover:bg-success-600 dark:hover:bg-success-500",
      },
      {
        variant: "solid",
        tone: "warning",
        className: "bg-warning-500 text-white hover:bg-warning-600 dark:hover:bg-warning-400",
      },
      {
        variant: "solid",
        tone: "error",
        className: "bg-error-600 text-white hover:bg-error-700 dark:hover:bg-error-500",
      },

      // Outline variants with specific tones
      {
        variant: "outline",
        tone: "primary",
        className: "border-primary text-primary hover:bg-accent",
      },
      {
        variant: "outline",
        tone: "info",
        className: "border-info-500 text-info-600 dark:text-info-500 hover:bg-info-50 dark:hover:bg-info-950",
      },
      {
        variant: "outline",
        tone: "success",
        className: "border-success-500 text-success-600 dark:text-success-500 hover:bg-success-50 dark:hover:bg-success-950",
      },
      {
        variant: "outline",
        tone: "warning",
        className: "border-warning-500 text-warning-500 hover:bg-warning-50 dark:hover:bg-warning-950",
      },
      {
        variant: "outline",
        tone: "error",
        className: "border-error-500 text-error-600 dark:text-error-500 hover:bg-error-50 dark:hover:bg-error-950",
      },

      // Ghost variants with specific tones
      {
        variant: "ghost",
        tone: "primary",
        className: "text-text-primary hover:bg-accent",
      },
      {
        variant: "ghost",
        tone: "info",
        className: "text-info-600 dark:text-info-500 hover:bg-info-50 dark:hover:bg-info-950",
      },
      {
        variant: "ghost",
        tone: "success",
        className: "text-success-600 dark:text-success-500 hover:bg-success-50 dark:hover:bg-success-950",
      },
      {
        variant: "ghost",
        tone: "warning",
        className: "text-warning-500 hover:bg-warning-50 dark:hover:bg-warning-950",
      },
      {
        variant: "ghost",
        tone: "error",
        className: "text-error-600 dark:text-error-500 hover:bg-error-50 dark:hover:bg-error-950",
      },
    ],
    defaultVariants: {
      variant: "solid",
      tone: undefined,
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, tone, size, loading, ...props }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, tone, size, className }),
          loading && "pointer-events-none opacity-85"
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
