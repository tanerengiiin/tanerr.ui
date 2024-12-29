"use client"

import { Field, FieldControl, FieldLabel } from "@/components/ui/field";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod"
 
const formSchema = z.object({
  username: z.string().min(2).max(50),
})

export default function NumberFieldDemo() {

  return (
    <Form schema={formSchema}>
        <Field>
            <FieldLabel>Username</FieldLabel>
            <FieldControl render={<Input name="username" defaultValue={'taner'}/>}/>
        </Field>
    </Form>
  );
}