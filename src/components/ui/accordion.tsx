"use client";
import * as React from "react";
import { Accordion as AccordionPrimitive } from "@base-ui-components/react/accordion";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "border rounded-md data-[open]:bg-base-50 dark:data-[open]:bg-base-900 hover:bg-accent transition-colors data-[open]:pb-1.5",
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
        "group/accordion-trigger flex w-full cursor-pointer items-center gap-2 px-3 py-2.5 text-sm font-medium text-left text-primary [&_svg]:size-4 [&_svg]:opacity-60 rounded-md focus-visible:outline-none focus-visible:ring-4 transition-[box-shadow,_border] focus-visible:ring-primary/5 ",
        className
      )}
      {...props}
    >
      {children}
      <Plus className="ml-auto will-change-transform !opacity-100 shrink-0 transition-transform duration-200 group-data-[panel-open]/accordion-trigger:scale-[1.15] group-data-[panel-open]/accordion-trigger:rotate-45" />
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
      "text-text-secondary text-sm h-[var(--accordion-panel-height)] px-3 overflow-hidden transition-[height] ease-out data-[ending-style]:h-0 data-[starting-style]:h-0",
      inset && "pl-9",
      className
    )}
    {...props}
  />
));
AccordionPanel.displayName = AccordionPrimitive.Panel.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionPanel };
