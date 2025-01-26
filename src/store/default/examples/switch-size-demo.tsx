import { Switch } from "@/store/default/ui/switch";

export default function SizeSwitchDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Switch size="sm" defaultChecked />
      <Switch size="md" defaultChecked />
      <Switch size="lg" defaultChecked />
    </div>
  );
}
