"use client";
import { cn } from "@/lib/utils";
import React, { createContext, useContext } from "react";

interface StepperContextType {
  totalSteps: number;
}

export const StepperContext = createContext<StepperContextType | undefined>(undefined);

const Stepper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { totalSteps: number }
>(({ className, children, totalSteps, ...props }, ref) => {
  return (
    <StepperContext.Provider value={{ totalSteps: totalSteps }}>
      <div ref={ref} className={cn("mt-6 flex flex-col", className)} {...props}>
        {children}
      </div>
    </StepperContext.Provider>
  );
});
Stepper.displayName = "Stepper";

export default Stepper;
