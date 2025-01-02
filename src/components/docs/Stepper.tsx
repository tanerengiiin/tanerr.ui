"use client";
import { cn } from "@/lib/utils";
import React, { createContext, useContext } from "react";
import Typography from "./Typography";

interface StepperContextType {
  totalSteps: number;
}

const StepperContext = createContext<StepperContextType | undefined>(undefined);

const Stepper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { totalSteps: number }
>(({ className, children, totalSteps, ...props }, ref) => {
  return (
    <StepperContext.Provider value={{ totalSteps: totalSteps }}>
      <div className={cn("mt-6 flex flex-col", className)} {...props} ref={ref}>
        {children}
      </div>
    </StepperContext.Provider>
  );
});
Stepper.displayName = "Stepper";

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
      <div className={cn("flex gap-4", className)} {...props} ref={ref}>
        <div className="flex flex-col items-center">
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
        <div className={cn("flex-1 pb-8 mt-0.5", Number(stepNumber) === totalSteps && "pb-0")}>
          <Typography>{children}</Typography>
        </div>
      </div>
    );
  }
);
Step.displayName = "Step";

export { Stepper, Step };
