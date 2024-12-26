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
      "fixed inset-0 z-50 bg-black/60 data-[open]:animate-in data-[ending-style]:animate-out data-[ending-style]:fade-out-0 data-[open]:fade-in-0",
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
>(
  (
    { className, backdrop = false, align = "center", sideOffset = 4, ...props },
    ref
  ) => (
    <PreviewCardPrimitive.Portal>
      {backdrop && <PreviewCardBackdrop />}
      <PreviewCardPrimitive.Positioner
        ref={ref}
        className={cn("z-50", className)}
        align={align}
        sideOffset={sideOffset}
        {...props}
      />
    </PreviewCardPrimitive.Portal>
  )
);
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
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[open]:animate-in data-[ending-style]:animate-out data-[ending-style]:fade-out-0 data-[open]:fade-in-0 data-[ending-style]:zoom-out-95 data-[open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
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
