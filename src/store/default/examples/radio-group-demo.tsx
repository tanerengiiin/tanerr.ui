import { Radio, RadioGroup } from "@/store/default/ui/radio-group";

export default function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue={"defult"}>
      <label className="flex items-center gap-2">
        <Radio value={"default"} />
        <span className="text-sm font-medium">Default</span>
      </label>
      <label className="flex items-center gap-2">
        <Radio value={"comfortable"} />
        <span className="text-sm font-medium">Comfortable</span>
      </label>
      <label className="flex items-center gap-2">
        <Radio value={"compact"} />
        <span className="text-sm font-medium">Compact</span>
      </label>
    </RadioGroup>
  );
}
