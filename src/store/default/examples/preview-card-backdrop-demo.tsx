import { Button } from "@/store/default/ui/button";
import {
  PreviewCard,
  PreviewCardPopup,
  PreviewCardPositioner,
  PreviewCardTrigger,
} from "@/store/default/ui/preview-card";
import { Mail, Calendar } from "lucide-react";

export default function BackdropPreviewCardDemo() {
  return (
    <PreviewCard>
      <PreviewCardTrigger render={<Button variant="link">John Doe</Button>} />
      <PreviewCardPositioner backdrop>
        <PreviewCardPopup className="w-80 p-0">
          <div>
            {/* Header */}
            <div className="relative h-24 rounded-t-md bg-gradient-to-r from-blue-500 to-blue-600">
              <div className="absolute -bottom-12 left-4">
                <div className="h-24 w-24 rounded-full border-4 border-background bg-blue-500 flex items-center justify-center">
                  <span className="text-2xl font-semibold text-base-0">JD</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-4 pb-4">
              <div className="mt-14 space-y-1">
                <h4 className="text-lg font-semibold text-text-primary">
                  John Doe
                </h4>
                <p className="text-sm text-text-muted">Product Designer</p>
              </div>

              <div className="mt-4 space-y-2 text-sm text-text-muted">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>john@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Joined March 2024</span>
                </div>
              </div>
            </div>
          </div>
        </PreviewCardPopup>
      </PreviewCardPositioner>
    </PreviewCard>
  );
}
