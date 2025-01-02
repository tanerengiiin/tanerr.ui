"use client";
import * as React from "react";
import { Field as FieldPrimitive } from "@base-ui-components/react/field";
import { cn } from "@/lib/utils";

const FieldControl = FieldPrimitive.Control;

const FieldValidity = FieldPrimitive.Validity;

const Field = React.forwardRef<
  React.ComponentRef<typeof FieldPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof FieldPrimitive.Root>
>(({ className, ...props }, ref) => (
  <FieldPrimitive.Root
    ref={ref}
    className={cn("flex flex-col gap-1", className)}
    {...props}
  />
));

Field.displayName = FieldPrimitive.Root.displayName;

const FieldLabel = React.forwardRef<
  React.ComponentRef<typeof FieldPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof FieldPrimitive.Label>
>(({ className, ...props }, ref) => (
  <FieldPrimitive.Label
    ref={ref}
    className={cn("font-medium text-sm text-text-primary", className)}
    {...props}
  />
));

FieldLabel.displayName = FieldPrimitive.Label.displayName;

const FieldError = React.forwardRef<
  React.ComponentRef<typeof FieldPrimitive.Error>,
  React.ComponentPropsWithoutRef<typeof FieldPrimitive.Error>
>(({ className, ...props }, ref) => (
  <FieldPrimitive.Error
    ref={ref}
    className={cn("text-sm font-medium text-destructive", className)}
    {...props}
  />
));
FieldError.displayName = FieldPrimitive.Error.displayName;

const FieldDescription = React.forwardRef<
  React.ComponentRef<typeof FieldPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof FieldPrimitive.Description>
>(({ className, ...props }, ref) => (
  <FieldPrimitive.Description
    ref={ref}
    className={cn("text-sm text-text-muted", className)}
    {...props}
  />
));
FieldDescription.displayName = FieldPrimitive.Description.displayName;

export {
  Field,
  FieldLabel,
  FieldControl,
  FieldError,
  FieldDescription,
  FieldValidity,
};
