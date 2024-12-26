import { Checkbox } from "@/components/ui/checkbox";
import { CheckboxGroup } from "@/components/ui/checkbox-group";

export default function CheckboxGroupDemo() {
  return (
    <CheckboxGroup
      aria-labelledby="apples-caption"
      defaultValue={["fuji-apple"]}
    >
      <div className="font-medium" id="apples-caption">
        Apples
      </div>

      <label className="flex items-center gap-2">
        <Checkbox name="fuji-apple" />
        Fuji
      </label>

      <label className="flex items-center gap-2">
        <Checkbox name="gala-apple" />
        Gala
      </label>

      <label className="flex items-center gap-2">
        <Checkbox name="granny-smith-apple" />
        Granny Smith
      </label>
    </CheckboxGroup>
  );
}
