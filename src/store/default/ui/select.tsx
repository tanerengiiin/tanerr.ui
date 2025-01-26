"use client";
import * as React from "react";
import { Select as SelectPrimitive } from "@base-ui-components/react/select";
import { cn } from "@/lib/utils";
import {
  CheckIcon,
  ChevronDown,
  ChevronsUpDown,
  ChevronUp,
} from "lucide-react";

const Select = SelectPrimitive.Root;

const SelectValue = SelectPrimitive.Value;

const SelectGroup = SelectPrimitive.Group;

const SelectTrigger = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "cursor-pointer flex h-9 min-w-32 items-center justify-between gap-3 rounded-md border pr-3 pl-3.5 text-primary select-none hover:bg-muted focus-visible:outline-none focus-visible:ring-4 transition-[box-shadow,_border,_background] focus-visible:ring-primary/5 focus-visible:border-primary/25 dark:focus-visible:border-primary/40 active:bg-muted data-[popup-open]:bg-muted",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon>
      <ChevronsUpDown className="size-4 opacity-60" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectBackdrop = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Backdrop>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Backdrop>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Backdrop
    ref={ref}
    className={cn(
      "pointer-events-none fixed inset-0 z-50 bg-black/30 dark:bg-black/60 transition-all duration-100 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0",
      className
    )}
    {...props}
  />
));

SelectBackdrop.displayName = SelectPrimitive.Backdrop.displayName;

const SelectPositioner = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Positioner>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Positioner> & {
    backdrop?: boolean;
  }
>(
  (
    { className, children, sideOffset = 8, backdrop = false, ...props },
    ref
  ) => (
    <SelectPrimitive.Portal>
      {backdrop && <SelectBackdrop />}
      <SelectPrimitive.Positioner
        ref={ref}
        className={cn(
          "outline-none z-50",
          className
        )}
        sideOffset={sideOffset}
        {...props}
      >
        <SelectScrollUpArrow />
        {children}
        <SelectScrollDownArrow />
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  )
);
SelectPositioner.displayName = SelectPrimitive.Positioner.displayName;

const SelectScrollUpArrow = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.ScrollUpArrow>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpArrow>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpArrow
    ref={ref}
    className={cn(
      "top-0 left-0 right-0 z-50 rounded-t-md border-b w-full bg-background text-primary hidden items-center justify-center py-0.5 data-[visible]:flex",
      className
    )}
    {...props}
  >
    <ChevronUp className="size-4" />
  </SelectPrimitive.ScrollUpArrow>
));
SelectScrollUpArrow.displayName = SelectPrimitive.ScrollUpArrow.displayName;

const SelectScrollDownArrow = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.ScrollDownArrow>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownArrow>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownArrow
    ref={ref}
    className={cn(
      "bottom-0 left-0 right-0 z-50 border-t rounded-b-md w-full bg-background text-primary items-center justify-center py-0.5 hidden data-[visible]:flex",
      className
    )}
    {...props}
  >
    <ChevronDown className="size-4" />
  </SelectPrimitive.ScrollDownArrow>
));
SelectScrollDownArrow.displayName = SelectPrimitive.ScrollDownArrow.displayName;

const SelectPopup = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Popup>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Popup> & {
    arrow?: boolean;
  }
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Popup
    ref={ref}
    className={cn(
      "group origin-[var(--transform-origin)] rounded-md bg-background py-1 text-primary shadow-lg outline outline-1 outline-border dark:shadow-none data-[starting-style]:opacity-0 transition-all duration-100",
      className
    )}
    {...props}
  />
));
SelectPopup.displayName = SelectPrimitive.Popup.displayName;

const SelectItem = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "grid min-w-[var(--anchor-width)] cursor-default grid-cols-[1rem_1fr] items-center gap-2 py-2 pr-4 pl-3 text-sm leading-4 outline-none select-none group-data-[side=none]:min-w-[calc(var(--anchor-width)+1.25rem)] group-data-[side=none]:pr-12 group-data-[side=none]:text-base group-data-[side=none]:leading-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-primary-foreground data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-primary ",
      className
    )}
    {...props}
  >
    <SelectPrimitive.ItemIndicator className="col-start-1">
      <CheckIcon className="size-4" />
    </SelectPrimitive.ItemIndicator>
    <SelectPrimitive.ItemText className="col-start-2">
      {children}
    </SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectGroupLabel = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.GroupLabel>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.GroupLabel>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.GroupLabel
    ref={ref}
    className={cn("pr-2 pl-9 py-1.5 mb-0.5 text-sm text-text-muted", className)}
    {...props}
  />
));
SelectGroupLabel.displayName = SelectPrimitive.GroupLabel.displayName;

const SelectSeparator = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
export {
  Select,
  SelectValue,
  SelectTrigger,
  SelectPositioner,
  SelectPopup,
  SelectItem,
  SelectGroup,
  SelectGroupLabel,
  SelectSeparator,
};
