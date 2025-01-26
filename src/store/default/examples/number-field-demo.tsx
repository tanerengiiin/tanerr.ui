import {
  NumberField,
  NumberFieldInput,
  NumberFieldScrubArea,
} from "@/store/default/ui/number-field";

export default function NumberFieldDemo() {
  return (
    <NumberField defaultValue={8}>
      <NumberFieldScrubArea>
        <label className="font-medium text-sm">Amount</label>
      </NumberFieldScrubArea>
      <NumberFieldInput className="w-40" />
    </NumberField>
  );
}
