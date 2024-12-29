"use client";

import * as React from "react";
import { Form as FormPrimitive } from "@base-ui-components/react/form";

interface FormProps
  extends React.ComponentPropsWithoutRef<typeof FormPrimitive> {
  onSubmit?: (values: Record<string, any>) => void;
}

const Form = React.forwardRef<
  React.ComponentRef<typeof FormPrimitive>,
  FormProps
>(({ onSubmit, ...props }, ref) => {
  

  const onFormSubmit: SubmitHandler<Record<string, any>> = (data) => {
    onSubmit?.(data); // Doğrulama başarılı olursa verileri ilet
  };

  return (
    <FormPrimitive
      ref={ref}
      errors={errors}
      onSubmit={handleSubmit(onFormSubmit)}
      onClearErrors={setErrors}
      {...props}
    />
  );
});

Form.displayName = FormPrimitive.displayName;

export { Form };
