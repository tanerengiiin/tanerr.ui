"use client";

import * as React from "react";
import { Form as FormPrimitive } from "@base-ui-components/react/form";
import { cn } from "@/lib/utils";

const Form = React.forwardRef<
  React.ComponentRef<typeof FormPrimitive>,
  React.ComponentPropsWithoutRef<typeof FormPrimitive>
>(({ className, ...props }, ref) => {
  return <FormPrimitive ref={ref} className={cn("space-y-4", className)} {...props} />;
});

Form.displayName = FormPrimitive.displayName;

export { Form };
