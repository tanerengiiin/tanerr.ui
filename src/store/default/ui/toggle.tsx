"use client";

import * as React from "react";
import { Toggle as TogglePrimitive } from "@base-ui-components/react/toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex gap-1.5 items-center justify-center rounded-md text-sm font-normal outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:border-accent transition-[box-shadow,_border,_background,_color] duration-100 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "border group-data-[variant=default]/toggle-group:!border-none",
        ghost: "border-none",
      },
      tone: {
        default:
          "hover:bg-secondary hover:text-text-accent/90 data-[pressed]:border-base-300 dark:data-[pressed]:border-base-700 data-[pressed]:bg-muted data-[pressed]:text-text-primary",
        error:
          "text-error hover:text-error/75 hover:bg-error/5 border-error/50 data-[pressed]:border-error data-[pressed]:bg-error data-[pressed]:text-error-foreground",
        success:
          "text-success hover:text-success/75 hover:bg-success/5 border-success/50 data-[pressed]:border-success data-[pressed]:bg-success data-[pressed]:text-success-foreground",
        info: "text-info hover:text-info/75 hover:bg-info/5 border-info/50 data-[pressed]:border-info data-[pressed]:bg-info data-[pressed]:text-info-foreground",
        warning:
          "text-warning hover:text-warning/75 hover:bg-warning/5 border-warning/50 data-[pressed]:border-warning data-[pressed]:bg-warning data-[pressed]:text-warning-foreground",
      },
      size: {
        default: "h-9 px-2.5 min-w-9",
        sm: "h-8 px-2 min-w-8 gap-1 [&_svg]:size-3.5",
        lg: "h-10 px-3.5 min-w-10 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      tone: "default",
    },
  }
);

const Toggle = React.forwardRef<
  React.ComponentRef<typeof TogglePrimitive>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, tone, ...props }, ref) => (
  <TogglePrimitive
    ref={ref}
    className={cn(toggleVariants({ variant, size, tone, className }))}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.displayName;

export { Toggle, toggleVariants };
