import {
  Field,
  FieldControl,
  FieldDescription,
  FieldLabel,
} from "@/store/default/ui/field";
import { Input } from "@/store/default/ui/input";

export default function WithLabelInputDemo() {
  return (
    <Field>
      <FieldLabel>Email</FieldLabel>
      <FieldControl render={<Input placeholder="Email" />} />
      <FieldDescription>Please enter a valid email address.</FieldDescription>
    </Field>
  );
}
