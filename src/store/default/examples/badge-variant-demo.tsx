import { Badge } from "@/store/default/ui/badge";

export default function BadgeVariantDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Badge variant="outline">Outline</Badge>
      <Badge variant="outline" tone="primary">Primary</Badge>
      <Badge variant="outline" tone="info" >Info</Badge>
      <Badge variant="outline" tone="success">Success</Badge>
      <Badge variant="outline" tone="warning">Warning</Badge>
      <Badge variant="outline" tone="error">Error</Badge>
    </div>
  );
}
