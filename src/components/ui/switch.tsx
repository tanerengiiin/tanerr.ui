"use client";
import * as React from "react";
import { Switch as SwitchPrimitive } from "@base-ui-components/react/switch";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const switchVariants = cva(
  "group inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring transition-[box-shadow,background] disabled:cursor-not-allowed disabled:opacity-50 data-[unchecked]:bg-accent data-[unchecked]:hover:bg-base-300 dark:data-[unchecked]:hover:bg-base-600",
  {
    variants: {
      size: {
        sm: "h-4 w-7",
        md: "h-5 w-9",
        lg: "h-6 w-11",
      },
      tone: {
        default: "data-[checked]:bg-foreground",
        success: "data-[checked]:bg-success focus-visible:ring-success/20",
        info: "data-[checked]:bg-info focus-visible:ring-info/20",
        warning: "data-[checked]:bg-warning focus-visible:ring-warning/20",
        error: "data-[checked]:bg-error focus-visible:ring-error/20",
      },
    },
    defaultVariants: {
      size: "md",
      tone: "default",
    },
  }
);

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
    VariantProps<typeof switchVariants> {}

const Switch = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, size = "md", tone, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    className={cn(switchVariants({ size, tone }), className)}
    {...props}
  >
    <SwitchPrimitive.Thumb
      className={cn(
        "flex items-center justify-center pointer-events-none h-full aspect-square rounded-full bg-background shadow-lg ring-0 transition-transform duration-200 group-active:scale-[0.8]",
        size === "sm" && "data-[checked]:translate-x-3",
        size === "md" && "data-[checked]:translate-x-4",
        size === "lg" && "data-[checked]:translate-x-5",
        "data-[unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitive.Root>
));

Switch.displayName = SwitchPrimitive.Root.displayName;

export { Switch };
