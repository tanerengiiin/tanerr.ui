"use client";
import * as React from "react";
import { Switch as SwitchPrimitive } from "@base-ui-components/react/switch";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const switchVariants = cva(
  "group inline-flex shrink-0 cursor-pointer items-center rounded-full p-px data-[unchecked]:bg-accent data-[unchecked]:hover:bg-muted shadow-[inset_0px_0px_2px_2px_rgba(0,0,0,0.05)] transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring transition-[box-shadow,background] disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-5 w-8",
        md: "h-6 w-10",
        lg: "h-7 w-12",
      },
      tone: {
        default: "data-[checked]:bg-foreground  data-[checked]:hover:bg-foreground/90",
        success: "data-[checked]:bg-success-500 data-[checked]:hover:bg-success-600 focus-visible:ring-success/20",
        info: "data-[checked]:bg-info-500 data-[checked]:hover:bg-info-600 focus-visible:ring-info/20",
        warning: "data-[checked]:bg-warning-500 data-[checked]:hover:bg-warning-600 focus-visible:ring-warning/20",
        error: "data-[checked]:bg-error-500 data-[checked]:hover:bg-error-600 focus-visible:ring-error/20",
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
        "flex items-center justify-center pointer-events-none h-full aspect-square rounded-full bg-background shadow-md ring-0 transition-transform duration-200 group-active:scale-[0.8]",
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
