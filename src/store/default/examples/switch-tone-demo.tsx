import { Switch } from "@/store/default/ui/switch";

export default function ToneSwitchDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Switch tone="success" defaultChecked />
      <Switch tone="info" defaultChecked />
      <Switch tone="warning" defaultChecked />
      <Switch tone="error" defaultChecked />
    </div>
  );
}
