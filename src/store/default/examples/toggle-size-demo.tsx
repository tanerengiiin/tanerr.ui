import { Toggle } from "@/store/default/ui/toggle";
import { Heart, ThumbsUp } from "lucide-react";

export default function SizeToggleDemo() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-2">
        <Toggle size="sm">
          <ThumbsUp />
          Small
        </Toggle>

        <Toggle size="default">
          <ThumbsUp />
          Default
        </Toggle>

        <Toggle size="lg">
          <ThumbsUp />
          Large
        </Toggle>
      </div>
      <div className="flex items-center gap-2">
        <Toggle size="sm">
          <Heart />
        </Toggle>

        <Toggle size="default">
          <Heart />
        </Toggle>

        <Toggle size="lg">
          <Heart />
        </Toggle>
      </div>
    </div>
  );
}
