/*"use client";

import React from "react";
import {
  Field,
  FieldControl,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectPopup,
  SelectPositioner,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  NumberField,
  NumberFieldInput,
  NumberFieldScrubArea,
} from "@/components/ui/number-field";

type Errors = Record<string, string | string[]>;

const formSchema = z.object({
  username: z
    .string()
    .min(2, "Username must be at least 2 characters")
    .max(50, "Username must be less than 50 characters"),
  checkbox: z.string().refine((val) => val === "on", {
    message: "You must accept the terms",
  }),
  number: z.string().refine((val) => Number(val) > 100, {
    message: "Number must be greater than 100",
  }),
});

export default function FormDemo() {
  const [errors, setErrors] = React.useState<Errors>({});

  const validateForm = async (values: z.infer<typeof formSchema>) => {
    try {
      await formSchema.parseAsync(values);
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path) {
            formattedErrors[err.path[0]] = err.message;
          }
        });
        setErrors(formattedErrors);
      }
      return false;
    }
  };

  return (
    <Form
      errors={errors}
      onClearErrors={setErrors}
      onSubmit={async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const rawValues = Object.fromEntries(formData) as Record<
          string,
          FormDataEntryValue
        >;

        console.log("Form değerleri:", rawValues);

        const isValid = await validateForm(rawValues);

        if (isValid) {
          console.log("Form geçerli:", rawValues);
          setErrors({});
          // Burada form verilerini API'ye gönderebilirsiniz
        }
      }}
      className={"w-72 mx-auto mt-16"}
    >
      <Field name="username">
        <FieldLabel>Username</FieldLabel>
        <FieldControl render={<Input type="text" />} />
        <FieldError />
        <FieldDescription>This is a description</FieldDescription>
      </Field>
      <Field name="checkbox">
        <FieldLabel>Checkbox</FieldLabel>
        <FieldControl render={() => <Checkbox name="checkbox" />} />
        <FieldError />
      </Field>
      <Field name="number">
        <FieldControl
          render={() => (
            <NumberField name="number">
              <NumberFieldScrubArea>Number</NumberFieldScrubArea>
              <NumberFieldInput />
            </NumberField>
          )}
        />
        <FieldError />
      </Field>

      <Button variant="default" type="submit">
        Submit
      </Button>
    </Form>
  );
}
*/