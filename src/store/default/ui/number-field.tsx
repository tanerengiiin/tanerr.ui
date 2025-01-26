"use client";
import * as React from "react";
import { NumberField as NumberFieldPrimitive } from "@base-ui-components/react/number-field";
import { cn } from "@/lib/utils";
import { Minus,  Plus } from "lucide-react";

const NumberField = React.forwardRef<
  React.ComponentRef<typeof NumberFieldPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NumberFieldPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <NumberFieldPrimitive.Root
      ref={ref}
      className={cn("flex flex-col gap-1", className)}
      {...props}
    />
  );
});

NumberField.displayName = NumberFieldPrimitive.Root.displayName;

const NumberFieldScrubArea = React.forwardRef<
  React.ComponentRef<typeof NumberFieldPrimitive.ScrubArea>,
  React.ComponentPropsWithoutRef<typeof NumberFieldPrimitive.ScrubArea>
>(({ className,children, ...props }, ref) => (
  <NumberFieldPrimitive.ScrubArea
    ref={ref}
    className={cn("cursor-ew-resize [&_label]:cursor-ew-resize", className)}
    {...props}
  >
    {children}
    <NumberFieldPrimitive.ScrubAreaCursor className="z-50 drop-shadow-[0_1px_1px_#0008] filter">
      <CursorGrowIcon />
    </NumberFieldPrimitive.ScrubAreaCursor>
  </NumberFieldPrimitive.ScrubArea>
));
NumberFieldScrubArea.displayName = NumberFieldPrimitive.ScrubArea.displayName;

function CursorGrowIcon(props: React.ComponentProps<'svg'>) {
    return (
      <svg
        width="26"
        height="14"
        viewBox="0 0 24 14"
        fill="black"
        stroke="white"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M19.5 5.5L6.49737 5.51844V2L1 6.9999L6.5 12L6.49737 8.5L19.5 8.5V12L25 6.9999L19.5 2V5.5Z" />
      </svg>
    );
  }

const NumberFieldInput = React.forwardRef<
  React.ComponentRef<typeof NumberFieldPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof NumberFieldPrimitive.Input>
>(({ className, children, ...props }, ref) => (
  <NumberFieldPrimitive.Group className={cn("relative", className)}>
    <NumberFieldPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-background pl-2.5 pr-20 py-1.5 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-4 transition-[box-shadow,_border] focus-visible:ring-ring focus-visible:border-base-300 dark:focus-visible:border-base-600 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    >
      {children}
    </NumberFieldPrimitive.Input>
    <div className="flex absolute w-[4.5rem] right-px inset-y-px rounded-r-[calc(var(--radius))] overflow-hidden divide-x divide-border border-l">
      <NumberFieldPrimitive.Decrement className="h-full flex-1 flex items-center justify-center [&_svg]:size-4 text-text-muted hover:text-text-primary hover:bg-muted transition-colors">
        <Minus />
      </NumberFieldPrimitive.Decrement>
      <NumberFieldPrimitive.Increment className="h-full flex-1 flex items-center justify-center [&_svg]:size-4 text-text-muted hover:text-text-primary hover:bg-muted transition-colors">
        <Plus />
      </NumberFieldPrimitive.Increment>
    </div>
  </NumberFieldPrimitive.Group>
));
NumberFieldInput.displayName = NumberFieldPrimitive.Input.displayName;

export { NumberField, NumberFieldScrubArea, NumberFieldInput };
