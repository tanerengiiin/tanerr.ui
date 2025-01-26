"use client";

import * as React from "react";
import { Checkbox as CheckboxPrimitive } from "@base-ui-components/react/checkbox";
import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const checkboxVariants = cva(
  "group h-5 w-5 shrink-0 rounded-sm border shadow-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:border-base-400 disabled:cursor-not-allowed disabled:opacity-50 transition-[box-shadow,_border,_background]",
  {
    variants: {
      tone: {
        default:
          "data-[checked]:border-primary data-[checked]:bg-primary data-[checked]:text-primary-foreground hover:border-base-400",
        success:
          "border-success-400 hover:bg-success-50 hover:border-success-600 shadow-none data-[checked]:border-success data-[checked]:bg-success data-[checked]:text-success-50 focus-visible:ring-success/15 dark:focus-visible:ring-success/30 focus-visible:border-success-600 dark:focus-visible:border-success-500",
        info: "border-info-400 hover:border-info-600 shadow-none data-[checked]:border-info data-[checked]:bg-info data-[checked]:text-info-50 focus-visible:ring-info/15 dark:focus-visible:ring-info/30 focus-visible:border-info-600 dark:focus-visible:border-info-500",
        warning:
          "border-warning-400 hover:border-warning-600 shadow-none data-[checked]:border-warning data-[checked]:bg-warning data-[checked]:text-warning-50 focus-visible:ring-warning/15 dark:focus-visible:ring-warning/30 focus-visible:border-warning-600 dark:focus-visible:border-warning-500",
        error:
          "border-error-400 hover:border-error-600 shadow-none data-[checked]:border-error data-[checked]:bg-error data-[checked]:text-error-50 focus-visible:ring-error/15 dark:focus-visible:ring-error/30 focus-visible:border-error-600 dark:focus-visible:border-error-500",
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
