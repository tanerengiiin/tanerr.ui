import { Button } from "@/store/default/ui/button";
import { Loader2 } from "lucide-react";

export default function ButtonLoadingDemo() {
  return (
    <div className="flex items-center gap-4">
      <Button loading>
        <Loader2 className="animate-spin" />
        Processing
      </Button>
      <Button loading variant="outline">
        <Loader2 className="animate-spin" />
        Processing
      </Button>
      <Button loading variant="ghost">
        <Loader2 className="animate-spin" />
        Processing
      </Button>
    </div>
  );
}
