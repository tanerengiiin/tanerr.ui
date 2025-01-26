"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Collapsible as CollapsiblePrimitive } from "@base-ui-components/react/collapsible";
import { ChevronRight } from "lucide-react";

const Collapsible = React.forwardRef<
  React.ComponentRef<typeof CollapsiblePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root>
>(({ className, ...props }, ref) => (
  <CollapsiblePrimitive.Root
    ref={ref}
    className={cn(
      "flex rounded-sm w-72 flex-col justify-center",
      className
    )}
    {...props}
  />
));
Collapsible.displayName = CollapsiblePrimitive.Root.displayName;

const CollapsibleTrigger = React.forwardRef<
  React.ComponentRef<typeof CollapsiblePrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Trigger>
>(({ children, className, ...props }, ref) => (
  <CollapsiblePrimitive.Trigger
    ref={ref}
    className={cn(
      "group flex items-center gap-1.5 rounded-t-sm rounded-sm bg-secondary px-2 py-1.5 text-sm font-medium hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:bg-muted",
      className
    )}
    {...props}
  >
    <ChevronRight className="size-4 transition-all ease-out group-data-[panel-open]:rotate-90" />
    <div className="flex-1 text-left">{children}</div>
  </CollapsiblePrimitive.Trigger>
));
CollapsibleTrigger.displayName = CollapsiblePrimitive.Trigger.displayName;

const CollapsiblePanel = React.forwardRef<
  React.ComponentRef<typeof CollapsiblePrimitive.Panel>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Panel>
>(({ className, ...props }, ref) => (
  <CollapsiblePrimitive.Panel
    ref={ref}
    className={cn(
      "flex h-[var(--collapsible-panel-height)] flex-col justify-end overflow-hidden text-sm transition-all duration-200 ease-out data-[ending-style]:h-0 data-[starting-style]:h-0",
      className
    )}
    {...props}
  />
));
CollapsiblePanel.displayName = CollapsiblePrimitive.Panel.displayName;

const CollapsibleContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "mt-1.5 flex cursor-text flex-col gap-2 rounded-sm bg-secondary py-2.5 pl-8",
      className
    )}
    {...props}
  />
);
CollapsibleContent.displayName = "CollapsibleContent";

export {
  Collapsible,
  CollapsibleTrigger,
  CollapsiblePanel,
  CollapsibleContent,
};
