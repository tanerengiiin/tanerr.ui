"use client";
import * as React from "react";
import { CheckboxGroup as CheckboxGroupPrimitive } from "@base-ui-components/react/checkbox-group";

import { cn } from "@/lib/utils";

const CheckboxGroup = React.forwardRef<
  React.ComponentRef<typeof CheckboxGroupPrimitive>,
  React.ComponentPropsWithoutRef<typeof CheckboxGroupPrimitive>
>(({ className, ...props }, ref) => (
  <CheckboxGroupPrimitive
    ref={ref}
    className={cn("flex flex-col items-start gap-2", className)}
    {...props}
  />
));

CheckboxGroup.displayName = CheckboxGroupPrimitive.displayName;

export { CheckboxGroup };
