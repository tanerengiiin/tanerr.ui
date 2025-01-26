"use client";
import * as React from "react";
import { Accordion as AccordionPrimitive } from "@base-ui-components/react/accordion";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

const Accordion = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & {
    inset?: boolean;
  }
>(({ className, inset = false, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    {...(inset && { "data-inset": '' })}
    className={cn("group/accordion", className)}
    {...props}
  />
));
Accordion.displayName = AccordionPrimitive.Root.displayName;

const AccordionItem = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "rounded-md border data-[open]:bg-primary-foreground hover:bg-secondary transition-colors",
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = AccordionPrimitive.Item.displayName;

const AccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className={cn("flex")}>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group/accordion-trigger flex w-full gap-2 px-3 py-2.5 rounded-md cursor-pointer items-center text-sm font-medium text-left text-primary transition-[box-shadow,_border] [&_svg]:size-4 [&_svg]:opacity-60 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/5",
        className
      )}
      {...props}
    >
      {children}
      <Plus className="ml-auto shrink-0 !opacity-100 will-change-transform transition-transform duration-200 group-data-[panel-open]/accordion-trigger:scale-[1.15] group-data-[panel-open]/accordion-trigger:rotate-45" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionPanel = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Panel>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Panel> & {
    inset?: boolean;
  }
>(({ className, inset = false, ...props }, ref) => (
  <AccordionPrimitive.Panel
    ref={ref}
    className={cn(
      "overflow-hidden h-[calc(var(--accordion-panel-height)+0.625rem)] px-3 text-sm text-text-secondary transition-[height] duration-200 ease-out group-data-[inset]/accordion:pl-9 data-[ending-style]:h-0 data-[starting-style]:h-0",
      inset && "pl-9",
      className
    )}
    {...props}
  />
));
AccordionPanel.displayName = AccordionPrimitive.Panel.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionPanel };
