"use client";
import * as React from "react";
import { Tooltip as TooltipPrimitive } from "@base-ui-components/react/tooltip";
import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const TooltipTrigger = TooltipPrimitive.Trigger;

const Tooltip = TooltipPrimitive.Root;

const TooltipPositioner = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Positioner>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Positioner>
>(({ className, sideOffset = 8, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Positioner
      ref={ref}
      className={cn("z-50", className)}
      sideOffset={sideOffset}
      {...props}
    />
  </TooltipPrimitive.Portal>
));
TooltipPositioner.displayName = TooltipPrimitive.Positioner.displayName;

const TooltipPopup = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Popup>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Popup> & {
    arrow?: boolean;
  }
>(({ className, children, arrow = false,  ...props }, ref) => (
  <TooltipPrimitive.Popup
    ref={ref}
    className={cn(
      "flex origin-[var(--transform-origin)] flex-col rounded-md bg-foreground px-2.5 py-1 text-sm text-background shadow-md outline-none transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 data-[instant]:duration-0 ",
      className
    )}
    {...props}
  >
    {arrow && (
      <TooltipPrimitive.Arrow className="data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180">
        <ArrowSvg />
      </TooltipPrimitive.Arrow>
    )}
    {children}
  </TooltipPrimitive.Popup>
));
TooltipPopup.displayName = TooltipPrimitive.Popup.displayName;

function ArrowSvg(props: React.ComponentProps<"svg">) {
  return (
    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" {...props}>
      <path
        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
        className="fill-popover"
      />
      <path
        d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
        className="fill-border"
      />
    </svg>
  );
}

export {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipPositioner,
  TooltipPopup,
};
