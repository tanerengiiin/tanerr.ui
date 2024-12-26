"use client";

import * as React from "react";
import { Toggle as TogglePrimitive } from "@base-ui-components/react/toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-normal focus-visible:outline-none focus-visible:ring-4 transition-[box-shadow,_border,_background,_color]  disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gap-1.5 focus-visible:ring-primary/5 focus-visible:border-primary/25 dark:focus-visible:border-primary/40",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      color: {
        default:
          "data-[pressed]:border-primary/20 hover:bg-secondary hover:text-muted-foreground data-[pressed]:bg-accent data-[pressed]:text-accent-foreground ",
        destructive:
          "text-destructive border-destructive data-[pressed]:border-destructive hover:bg-destructive hover:text-destructive-foreground data-[pressed]:bg-destructive data-[pressed]:text-destructive-foreground ",
        success:
          "text-success border-success data-[pressed]:border-success hover:bg-success hover:text-success-foreground data-[pressed]:bg-success data-[pressed]:text-success-foreground ",
        info: "text-info border-info data-[pressed]:border-info hover:bg-info hover:text-info-foreground data-[pressed]:bg-info data-[pressed]:text-info-foreground ",
        warning:
          "text-warning border-warning data-[pressed]:border-warning hover:bg-warning hover:text-warning-foreground data-[pressed]:bg-warning data-[pressed]:text-warning-foreground ",
      },
      size: {
        default: "h-9 px-2.5 min-w-9",
        sm: "h-8 px-2 min-w-8",
        lg: "h-10 px-3.5 min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      color: "default",
    },
  }
);

const Toggle = React.forwardRef<
  React.ComponentRef<typeof TogglePrimitive>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, color, ...props }, ref) => (
  <TogglePrimitive
    ref={ref}
    className={cn(toggleVariants({ variant, size, color, className }))}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.displayName;

export { Toggle, toggleVariants };
