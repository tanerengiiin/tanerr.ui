import { Toggle } from "@/store/default/ui/toggle";
import { CheckCircle2, Info, TriangleAlert, XCircle } from "lucide-react";

export default function ToneToggleDemo() {
  return (
    <div className="flex gap-2">
      <Toggle tone="default">
        <Info className="h-4 w-4" />
        Default
      </Toggle>

      <Toggle tone="success">
        <CheckCircle2 className="h-4 w-4" />
        Success
      </Toggle>

      <Toggle tone="info">
        <Info className="h-4 w-4" />
        Info
      </Toggle>

      <Toggle tone="warning">
        <TriangleAlert className="h-4 w-4" />
        Warning
      </Toggle>

      <Toggle tone="error">
        <XCircle className="h-4 w-4" />
        Error
      </Toggle>
    </div>
  );
}
