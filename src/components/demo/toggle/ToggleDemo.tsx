import { Toggle } from "@/components/ui/toggle";
import { Bold } from "lucide-react";

export default function ToggleDemo() {
  return <Toggle color="default" variant={"outline"} aria-label="Toggle bold">
  <Bold className="h-4 w-4" />
  Bold
</Toggle>;
}
