import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import { LegendProps as RechartsLegendProps } from "recharts";

interface LegendItemProps {
  name: string;
  color: string;
  onClick?: (name: string) => void;
  activeLegend?: string;
}

const LegendItem = ({
  name,
  color,
  onClick,
  activeLegend,
}: LegendItemProps) => {
  return (
    <li
      className={cn(
        // base
        "select-none group inline-flex flex-nowrap items-center gap-1.5 whitespace-nowrap rounded-sm px-2 py-1 transition cursor-pointer hover:bg-muted",
        activeLegend && activeLegend === name && "bg-muted"
      )}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.(name);
      }}
    >
      <span
        className={cn(
          "h-[3px] w-3.5 shrink-0 rounded-full bg-primary",
          activeLegend && activeLegend !== name ? "opacity-40" : "opacity-100"
        )}
        style={{ background: color }}
        aria-hidden={true}
      />
      <p
        className={cn("truncate whitespace-nowrap text-xs text-text-accent",
          activeLegend && activeLegend !== name ? "opacity-40" : "opacity-100"
        )}
      >
        {name}
      </p>
    </li>
  );
};

interface CustomLegendProps
  extends Omit<RechartsLegendProps, "ref" | "onClick"> {
  setLegendHeight: React.Dispatch<React.SetStateAction<number>>;
  activeLegend: string | undefined;
  onClick?: ((dataKey: string) => void) | undefined;
  legendPosition?: "left" | "center" | "right";
  yAxisWidth?: number;
}

export const CustomLegend = ({
  setLegendHeight,
  activeLegend,
  onClick,
  legendPosition,
  yAxisWidth,
  payload = [],
}: CustomLegendProps) => {
  const legendRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleResize = () => {
      const calculateHeight = (height: number | undefined) =>
        height ? Number(height) + 15 : 60;
      setLegendHeight(calculateHeight(legendRef.current?.clientHeight));
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setLegendHeight]);

  const legendPayload = payload.filter((item) => item.type !== "none");

  const paddingLeft =
    legendPosition === "left" && yAxisWidth ? yAxisWidth - 8 : 0;

  return (
    <div
      ref={legendRef}
      style={{ paddingLeft: paddingLeft }}
      className={cn(
        "flex items-center",
        { "justify-center": legendPosition === "center" },
        { "justify-start": legendPosition === "left" },
        { "justify-end": legendPosition === "right" }
      )}
    >
      <ol className={cn("relative overflow-hidden flex gap-0.5 h-full")}>
        {legendPayload?.map((item, index) => (
          <LegendItem
            key={`legend-item-${index}`}
            name={item.dataKey ?? item.value}
            color={item.color}
            onClick={
              onClick ? () => onClick(item.dataKey ?? item.value) : undefined
            }
            activeLegend={activeLegend}
          />
        ))}
      </ol>
    </div>
  );
};
