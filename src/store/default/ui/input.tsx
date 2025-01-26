"use client";
import * as React from "react";
import { Input as InputPrimitive } from "@base-ui-components/react/input";
import { cn } from "@/lib/utils";

const inputStyles = `
  flex h-9 w-full text-primary rounded-md border border-input bg-background px-3 py-1.5 text-base
  file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground
  placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-4
  transition-[box-shadow,_border] focus-visible:ring-ring focus-visible:border-base-300
  dark:focus-visible:border-base-600 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm
`;

const Input = React.forwardRef<
  React.ComponentRef<typeof InputPrimitive>,
  React.ComponentPropsWithoutRef<typeof InputPrimitive> & {
    icon?: React.ReactNode;
  }
>(({ className, icon, ...props }, ref) => {
  if (icon) {
    return (
      <div className="relative">
        <span className="absolute left-2.5 top-1/2 -translate-y-1/2 [&>svg]:text-text-muted [&>svg]:size-4">
          {icon}
        </span>
        <InputPrimitive
          className={cn(inputStyles, "pl-8", className)}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
  return (
    <InputPrimitive
      className={cn(inputStyles, className)}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = InputPrimitive.displayName;

export { Input };
