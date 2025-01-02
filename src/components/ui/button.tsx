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
      // Default styles for each variant when tone is not specified
      {
        variant: "solid",
        className: "bg-primary text-primary-foreground hover:bg-primary/90", // primary is default for solid
      },
      {
        variant: "outline",
        className: "border-border text-text-primary hover:bg-muted shadow-sm", // secondary is default for outline
      },
      {
        variant: "ghost",
        className: "text-text-primary hover:bg-muted", // secondary is default for ghost
      },
      {
        variant: "link",
        className: "text-text-primary", // primary is default for link
      },

      // Solid variants with specific tones
      {
        variant: "solid",
        tone: "secondary",
        className:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90",
      },
      {
        variant: "solid",
        tone: "info",
        className: "bg-info text-info-foreground hover:bg-info/90",
      },
      {
        variant: "solid",
        tone: "success",
        className: "bg-success text-success-foreground hover:bg-success/90",
      },
      {
        variant: "solid",
        tone: "warning",
        className: "bg-warning text-warning-foreground hover:bg-warning/90",
      },
      {
        variant: "solid",
        tone: "error",
        className: "bg-error text-error-foreground hover:bg-error/90",
      },

      // Outline variants with specific tones
      {
        variant: "outline",
        tone: "primary",
        className: "border-primary text-primary hover:bg-primary/10",
      },
      {
        variant: "outline",
        tone: "info",
        className: "border-info text-info hover:bg-info/10",
      },
      {
        variant: "outline",
        tone: "success",
        className: "border-success text-success hover:bg-success/10",
      },
      {
        variant: "outline",
        tone: "warning",
        className: "border-warning text-warning hover:bg-warning/10",
      },
      {
        variant: "outline",
        tone: "error",
        className: "border-error text-error hover:bg-error/10",
      },

      // Ghost variants with specific tones
      {
        variant: "ghost",
        tone: "primary",
        className: "text-text-primary hover:bg-primary/10",
      },
      {
        variant: "ghost",
        tone: "info",
        className: "text-info hover:bg-info/10",
      },
      {
        variant: "ghost",
        tone: "success",
        className: "text-success hover:bg-success/10",
      },
      {
        variant: "ghost",
        tone: "warning",
        className: "text-warning hover:bg-warning/10",
      },
      {
        variant: "ghost",
        tone: "error",
        className: "text-error hover:bg-error/10",
      },
    ],
    defaultVariants: {
      variant: "solid",
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
