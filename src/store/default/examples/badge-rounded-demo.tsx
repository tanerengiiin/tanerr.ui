import { Badge } from "@/store/default/ui/badge";
import {
  CircleAlert,
  CircleCheck,
  CircleDashed,
  CircleX,
  Clock4,
} from "lucide-react";

export default function BadgeRoundedDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Badge rounded tone="info">
        <CircleCheck />
        Completed
      </Badge>
      <Badge rounded variant="ghost" tone="info">
        <CircleCheck />
        Completed
      </Badge>
      <Badge rounded variant="outline" tone="info">
        <CircleCheck />
        Completed
      </Badge>
    </div>
  );
}
