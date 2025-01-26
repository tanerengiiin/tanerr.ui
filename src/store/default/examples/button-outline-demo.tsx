import { Button } from "@/store/default/ui/button";

export default function ButtonOutlineDemo() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" tone="primary">
        Primary
      </Button>
      <Button variant="outline">Secondary</Button>
      <Button variant="outline" tone="info">
        Info
      </Button>
      <Button variant="outline" tone="success">
        Success
      </Button>
      <Button variant="outline" tone="warning">
        Warning
      </Button>
      <Button variant="outline" tone="error">
        Error
      </Button>
    </div>
  );
}
