import { Toggle } from "@/store/default/ui/toggle";
import { ToggleGroup } from "@/store/default/ui/toggle-group";
import { Bold, Italic, Underline } from "lucide-react";

export default function ToneToggleGroupDemo() {
  return (
    <div className="flex flex-col gap-3">
      <ToggleGroup tone="success">
        <Toggle value="bold" tone="success">
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle value="italic" tone="success">
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle value="underline" tone="success">
          <Underline className="h-4 w-4" />
        </Toggle>
      </ToggleGroup>

      <ToggleGroup tone="info">
        <Toggle value="bold" tone="info">
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle value="italic" tone="info">
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle value="underline" tone="info">
          <Underline className="h-4 w-4" />
        </Toggle>
      </ToggleGroup>

      <ToggleGroup tone="warning" variant="ghost">
        <Toggle value="bold" tone="warning">
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle value="italic" tone="warning">
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle value="underline" tone="warning">
          <Underline className="h-4 w-4" />
        </Toggle>
      </ToggleGroup>

      <ToggleGroup tone="error" variant="ghost" toggleMultiple>
        <Toggle value="bold" tone="error" variant="ghost">
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle value="italic" tone="error" variant="ghost">
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle value="underline" tone="error" variant="ghost">
          <Underline className="h-4 w-4" />
        </Toggle>
      </ToggleGroup>
    </div>
  );
}
