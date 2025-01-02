import { Checkbox } from "@/components/ui/checkbox";
import { CheckboxGroup } from "@/components/ui/checkbox-group";

export default function CheckboxGroupDemo() {
  return (
    <CheckboxGroup defaultValue={["react"]} aria-label="Technologies">
      <div className="flex flex-col gap-3">
        <label className="flex items-center gap-2">
          <Checkbox name="react" />
          React
        </label>
        <label className="flex items-center gap-2">
          <Checkbox name="next" />
          Next.js
        </label>
        <label className="flex items-center gap-2">
          <Checkbox name="typescript" />
          TypeScript
        </label>
      </div>
    </CheckboxGroup>
  );
}
