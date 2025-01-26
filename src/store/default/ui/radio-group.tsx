"use client";

import * as React from "react";
import { Radio as RadioPrimitive } from "@base-ui-components/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui-components/react/radio-group";

import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive>
>(({ className, defaultValue, ...props }, ref) => {
  return (
    <RadioGroupPrimitive
      className={cn("flex flex-col items-start gap-2 text-primary", className)}
      defaultValue={defaultValue}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.displayName;

const Radio = React.forwardRef<
  React.ComponentRef<typeof RadioPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioPrimitive.Root>
>(({ className, value, ...props }, ref) => {
  return (
    <RadioPrimitive.Root
      ref={ref}
      value={value}
      className={cn(
        "flex size-4 border items-center justify-center rounded-full outline-none focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:border-base-300 dark:focus-visible:border-base-600 hover:border-base-300 dark:hover:border-base-600 data-[checked]:bg-primary data-[checked]:border-primary transition-shadow",
        className
      )}
      {...props}
    >
      <RadioPrimitive.Indicator className="size-2 rounded-full bg-primary-foreground" />
    </RadioPrimitive.Root>
  );
});
Radio.displayName = RadioPrimitive.Root.displayName;

export { RadioGroup, Radio };
