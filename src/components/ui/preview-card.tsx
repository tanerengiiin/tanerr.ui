"use client";

import * as React from "react";
import { PreviewCard as PreviewCardPrimitive } from "@base-ui-components/react/preview-card";

import { cn } from "@/lib/utils";

const PreviewCard = PreviewCardPrimitive.Root;

const PreviewCardTrigger = PreviewCardPrimitive.Trigger;

const PreviewCardBackdrop = React.forwardRef<
  React.ComponentRef<typeof PreviewCardPrimitive.Backdrop>,
  React.ComponentPropsWithoutRef<typeof PreviewCardPrimitive.Backdrop>
>(({ className, ...props }, ref) => (
  <PreviewCardPrimitive.Backdrop
    ref={ref}
    className={cn(
      "pointer-events-none fixed inset-0 z-50 bg-black/30 dark:bg-black/60 transition-all duration-200 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0",
      className
    )}
    {...props}
  />
));
PreviewCardBackdrop.displayName = PreviewCardPrimitive.Backdrop.displayName;

const PreviewCardPositioner = React.forwardRef<
  React.ComponentRef<typeof PreviewCardPrimitive.Positioner>,
  React.ComponentPropsWithoutRef<typeof PreviewCardPrimitive.Positioner> & {
    backdrop?: boolean;
  }
>(({ className, backdrop = false, sideOffset = 8, ...props }, ref) => (
  <PreviewCardPrimitive.Portal keepMounted>
    {backdrop && <PreviewCardBackdrop />}
    <PreviewCardPrimitive.Positioner
      ref={ref}
      className={cn("outline-none z-50", className)}
      sideOffset={sideOffset}
      {...props}
    />
  </PreviewCardPrimitive.Portal>
));
PreviewCardPositioner.displayName = PreviewCardPrimitive.Positioner.displayName;

const PreviewCardPopup = React.forwardRef<
  React.ComponentRef<typeof PreviewCardPrimitive.Popup>,
  React.ComponentPropsWithoutRef<typeof PreviewCardPrimitive.Popup> & {
    arrow?: boolean;
  }
>(({ className, children, arrow = false, ...props }, ref) => (
  <PreviewCardPrimitive.Popup
    ref={ref}
    className={cn(
      "origin-[var(--transform-origin)] w-64 rounded-md bg-popover p-4 text-text-accent shadow-md outline outline-1 outline-border transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0",
      className
    )}
    {...props}
  >
    {arrow && (
      <PreviewCardPrimitive.Arrow className="data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180">
        <ArrowSvg />
      </PreviewCardPrimitive.Arrow>
    )}
    {children}
  </PreviewCardPrimitive.Popup>
));
PreviewCardPopup.displayName = PreviewCardPrimitive.Popup.displayName;

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
  PreviewCard,
  PreviewCardPositioner,
  PreviewCardTrigger,
  PreviewCardBackdrop,
  PreviewCardPopup,
};
