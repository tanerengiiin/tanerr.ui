import {
  Tooltip,
  TooltipPopup,
  TooltipPositioner,
  TooltipProvider,
  TooltipTrigger,
} from "@/store/default/ui/tooltip";
import { Button } from "@/store/default/ui/button";
import { Bold, Italic, Underline } from "lucide-react";

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <div className="flex gap-px rounded-lg border p-0.5">
        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant={"ghost"} size={"icon"}>
                <Bold />
              </Button>
            }
          />
          <TooltipPositioner>
            <TooltipPopup>
              <p>Bold</p>
            </TooltipPopup>
          </TooltipPositioner>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant={"ghost"} size={"icon"}>
                <Italic />
              </Button>
            }
          />
          <TooltipPositioner>
            <TooltipPopup>
              <p>Italic</p>
            </TooltipPopup>
          </TooltipPositioner>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant={"ghost"} size={"icon"}>
                <Underline />
              </Button>
            }
          />
          <TooltipPositioner>
            <TooltipPopup>
              <p>Underline</p>
            </TooltipPopup>
          </TooltipPositioner>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
