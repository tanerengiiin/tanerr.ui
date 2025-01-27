import { Badge } from "@/store/default/ui/badge";
import {
  CircleAlert,
  CircleCheck,
  CircleDashed,
  CircleX,
  Clock4,
} from "lucide-react";

export default function BadgeGhostDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Badge variant="ghost">
        <CircleDashed />
        Draft
      </Badge>
      <Badge variant="ghost" tone="warning">
        <Clock4 />
        In-Progress
      </Badge>
      <Badge variant="ghost" tone="info">
        <CircleAlert />
        In-Review
      </Badge>
      <Badge variant="ghost" tone="success">
        <CircleCheck />
        Completed
      </Badge>
      <Badge variant="ghost" tone="error">
        <CircleX />
        Cancelled
      </Badge>
    </div>
  );
}
