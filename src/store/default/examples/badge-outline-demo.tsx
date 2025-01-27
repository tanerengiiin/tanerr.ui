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
      <Badge variant="outline">
        <CircleDashed />
        Draft
      </Badge>
      <Badge variant="outline" tone="warning">
        <Clock4 />
        In-Progress
      </Badge>
      <Badge variant="outline" tone="info">
        <CircleAlert />
        In-Review
      </Badge>
      <Badge variant="outline" tone="success">
        <CircleCheck />
        Completed
      </Badge>
      <Badge variant="outline" tone="error">
        <CircleX />
        Cancelled
      </Badge>
    </div>
  );
}
