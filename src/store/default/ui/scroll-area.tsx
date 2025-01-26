"use client";
import * as React from "react";
import { ScrollArea as ScrollAreaPrimitive } from "@base-ui-components/react/scroll-area";

import { cn } from "@/lib/utils";

const ScrollArea = React.forwardRef<
  React.ComponentRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("h-[8.5rem] w-96 max-w-[calc(100vw-8rem)]", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full overscroll-contain rounded-md outline outline-1 -outline-offset-1 outline-border focus-visible:ring-4 transition-[box-shadow,_outline] focus-visible:ring-primary/5 focus-visible:outline-primary/25 dark:focus-visible:outline-primary/40">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollAreaPrimitive.Scrollbar className="m-2 flex w-1 justify-center rounded bg-muted opacity-0 transition-opacity delay-300 data-[hovering]:opacity-100 data-[hovering]:delay-0 data-[hovering]:duration-75 data-[scrolling]:opacity-100 data-[scrolling]:delay-0 data-[scrolling]:duration-75">
      <ScrollAreaPrimitive.Thumb className="w-full rounded bg-primary/70" />
    </ScrollAreaPrimitive.Scrollbar>
  </ScrollAreaPrimitive.Root>
));

ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

export { ScrollArea };
