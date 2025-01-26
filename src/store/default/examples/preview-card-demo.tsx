import { Button } from "@/store/default/ui/button";
import {
  PreviewCard,
  PreviewCardPopup,
  PreviewCardPositioner,
  PreviewCardTrigger,
} from "@/store/default/ui/preview-card";
import { ExternalLink } from "lucide-react";

export default function PreviewCardDemo() {
  return (
    <PreviewCard>
      <PreviewCardTrigger render={<Button variant={"link"}>hover me</Button>} />
      <PreviewCardPositioner>
        <PreviewCardPopup className="w-72">
          <div className="flex flex-col gap-2">
            <h4 className="font-medium text-text-primary">Quick preview</h4>
            <p className="text-sm text-muted-foreground">
              Preview content without leaving the current context.
            </p>
            <a
              href="#"
              className="mt-2 inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              Learn more <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </PreviewCardPopup>
      </PreviewCardPositioner>
    </PreviewCard>
  );
}
