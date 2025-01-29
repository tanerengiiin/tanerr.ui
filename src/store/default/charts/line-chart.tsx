"use client";

import { cn } from "@/lib/utils";

import React from "react";
import {
  ResponsiveContainer,
  Dot,
  LineChart as LineChartPrimitive,
  Line,
  LineProps as RechartsLineProps,
  XAxis,
  XAxisProps,
  YAxis,
  YAxisProps,
  CartesianGrid,
  CartesianGridProps,
  Tooltip,
  TooltipProps,
  Label,
  LabelProps,
  Legend,
  LegendProps,
} from "recharts";
import { CustomTooltip } from "@/store/default/charts/custom-tooltip";
import { CustomLegend } from "@/store/default/charts/custom-legend";
import { ColorProps } from "@/store/default/charts/types";
import {
  getTailwindColor,
  hasOnlyOneValueForKey,
} from "@/store/default/charts/chartUtils";

type BaseEventProps = {
  eventType: "dot" | "category";
  categoryClicked: string;
  [key: string]: number | string;
};

type LineChartEventProps = BaseEventProps | null | undefined;

export interface LineProps extends Omit<RechartsLineProps, "ref" | "color"> {
  id: string;
  color?: string | ColorProps;
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
  lines: Array<LineProps>;
  tooltipCallback?: (tooltipCallbackContent: TooltipProps<any, any>) => void;
  tooltipProps?: TooltipProps<any, any>;
  showLegend?: boolean;
  legendProps?: Omit<LegendProps, "ref">;
  onValueChange?: (value: LineChartEventProps) => void;
  legendPosition?: "left" | "center" | "right";
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
      cartesianGridProps,
      xAxisProps,
      yAxisProps = {
        width: 56,
      },
      yAxisLabel,
      xAxisLabel,
      xAxisLabelProps,
      yAxisLabelProps,
      valueFormatter = (value: number) => value.toString(),
      tooltipCallback,
      tooltipProps,
      showLegend = true,
      legendProps,
      className,
      onValueChange,
      legendPosition = "right",
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
    const [legendHeight, setLegendHeight] = React.useState(60);
    const [activeDot, setActiveDot] = React.useState<undefined>(undefined);
    const [activeLegend, setActiveLegend] = React.useState<string | undefined>(
      undefined
    );
    const hasOnValueChange = !!onValueChange;

    function onDotClick(itemData: any, event: React.MouseEvent) {
      event.stopPropagation();

      if (!hasOnValueChange) return;
      if (
        (itemData.index === activeDot?.index &&
          itemData.dataKey === activeDot?.dataKey) ||
        (hasOnlyOneValueForKey(data, itemData.dataKey) &&
          activeLegend &&
          activeLegend === itemData.dataKey)
      ) {
        setActiveLegend(undefined);
        setActiveDot(undefined);
        onValueChange?.(null);
      } else {
        setActiveLegend(itemData.dataKey);
        setActiveDot({
          index: itemData.index,
          dataKey: itemData.dataKey,
        });
        onValueChange?.({
          eventType: "dot",
          categoryClicked: itemData.dataKey,
          ...itemData.payload,
        });
      }
    }

    function onCategoryClick(dataKey: string) {
      console.log("onCate", dataKey);
      if (!hasOnValueChange) return;
      if (
        (dataKey === activeLegend && !activeDot) ||
        (hasOnlyOneValueForKey(data, dataKey) &&
          activeDot &&
          activeDot.dataKey === dataKey)
      ) {
        setActiveLegend(undefined);
        onValueChange?.(null);
      } else {
        setActiveLegend(dataKey);
        onValueChange?.({
          eventType: "category",
          categoryClicked: dataKey,
        });
      }
      setActiveDot(undefined);
    }
    return (
      <div ref={ref} className={cn("h-80 w-full", className)} {...divProps}>
        <ResponsiveContainer>
          <LineChartPrimitive data={data} {...chartProps}>
            {showCartesianGrid && (
              <CartesianGrid
                className={cn(
                  "stroke-1 stroke-border",
                  cartesianGridProps?.className
                )}
                horizontal={true}
                vertical={false}
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
              width={yAxisProps.width}
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
            <Tooltip
              wrapperStyle={{ outline: "none" }}
              isAnimationActive={true}
              animationDuration={100}
              cursor={{ stroke: "#d1d5db", strokeWidth: 1 }}
              offset={24}
              position={{ y: -2 }}
              content={({ active, ...other }) => {
                if (tooltipCallback) {
                  tooltipCallback({ active, ...other });
                }
                if (tooltipProps?.content) {
                  return typeof tooltipProps.content === "function"
                    ? tooltipProps.content({ active, ...other })
                    : tooltipProps.content;
                }
                return active ? (
                  <CustomTooltip
                    valueFormatter={valueFormatter}
                    active={active}
                    {...other}
                  />
                ) : null;
              }}
              {...tooltipProps}
            />
            {showLegend ? (
              <Legend
                verticalAlign="top"
                height={legendHeight}
                content={({ onClick, payload }) => {
                  const clickEvent = hasOnValueChange
                    ? (clickedLegendItem: string) =>
                        onCategoryClick(clickedLegendItem)
                    : undefined;
                  return (
                    <CustomLegend
                      setLegendHeight={setLegendHeight}
                      activeLegend={activeLegend}
                      yAxisWidth={yAxisProps.width}
                      legendPosition={legendPosition}
                      onClick={() => {
                        clickEvent;
                        onClick;
                      }}
                      payload={payload}
                    />
                  );
                }}
                {...legendProps}
              />
            ) : null}
            {lines.map(({ id, dataKey, className, color, ...lineProps }) => (
              <Line
                key={id}
                id={id}
                name={id}
                dataKey={dataKey ?? id}
                type="monotone"
                stroke={
                  color
                    ? typeof color === "object" && "name" in color
                      ? getTailwindColor(color as ColorProps)
                      : (color as string)
                    : ""
                }
                strokeWidth={2}
                strokeLinejoin="round"
                strokeLinecap="round"
                className={cn("stroke-primary", className)}
                activeDot={({ dataKey, fill, ...props }: any) => {
                  return (
                    <Dot
                      className={cn("stroke-background fill-primary")}
                      style={{ fill }}
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
