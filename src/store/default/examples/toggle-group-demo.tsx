import { Toggle } from "@/store/default/ui/toggle";
import { ToggleGroup } from "@/store/default/ui/toggle-group";
import { Bold, Italic, Underline } from "lucide-react";

export default function ToggleGroupDemo() {
  return (
    <ToggleGroup>
      <Toggle value="bold">
        <Bold />
      </Toggle>
      <Toggle value="italic">
        <Italic />
      </Toggle>
      <Toggle value="underline">
        <Underline />
      </Toggle>
    </ToggleGroup>
  );
}
