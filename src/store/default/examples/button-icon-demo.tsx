import { Button } from "@/store/default/ui/button";
import { Heart } from "lucide-react";

export default function ButtonIconDemo() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Button size="icon">
          <Heart />
        </Button>
        <Button size="icon" variant="outline" tone="primary">
          <Heart />
        </Button>
        <Button size="icon" variant="ghost" tone="primary">
          <Heart />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button size="icon" tone="secondary">
          <Heart />
        </Button>
        <Button size="icon" variant="outline">
          <Heart />
        </Button>
        <Button size="icon" variant="ghost">
          <Heart />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button size="icon" tone="info">
          <Heart />
        </Button>
        <Button size="icon" variant="outline" tone="info">
          <Heart />
        </Button>
        <Button size="icon" variant="ghost" tone="info">
          <Heart />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button size="icon" tone="success">
          <Heart />
        </Button>
        <Button size="icon" variant="outline" tone="success">
          <Heart />
        </Button>
        <Button size="icon" variant="ghost" tone="success">
          <Heart />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button size="icon" tone="warning">
          <Heart />
        </Button>
        <Button size="icon" variant="outline" tone="warning">
          <Heart />
        </Button>
        <Button size="icon" variant="ghost" tone="warning">
          <Heart />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button size="icon" tone="error">
          <Heart />
        </Button>
        <Button size="icon" variant="outline" tone="error">
          <Heart />
        </Button>
        <Button size="icon" variant="ghost" tone="error">
          <Heart />
        </Button>
      </div>
    </div>
  );
}
