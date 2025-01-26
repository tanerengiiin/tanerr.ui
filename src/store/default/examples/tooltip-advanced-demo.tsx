import {
  Tooltip,
  TooltipPopup,
  TooltipPositioner,
  TooltipProvider,
  TooltipTrigger,
} from "@/store/default/ui/tooltip";
import { Button } from "@/store/default/ui/button";
import { AlertCircle, CheckCircle2, XCircle } from "lucide-react";

export default function AdvancedTooltipDemo() {
  return (
    <TooltipProvider>
      <div className="flex gap-4">
        {/* Success Tooltip */}
        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant="outline" size="icon">
                <CheckCircle2 className="h-4 w-4 text-success" />
              </Button>
            }
          />
          <TooltipPositioner>
            <TooltipPopup className="max-w-[300px] p-3">
              <div className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-success shrink-0" />
                <div>
                  <div className="font-medium mb-1">Deployment successful</div>
                  <div className="text-sm text-text-muted">
                    Your application has been successfully deployed to
                    production. All systems are running normally.
                  </div>
                </div>
              </div>
            </TooltipPopup>
          </TooltipPositioner>
        </Tooltip>

        {/* Warning Tooltip */}
        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant="outline" size="icon">
                <AlertCircle className="h-4 w-4 text-warning" />
              </Button>
            }
          />
          <TooltipPositioner>
            <TooltipPopup className="max-w-[300px] p-3">
              <div className="flex gap-2">
                <AlertCircle className="h-5 w-5 text-warning shrink-0" />
                <div>
                  <div className="font-medium mb-1">High CPU Usage</div>
                  <div className="text-sm text-text-muted">
                    Server is experiencing high CPU usage. Consider scaling your
                    resources to maintain optimal performance.
                  </div>
                </div>
              </div>
            </TooltipPopup>
          </TooltipPositioner>
        </Tooltip>

        {/* Error Tooltip */}
        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant="outline" size="icon">
                <XCircle className="h-4 w-4 text-error" />
              </Button>
            }
          />
          <TooltipPositioner>
            <TooltipPopup className="max-w-[300px] p-3">
              <div className="flex gap-2">
                <XCircle className="h-5 w-5 text-error shrink-0" />
                <div>
                  <div className="font-medium mb-1">Connection Failed</div>
                  <div className="text-sm text-text-muted">
                    Unable to connect to the database. Check your connection
                    settings and try again.
                  </div>
                </div>
              </div>
            </TooltipPopup>
          </TooltipPositioner>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
