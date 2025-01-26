"use client";

import * as React from "react";
import { Checkbox as CheckboxPrimitive } from "@base-ui-components/react/checkbox";
import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const checkboxVariants = cva(
  "group h-5 w-5 shrink-0 rounded-sm border shadow-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:border-primary/25 dark:focus-visible:border-primary/40 disabled:cursor-not-allowed disabled:opacity-50 transition-[box-shadow,_border,_background]",
  {
    variants: {
      tone: {
        default:
          "data-[checked]:border-primary data-[checked]:bg-primary data-[checked]:text-primary-foreground hover:border-primary/30",
        success:
          "border-success/75 shadow-none data-[checked]:border-success data-[checked]:bg-success data-[checked]:text-success-foreground focus-visible:ring-success/15 dark:focus-visible:ring-success/30 focus-visible:border-success dark:focus-visible:border-success hover:border-success",
        info: "border-info/75 shadow-none data-[checked]:border-info data-[checked]:bg-info data-[checked]:text-info-foreground focus-visible:ring-info/15 dark:focus-visible:ring-info/30 focus-visible:border-info dark:focus-visible:border-info hover:border-info",
        warning:
          "border-warning/75 shadow-none data-[checked]:border-warning data-[checked]:bg-warning data-[checked]:text-warning-foreground focus-visible:ring-warning/15 dark:focus-visible:ring-warning/30 focus-visible:border-warning dark:focus-visible:border-warning hover:border-warning",
        error:
          "border-error/75 shadow-none data-[checked]:border-error data-[checked]:bg-error data-[checked]:text-error-foreground focus-visible:ring-error/15 dark:focus-visible:ring-error/30 focus-visible:border-error dark:focus-visible:border-error hover:border-error",
      },
    },
    defaultVariants: {
      tone: "default",
    },
  }
);

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {}

const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, tone, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(checkboxVariants({ tone, className}) )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn(
        "flex items-center justify-center text-current data-[starting-style]:opacity-0 data-[starting-style]:scale-0 data-[ending-style]:opacity-0 data-[ending-style]:scale-0 transition-[opacity,transform] data-[starting-style]:duration-200 data-[ending-style]:duration-150 ease-in-out"
      )}
    >
      <Check className="h-4 w-4 group-data-[indeterminate]:hidden" />
      <Minus className="h-4 w-4 group-data-[indeterminate]:block hidden" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox, checkboxVariants };
