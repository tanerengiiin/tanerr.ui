import { Button } from "@/store/default/ui/button";

export default function ButtonSolidDemo() {
  return (
    <div className="flex items-center gap-2">
      <Button>Default</Button>
      <Button variant="solid" tone="secondary">
        Secondary
      </Button>
      <Button variant="solid" tone="info">
        Info
      </Button>
      <Button variant="solid" tone="success">
        Success
      </Button>
      <Button variant="solid" tone="warning">
        Warning
      </Button>
      <Button variant="solid" tone="error">
        Error
      </Button>
    </div>
  );
}
