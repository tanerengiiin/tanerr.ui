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
        "flex size-4 items-center justify-center rounded-full outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/5 focus-visible:border-primary/25 dark:focus-visible:border-primary/40 data-[checked]:bg-primary border data-[checked]:border-primary transition-all",
        className
      )}
      {...props}
    >
      <RadioPrimitive.Indicator className="flex before:size-2 before:rounded-full before:bg-primary-foreground data-[unchecked]:hidden transition-all before:transition-all" />
    </RadioPrimitive.Root>
  );
});
Radio.displayName = RadioPrimitive.Root.displayName;

export { RadioGroup, Radio };
