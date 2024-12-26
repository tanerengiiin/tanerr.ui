"use client";
import * as React from "react";
import { Menu as MenuPrimitive } from "@base-ui-components/react/menu";
import { cn } from "@/lib/utils";
import { Check, ChevronRight } from "lucide-react";

const Menu = MenuPrimitive.Root;

const MenuTrigger = MenuPrimitive.Trigger;

const MenuGroup = MenuPrimitive.Group;

const MenuRadioGroup = MenuPrimitive.RadioGroup;

const MenuPositioner = React.forwardRef<
  React.ComponentRef<typeof MenuPrimitive.Positioner>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.Positioner>
>(({ className, ...props }, ref) => (
  <MenuPrimitive.Portal>
    <MenuPrimitive.Positioner
      ref={ref}
      className={cn("z-50", className)}
      {...props}
    />
  </MenuPrimitive.Portal>
));
MenuPositioner.displayName = MenuPrimitive.Positioner.displayName;

const MenuPopup = React.forwardRef<
  React.ComponentRef<typeof MenuPrimitive.Popup>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.Popup> & {
    inset?: boolean;
  }
>(({ className, inset = false, ...props }, ref) => (
  <MenuPrimitive.Popup
    ref={ref}
    className={cn(
      "group/menu-popup origin-[var(--transform-origin)] z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[open]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[open]:fade-in-0 data-[closed]:zoom-out-95 data-[open]:zoom-in-95",
      className
    )}
    {...(inset ? { "data-inset": "" } : {})}
    {...props}
  ></MenuPrimitive.Popup>
));
MenuPopup.displayName = MenuPrimitive.Popup.displayName;

const MenuItem = React.forwardRef<
  React.ComponentRef<typeof MenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset = false, ...props }, ref) => (
  <MenuPrimitive.Item
    ref={ref}
    className={cn(
      "group-data-[inset]/menu-popup:pl-8 relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:opacity-60",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
MenuItem.displayName = MenuPrimitive.Item.displayName;

const MenuSeparator = React.forwardRef<
  React.ComponentRef<typeof MenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
MenuSeparator.displayName = MenuPrimitive.Separator.displayName;

const MenuGroupLabel = React.forwardRef<
  React.ComponentRef<typeof MenuPrimitive.GroupLabel>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.GroupLabel>
>(({ className, ...props }, ref) => (
  <MenuPrimitive.GroupLabel
    ref={ref}
    className={cn(
      "group-data-[inset]/menu-popup:pl-8 px-2 py-1.5 text-sm text-primary/60",
      className
    )}
    {...props}
  />
));
MenuGroupLabel.displayName = MenuPrimitive.GroupLabel.displayName;

const MenuRadioItem = React.forwardRef<
  React.ComponentRef<typeof MenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <MenuPrimitive.RadioItemIndicator className="absolute left-3 top-1/2 -translate-y-1/2 size-2.5 bg-primary/80 rounded-full data-[unchecked]:hidden" />
    {children}
  </MenuPrimitive.RadioItem>
));
MenuRadioItem.displayName = MenuPrimitive.RadioItem.displayName;

const MenuCheckboxItem = React.forwardRef<
  React.ComponentRef<typeof MenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.CheckboxItem>
>(({ className, children, ...props }, ref) => (
  <MenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <MenuPrimitive.CheckboxItemIndicator className="absolute left-2 top-1/2 -translate-y-1/2 data-[unchecked]:hidden [&_svg]:size-4">
      <Check />
    </MenuPrimitive.CheckboxItemIndicator>
    {children}
  </MenuPrimitive.CheckboxItem>
));
MenuCheckboxItem.displayName = MenuPrimitive.CheckboxItem.displayName;

const MenuSubmenuTrigger = React.forwardRef<
  React.ComponentRef<typeof MenuPrimitive.SubmenuTrigger>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.SubmenuTrigger>
>(({ className, children, ...props }, ref) => (
  <MenuPrimitive.SubmenuTrigger
    ref={ref}
    className={cn(
      "group-data-[inset]/menu-popup:pl-8 flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 transition-colors text-sm outline-none data-[highlighted]:bg-accent data-[popup-open]:bg-accent data-[open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:opacity-60",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto opacity-100" />
  </MenuPrimitive.SubmenuTrigger>
));
MenuSubmenuTrigger.displayName = MenuPrimitive.SubmenuTrigger.displayName;

export {
  Menu,
  MenuTrigger,
  MenuPositioner,
  MenuPopup,
  MenuItem,
  MenuSeparator,
  MenuGroup,
  MenuGroupLabel,
  MenuRadioGroup,
  MenuRadioItem,
  MenuCheckboxItem,
  MenuSubmenuTrigger,
};
