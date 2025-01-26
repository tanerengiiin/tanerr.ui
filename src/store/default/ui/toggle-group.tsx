"use client";
import * as React from "react";
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui-components/react/toggle-group";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const toggleGroupVariants = cva("group/toggle-group flex items-center justify-center gap-0.5", {
  variants: {
    variant: {
      default: "rounded-lg border p-0.5",
      ghost: "border-none",
    },
    tone: {
      default: "border-border",
      error: "border-error",
      success: "border-success",
      info: "border-info",
      warning: "border-warning",
    },
  },
  defaultVariants: {
    variant: "default",
    tone: "default",
  },
});

const ToggleGroup = React.forwardRef<
  React.ComponentRef<typeof ToggleGroupPrimitive>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive> &
    VariantProps<typeof toggleGroupVariants>
>(({ className, variant = "default", tone, ...props }, ref) => (
  <ToggleGroupPrimitive
    ref={ref}
    data-variant={variant}
    className={cn(toggleGroupVariants({ variant, tone, className }))}
    {...props}
  />
));
ToggleGroup.displayName = ToggleGroupPrimitive.displayName;

export { ToggleGroup, toggleGroupVariants };
