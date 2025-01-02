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
>(({ className, sideOffset = 4, ...props }, ref) => (
  <MenuPrimitive.Portal>
    <MenuPrimitive.Positioner
      ref={ref}
      sideOffset={sideOffset}
      className={cn("outline-none z-50", className)}
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
      "group/menu-popup origin-[var(--transform-origin)] min-w-[12rem] rounded-md bg-popover p-1 text-text-accent shadow-md outline outline-1 outline-border transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0",
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
      "group-data-[inset]/menu-popup:pl-8 relative flex items-center cursor-default gap-2 rounded-sm px-2 py-1.5 text-sm select-none outline-none transition-colors data-[highlighted]:bg-muted data-[highlighted]:text-text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:opacity-60",
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
      "group-data-[inset]/menu-popup:pl-8 px-2 py-1.5 text-sm text-text-muted",
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
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[checked]:text-text-primary data-[highlighted]:bg-muted data-[highlighted]:text-text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <MenuPrimitive.RadioItemIndicator className="absolute left-3 top-1/2 -translate-y-1/2 size-3 border-[3px] border-text-primary rounded-full transition-[transform,opacity] data-[starting-style]:scale-50 data-[ending-style]:scale-50" />
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
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[highlighted]:bg-muted data-[checked]:text-text-primary data-[highlighted]:text-text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <MenuPrimitive.CheckboxItemIndicator className="absolute left-2 top-1/2 -translate-y-1/2 transition-[transform,opacity] data-[starting-style]:scale-0 data-[ending-style]:scale-0 [&_svg]:size-4 [&_svg]:text-text-primary">
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
      "group-data-[inset]/menu-popup:pl-8 flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 transition-colors text-sm outline-none data-[highlighted]:bg-muted data-[highlighted]:text-text-primary data-[popup-open]:bg-muted data-[popup-open]:text-text-primary [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:opacity-60",
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
