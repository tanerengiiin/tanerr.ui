import { Checkbox } from "@/store/default/ui/checkbox";

export default function ChecboxToneDemo() {
  return (
    <div className="flex items-center justify-center gap-2">
      <Checkbox tone="default" defaultChecked />
      <Checkbox tone="success" defaultChecked />
      <Checkbox tone="info" defaultChecked />
      <Checkbox tone="warning" defaultChecked />
      <Checkbox tone="error" defaultChecked />
    </div>
  );
}
