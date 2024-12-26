"use client";
import * as React from "react";
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui-components/react/toggle-group";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const toggleGroupVariants = cva("flex items-center justify-center gap-1", {
  variants: {
    variant: {
      default: "",
      outline: "rounded-lg border p-0.5",
    },
    color: {
      default: "border-border",
      destructive: "border-destructive",
      success: "border-success",
      info: "border-info",
      warning: "border-warning",
    },
  },
  defaultVariants: {
    variant: "default",
    color: "default",
  },
});

const ToggleGroup = React.forwardRef<
  React.ComponentRef<typeof ToggleGroupPrimitive>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive> &
    VariantProps<typeof toggleGroupVariants>
>(({ className, variant, color, ...props }, ref) => (
  <ToggleGroupPrimitive
    ref={ref}
    className={cn(toggleGroupVariants({ variant, color, className }))}
    {...props}
  />
));
ToggleGroup.displayName = ToggleGroupPrimitive.displayName;

export { ToggleGroup, toggleGroupVariants };
