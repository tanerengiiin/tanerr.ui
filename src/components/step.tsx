"use client";
import { cn } from "@/lib/utils";
import React, { useContext } from "react";
import { StepperContext } from "./stepper";
import Typography from "./typography";

interface StepProps extends React.HTMLAttributes<HTMLDivElement> {
  stepNumber: number;
}

const Step = React.forwardRef<HTMLDivElement, StepProps>(
  ({ className, stepNumber, children, ...props }, ref) => {
    const context = useContext(StepperContext);

    if (!context) {
      throw new Error("Step must be used within a Stepper component");
    }

    const { totalSteps } = context;
    return (
      <div ref={ref} className={cn("w-full flex gap-4", className)} {...props}>
        <div className="flex flex-col items-center shrink-0">
          <div
            className={cn(
              "w-8 h-8 flex items-center justify-center rounded-md bg-secondary font-medium border border-border/50 dark:border-border"
            )}
          >
            {stepNumber}
          </div>
          {Number(stepNumber) < totalSteps && (
            <div className="flex-1 bg-border/60 dark:bg-border w-px"></div>
          )}
        </div>
        <div
          className={cn(
            "flex-1 pb-8 mt-0.5 overflow-hidden pt-0.5",
            Number(stepNumber) === totalSteps && "pb-0"
          )}
        >
         <Typography>{children}</Typography>
        </div>
      </div>
    );
  }
);
Step.displayName = "Step";

export default Step; 