import { Badge } from "@/store/default/ui/badge";
import {
  CircleAlert,
  CircleCheck,
  CircleDashed,
  CircleX,
  Clock4,
} from "lucide-react";

export default function BadgeSolidDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Badge>
        <CircleDashed />
        Draft
      </Badge>
      <Badge tone="warning">
        <Clock4 />
        In-Progress
      </Badge>
      <Badge tone="info">
        <CircleAlert />
        In-Review
      </Badge>
      <Badge tone="success">
        <CircleCheck />
        Completed
      </Badge>
      <Badge tone="error">
        <CircleX />
        Cancelled
      </Badge>
    </div>
  );
}
