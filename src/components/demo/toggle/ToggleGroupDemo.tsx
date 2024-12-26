import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup } from "@/components/ui/toggle-group";
import { Bold, Italic, Underline } from "lucide-react";

export default function ToggleGroupDemo() {
  return (
    <ToggleGroup variant={"outline"} >
      <Toggle value="bold" >
        <Bold />
      </Toggle>
      <Toggle value="italic" >
        <Italic />
      </Toggle>
      <Toggle value="underline" >
        <Underline />
      </Toggle>
    </ToggleGroup>
  );
}
