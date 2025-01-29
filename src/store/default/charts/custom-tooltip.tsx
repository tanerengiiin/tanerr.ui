"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { TooltipProps } from "recharts";

interface CustomTooltipProps extends TooltipProps<any, any> {
  valueFormatter: (value: number) => string;
}

export const CustomTooltip = ({
  valueFormatter,
  active,
  payload,
  ...props
}: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const legendPayload = payload.filter((item: any) => item.type !== "none");
    return (
      <div className={cn("rounded-md border text-sm shadow-md bg-background")}>
        <div className={cn("border-b border-inherit px-4 py-2")}>
          <p className={cn("font-medium text-text-primary")}>{props.label}</p>
        </div>
        <div className={cn("space-y-1 px-4 py-2")}>
          {legendPayload.map(({ value, color, dataKey }, index: number) => (
            <div
              key={`id-${index}`}
              className="flex items-center justify-between space-x-8"
            >
              <div className="flex items-center space-x-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    "h-[3px] w-3.5 shrink-0 rounded-full bg-primary"
                  )}
                  style={{ background: color }}
                />
                <p
                  className={cn(
                    "whitespace-nowrap text-right text-text-secondary"
                  )}
                >
                  {dataKey}
                </p>
              </div>
              <p
                className={cn(
                  "whitespace-nowrap text-right font-medium tabular-nums text-text-primary"
                )}
              >
                {valueFormatter(value)}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};
