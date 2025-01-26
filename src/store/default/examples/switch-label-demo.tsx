import { Switch } from "@/store/default/ui/switch";

export default function LabelSwitchDemo() {
  return (
    <div className="space-y-6">
      {/* Basic Label */}
      <label className="flex items-center gap-2 cursor-pointer">
        <Switch defaultChecked tone="success" size="sm" />
        <span className="text-sm font-medium">Notifications</span>
      </label>

      {/* With Description */}
      <label className="flex items-start gap-2 cursor-pointer">
        <Switch className="mt-1" tone="info" defaultChecked />
        <div>
          <div className="text-sm font-medium">Email updates</div>
          <div className="text-sm text-text-muted">
            Get notified when new updates arrive
          </div>
        </div>
      </label>

      {/* With Required */}
      <label className="flex items-center gap-2 cursor-pointer">
        <Switch tone="error" size="lg" defaultChecked />
        <div className="text-sm font-medium">
          Accept terms
          <span className="text-error ml-0.5">*</span>
        </div>
      </label>
    </div>
  );
}
