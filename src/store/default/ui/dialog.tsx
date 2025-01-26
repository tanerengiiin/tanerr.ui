"use client";

import * as React from "react";
import { Dialog as DialogPrimitive } from "@base-ui-components/react/dialog";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const Dialog = DialogPrimitive.Root;

const DialogPortal = DialogPrimitive.Portal;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogClose = DialogPrimitive.Close;

const DialogBackdrop = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Backdrop>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Backdrop>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Backdrop
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/40 dark:bg-black/70 transition-all duration-200 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0",
      className
    )}
    {...props}
  />
));

DialogBackdrop.displayName = DialogPrimitive.Backdrop.displayName;

const DialogPopup = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Popup>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Popup>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogBackdrop />
    <DialogPrimitive.Popup
      ref={ref}
      className={cn(
        "z-50 fixed top-[calc(50%+1.25rem*var(--nested-dialogs))] left-1/2 -mt-8 w-[420px] max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 scale-[calc(1-0.1*var(--nested-dialogs))] rounded-lg bg-background p-6 outline outline-1 outline-border transition-all duration-200 data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[has-nested-dialogs]:after:absolute data-[has-nested-dialogs]:after:inset-0 data-[has-nested-dialogs]:after:rounded-[inherit] data-[has-nested-dialogs]:after:bg-black/10 dark:data-[has-nested-dialogs]:after:bg-black/30 data-[starting-style]:scale-90 data-[starting-style]:opacity-0",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-2 top-2 p-1 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none hover:bg-primary/10 disabled:pointer-events-none data-[starting-style]:bg-accent data-[starting-style]:text-muted-foreground">
        <>
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </>
      </DialogPrimitive.Close>
    </DialogPrimitive.Popup>
  </DialogPortal>
));

DialogPopup.displayName = DialogPrimitive.Popup.displayName;

const DialogTitle = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-text-muted", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogTrigger,
  DialogBackdrop,
  DialogPopup,
  DialogTitle,
  DialogDescription,
  DialogClose,
};
