import { Button } from "@/store/default/ui/button";

export default function ButtonSolidDemo() {
  return (
    <div className="flex items-center gap-2">
      <Button>Primary</Button>
      <Button tone="secondary">
        Secondary
      </Button>
      <Button tone="info">
        Info
      </Button>
      <Button tone="success">
        Success
      </Button>
      <Button tone="warning">
        Warning
      </Button>
      <Button tone="error">
        Error
      </Button>
    </div>
  );
}
