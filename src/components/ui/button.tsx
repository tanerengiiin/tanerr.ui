import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/10 dark:focus-visible:ring-primary/15 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 focus-visible:ring-destructive/25 dark:focus-visible:ring-destructive/30",
        success:
          "bg-success text-success-foreground shadow-sm hover:bg-success/90 focus-visible:ring-success/25 dark:focus-visible:ring-success/30",
        info: "bg-info text-info-foreground shadow-sm hover:bg-info/90 focus-visible:ring-info/25 dark:focus-visible:ring-info/30",
        warning:
          "bg-warning text-warning-foreground shadow-sm hover:bg-warning/90 focus-visible:ring-warning/25 dark:focus-visible:ring-warning/30",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline px-2",
      },
      size: {
        default: "h-8 px-3.5",
        sm: "h-7 rounded-sm px-2.5 text-xs",
        lg: "h-9 rounded-lg px-5",
        icon: "h-8 w-8 rounded-sm",
      },
    },
    defaultVariants: {
      variant: "success",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
