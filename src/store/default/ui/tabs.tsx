"use client";
import * as React from "react";
import { Tabs as TabsPrimitive } from "@base-ui-components/react/tabs";
import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, children, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "relative z-0 flex items-center gap-1 mb-1 shadow-[inset_0_-1px] shadow-border",
      className
    )}
    {...props}
  >
    {children}
    <TabsPrimitive.Indicator className="absolute top-1/2 left-0 z-[-1] h-8 w-[var(--active-tab-width)] -translate-y-1/2 translate-x-[var(--active-tab-left)] rounded-md bg-muted transition-all duration-200 ease-in-out" />
  </TabsPrimitive.List>
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTab = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Tab>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Tab>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Tab
    ref={ref}
    className={cn(
      "flex h-10 items-center justify-center border-0 px-2.5 text-sm font-medium text-text-accent outline-none select-none hover:text-text-secondary focus-visible:relative focus-visible:before:absolute focus-visible:before:outline focus-visible:before:outline-2 data-[selected]:text-primary transition-colors",
      className
    )}
    {...props}
  />
));
TabsTab.displayName = TabsPrimitive.Tab.displayName;

const TabsPanel = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Panel>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Panel>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Panel
    ref={ref}
    className={cn(
      "focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-4 transition-[box-shadow] focus-visible:ring-primary/5 data-[hidden]:hidden",
      className
    )}
    {...props}
  />
));
TabsPanel.displayName = TabsPrimitive.Panel.displayName;

export { Tabs, TabsList, TabsTab, TabsPanel };
