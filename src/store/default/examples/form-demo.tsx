"use client";

import { Form } from "@/store/default/ui/form";
import { z } from "zod";
import {
  Field,
  FieldControl,
  FieldError,
  FieldLabel,
} from "@/store/default/ui/field";
import { Input } from "@/store/default/ui/input";
import { Button } from "@/store/default/ui/button";
import { useState } from "react";
import { Checkbox } from "@/store/default/ui/checkbox";

const schema = z.object({
  name: z.string().min(5, { message: "Name is required" }),
  checked: z.boolean().refine((val) => val === true, {
    message: "Checkbox must be checked", // Hata mesajı
  }),
});

export function FormDemo() {
  const [errors, setErrors] = useState({});
  function handleRequest(formData: FormData) {
    let result = schema.safeParse(Object.fromEntries(formData));
    if (!result.success) {
      console.log(result.error.flatten().fieldErrors);

      // Hataları nesne formatına dönüştür
      const formattedErrors = Object.entries(
        result.error.flatten().fieldErrors
      ).reduce((acc, [key, value]) => {
        acc[key] = value[0]; // İlk hata mesajını al
        return acc;
      }, {} as Record<string, string>);
      console.log(formattedErrors);
      return formattedErrors;
    }
    // ...
    return {};
  }
  return (
    <Form
      errors={errors}
      onClearErrors={setErrors}
      onSubmit={async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const errors = handleRequest(formData);
        setErrors(errors);
      }}
    >
      <Field name="name">
        <FieldLabel>Name</FieldLabel>
        <FieldControl render={<Input />} />
        <FieldError />
      </Field>
      <Field name="checked">
        <FieldLabel>Age</FieldLabel>
        <FieldControl render={<Checkbox />} />
        <FieldError />
      </Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
