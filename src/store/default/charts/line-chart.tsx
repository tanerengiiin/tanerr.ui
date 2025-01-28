"use client";

import { cn } from "@/lib/utils";
import React from "react";
import {
  LineChart as LineChartPrimitive,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGridProps,
  XAxisProps,
  YAxisProps,
  LineProps as RechartsLineProps,
  Dot,
  Label,
  LabelProps,
} from "recharts";

export interface LineProps extends RechartsLineProps {
  id: string;
}

export interface LineChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Array<Record<string, any>>;
  index: string;
  chartProps?: Omit<
    React.ComponentProps<typeof LineChartPrimitive>,
    "data" | "children"
  >;
  showCartesianGrid?: boolean;
  cartesianGridProps?: CartesianGridProps;
  xAxisProps?: XAxisProps;
  yAxisProps?: YAxisProps;
  yAxisLabel?: string;
  xAxisLabel?: string;
  xAxisLabelProps?: LabelProps;
  yAxisLabelProps?: LabelProps;
  valueFormatter?: (value: number) => string;
  lines: Array<Omit<LineProps, "ref">>;
}

const LineChart = React.forwardRef<HTMLDivElement, LineChartProps>(
  (
    {
      data,
      lines,
      index,
      chartProps = {
        margin: { top: 5, right: 5, left: 5, bottom: 5 },
      },
      showCartesianGrid = true,
      cartesianGridProps = {
        horizontal: true,
        vertical: false,
      },
      xAxisProps,
      yAxisProps,
      yAxisLabel,
      xAxisLabel,
      xAxisLabelProps,
      yAxisLabelProps,
      valueFormatter = (value: number) => value.toString(),
      className,
      ...divProps
    },
    ref
  ) => {
    const startEndOnly = xAxisProps?.interval === "preserveStartEnd";
    const paddingValue =
      (xAxisProps?.hide && yAxisProps?.hide) ||
      (startEndOnly && yAxisProps?.hide)
        ? 0
        : 20;
    return (
      <div ref={ref} className={cn("h-80 w-full", className)} {...divProps}>
        <ResponsiveContainer>
          <LineChartPrimitive data={data} {...chartProps}>
            {showCartesianGrid && (
              <CartesianGrid
                className={cn(
                  "stroke-1 stroke-border",
                  cartesianGridProps.className
                )}
                {...cartesianGridProps}
              />
            )}
            <XAxis
              className={cn("text-xs fill-text-muted", xAxisProps?.className)}
              dataKey={index}
              padding={{ left: paddingValue, right: paddingValue }}
              ticks={
                startEndOnly
                  ? [data[0][index], data[data.length - 1][index]]
                  : undefined
              }
              tick={{ transform: "translate(0, 6)" }}
              tickLine={false}
              axisLine={false}
              fill=""
              stroke=""
              interval="equidistantPreserveStart"
              {...xAxisProps}
            >
              {xAxisLabel && (
                <Label
                  position="insideBottom"
                  offset={-24}
                  className={cn(
                    "text-sm font-medium fill-text-primary",
                    xAxisLabelProps?.className
                  )}
                  {...xAxisLabelProps}
                >
                  {xAxisLabel}
                </Label>
              )}
            </XAxis>
            <YAxis
              className={cn("text-xs fill-text-muted", yAxisProps?.className)}
              tickFormatter={valueFormatter}
              type="number"
              tickLine={false}
              axisLine={false}
              tick={{ transform: "translate(-4, 0)" }}
              fill=""
              stroke=""
              width={56}
              domain={[0, "auto"]}
              {...yAxisProps}
            >
              {yAxisLabel && (
                <Label
                  position="insideLeft"
                  style={{ textAnchor: "middle" }}
                  angle={-90}
                  offset={-16}
                  className={cn(
                    "text-sm font-medium fill-text-primary",
                    yAxisLabelProps?.className
                  )}
                  {...yAxisLabelProps}
                >
                  {yAxisLabel}
                </Label>
              )}
            </YAxis>
            <Tooltip />
            {lines.map((lineProps) => (
              <Line
                key={lineProps.id}
                name={lineProps.id}
                dataKey={lineProps.dataKey ?? lineProps.id}
                type="monotone"
                stroke=""
                strokeWidth={2}
                strokeLinejoin="round"
                strokeLinecap="round"
                className={cn("stroke-primary", lineProps.className)}
                activeDot={({ dataKey, ...props }: any) => {
                  return (
                    <Dot
                      className={cn("stroke-background fill-primary")}
                      {...props}
                    />
                  );
                }}
                dot={({ index }) => {
                  return <React.Fragment key={index}></React.Fragment>;
                }}
                {...lineProps}
              />
            ))}
          </LineChartPrimitive>
        </ResponsiveContainer>
      </div>
    );
  }
);
LineChart.displayName = "LineChart";

export default LineChart;
