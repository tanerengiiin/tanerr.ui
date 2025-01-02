import { Button } from "@/components/ui/button";
import { Moon } from "lucide-react";

export default function SizeButtonDemo() {
  return (
    <div className="flex items-center gap-2">
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">
        <Moon />
      </Button>
    </div>
  );
}
