"use client";

import * as React from "react";
import { Progress as ProgressPrimitive } from "@base-ui-components/react/progress";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const progressVariants = cva(
  "block rounded-full transition-all duration-300 ease-in-out",
  {
    variants: {
      tone: {
        default: "bg-primary",
        success: "bg-success",
        info: "bg-info",
        warning: "bg-warning",
        error: "bg-error",
      },
    },
    defaultVariants: {
      tone: "default",
    },
  }
);

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    VariantProps<typeof progressVariants> {
  linear?: boolean;
}

const Progress = React.forwardRef<
  React.ComponentRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, tone, linear, value, ...props }, ref) => (
  <ProgressPrimitive.Root ref={ref} value={value} {...props}>
    <ProgressPrimitive.Track
      className={cn(
        "block h-1.5 w-48 overflow-hidden rounded-full bg-muted",
        className
      )}
    >
      <ProgressPrimitive.Indicator 
        className={cn(
          progressVariants({ tone }),
          linear && "duration-150 ease-linear"
        )} 
      />
    </ProgressPrimitive.Track>
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
