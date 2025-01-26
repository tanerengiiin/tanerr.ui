"use client";

import * as React from "react";
import { Dialog as DrawerPrimitive } from "@base-ui-components/react/dialog";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

const Drawer = DrawerPrimitive.Root;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerClose = DrawerPrimitive.Close;

const DrawerBackdrop = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitive.Backdrop>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Backdrop>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Backdrop
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-white/80 dark:bg-black/70 transition-all duration-200 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0",
      className
    )}
    {...props}
  />
));

DrawerBackdrop.displayName = DrawerPrimitive.Backdrop.displayName;
//max-w-[calc(100vw-3rem)] scale-[calc(1-0.1*var(--nested-dialogs))]
const drawerVariants = cva(
  "z-50 fixed rounded-lg bg-background p-6 outline outline-1 outline-border transition-all duration-300 data-[has-nested-dialogs]:after:absolute data-[has-nested-dialogs]:after:inset-0 data-[has-nested-dialogs]:after:rounded-[inherit] data-[has-nested-dialogs]:after:bg-black/10 dark:data-[has-nested-dialogs]:after:bg-black/30 data-[starting-style]:scale-95 data-[starting-style]:opacity-50 data-[ending-style]:scale-95 data-[ending-style]:opacity-50",
  {
    variants: {
      side: {
        top: "inset-x-[calc(0.5rem+0.75rem*var(--nested-dialogs))] top-[calc(0.5rem+0.75rem*var(--nested-dialogs))] data-[starting-style]:-translate-y-full data-[ending-style]:-translate-y-full",
        bottom:
          "inset-x-[calc(0.5rem+0.75rem*var(--nested-dialogs))] bottom-[calc(0.5rem+0.75rem*var(--nested-dialogs))] data-[starting-style]:translate-y-full data-[ending-style]:translate-y-full",
        left: "inset-y-[calc(0.5rem+0.75rem*var(--nested-dialogs))] left-[calc(0.5rem+0.75rem*var(--nested-dialogs))] w-3/4 sm:max-w-sm data-[starting-style]:-translate-x-full data-[ending-style]:-translate-x-full",
        right:
          "inset-y-[calc(0.5rem+0.75rem*var(--nested-dialogs))] right-[calc(0.5rem+0.75rem*var(--nested-dialogs))] w-3/4 sm:max-w-sm data-[starting-style]:translate-x-full data-[ending-style]:translate-x-full ",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Popup>,
    VariantProps<typeof drawerVariants> {}

const DrawerPopup = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitive.Popup>,
  SheetContentProps
>(({ className, children,side, ...props }, ref) => (
  <DrawerPortal>
    <DrawerBackdrop />
    <DrawerPrimitive.Popup
      ref={ref}
      className={cn(
        drawerVariants({ side }),
        className
      )}
      {...props}
    >
      {children}
      <DrawerPrimitive.Close className="absolute right-2 top-2 p-1 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none hover:bg-primary/10 disabled:pointer-events-none data-[starting-style]:bg-accent data-[starting-style]:text-muted-foreground">
        <>
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </>
      </DrawerPrimitive.Close>
    </DrawerPrimitive.Popup>
  </DrawerPortal>
));

DrawerPopup.displayName = DrawerPrimitive.Popup.displayName;

const DrawerTitle = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-text-muted", className)}
    {...props}
  />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerPortal,
  DrawerTrigger,
  DrawerBackdrop,
  DrawerPopup,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
};
