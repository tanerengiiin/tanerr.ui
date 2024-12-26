"use client";

import * as React from "react";
import { Slider as SliderPrimitive } from "@base-ui-components/react/slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ComponentRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root ref={ref} {...props}>
    <SliderPrimitive.Control
      className={cn("flex w-56 items-center py-3", className)}
    >
      <SliderPrimitive.Track className="h-1.5 w-full rounded-full bg-muted">
        <SliderPrimitive.Indicator className="rounded-l-full bg-primary" />
        <SliderPrimitive.Thumb className="cursor-pointer size-4 rounded-full bg-background outline outline-1 outline-border data-[dragging]:size-3.5 data-[dragging]:outline-2 data-[dragging]:outline-primary transition-[outline,width,height] duration-100" />
      </SliderPrimitive.Track>
    </SliderPrimitive.Control>
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
