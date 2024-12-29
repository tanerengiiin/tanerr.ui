"use client";

import {
  Field,
  FieldControl,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import React from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});
const Playground = () => {
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  return (
    <Form onSubmit={onSubmit} {...form}>
      <Field name="username">
        <FieldLabel>Username</FieldLabel>
        <FieldControl render={<Input defaultValue={"taner"} />} />
        <FieldError />
      </Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default Playground;
