"use client";

import * as React from "react";
import { Progress as ProgressPrimitive } from "@base-ui-components/react/progress";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

export const progressVariants = cva(
  "block rounded-full transition-all duration-500",
  {
    variants: {
      variant: {
        default: "bg-primary",
        destructive: "bg-destructive",
        red: "bg-red-500",
        orange: "bg-orange-500",
        green: "bg-green-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Progress = React.forwardRef<
  React.ComponentRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> &
    VariantProps<typeof progressVariants>
>(({ className, variant, value, ...props }, ref) => (
  <ProgressPrimitive.Root ref={ref} value={value} {...props}>
    <ProgressPrimitive.Track
      className={cn(
        "block h-1.5 w-48 overflow-hidden rounded-full bg-muted",
        className
      )}
    >
      <ProgressPrimitive.Indicator
        className={cn(progressVariants({ variant }))}
      />
    </ProgressPrimitive.Track>
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
