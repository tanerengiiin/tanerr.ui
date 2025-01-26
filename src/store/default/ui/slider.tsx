"use client";

import * as React from "react";
import { Slider as SliderPrimitive } from "@base-ui-components/react/slider";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const indicatorVariants = cva("rounded-l-full", {
  variants: {
    tone: {
      default: "bg-primary",
      success: "bg-success",
      info: "bg-info",
      warning: "bg-warning",
      error: "bg-error",
    },
  },
  defaultVariants: {
    tone: "default",
  },
});

const thumbVariants = cva(
  "cursor-pointer size-4 rounded-full outline-none bg-background ring-[1.5px] data-[dragging]:ring-[3px] transition-[width,height,box-shadow] duration-100",
  {
    variants: {
      tone: {
        default: "ring-primary",
        success: "ring-success",
        info: "ring-info",
        warning: "ring-warning",
        error: "ring-error",
      },
    },
    defaultVariants: {
      tone: "default",
    },
  }
);

export interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
    VariantProps<typeof indicatorVariants> {}

const Slider = React.forwardRef<
  React.ComponentRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, tone , ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className="data-[disabled]:opacity-50"
    {...props}
  >
    <SliderPrimitive.Control
      className={cn("flex w-56 items-center py-3", className)}
    >
      <SliderPrimitive.Track className="h-1.5 w-full rounded-full bg-muted">
        <SliderPrimitive.Indicator className={indicatorVariants({ tone })} />
        <SliderPrimitive.Thumb className={thumbVariants({ tone })} />
      </SliderPrimitive.Track>
    </SliderPrimitive.Control>
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
