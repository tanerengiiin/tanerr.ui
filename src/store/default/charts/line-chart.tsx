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
  DotProps,
  ReferenceLine,
  ReferenceLineProps,
  Brush,
  ReferenceArea,
} from "recharts";
import { CustomTooltip } from "@/store/default/charts/custom-tooltip";
import { CustomLegend } from "@/store/default/charts/custom-legend";
import { ColorProps } from "@/store/default/charts/types";
import {
  getTailwindColor,
  hasOnlyOneValueForKey,
} from "@/store/default/charts/chartUtils";

interface ActiveDot extends DotProps {
  index?: number;
  dataKey?: string;
}

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
  chartProps?: Omit<
    React.ComponentProps<typeof LineChartPrimitive>,
    "data" | "children"
  >;
  showCartesianGrid?: boolean;
  cartesianGridProps?: CartesianGridProps;
  xAxisProps: Required<Pick<XAxisProps, "dataKey">> &
    Partial<Omit<XAxisProps, "dataKey">>;
  yAxisProps?: YAxisProps;
  yAxisLabel?: string;
  xAxisLabel?: string;
  xAxisLabelProps?: LabelProps;
  yAxisLabelProps?: LabelProps;
  valueFormatter?: (value: number) => string;
  lines: Array<LineProps>;
  tooltipProps?: TooltipProps<any, any> & {
    content?:
      | React.ReactNode
      | ((props: TooltipProps<any, any>) => React.ReactNode);
  };
  tooltipCallback?: (tooltipCallbackContent: TooltipProps<any, any>) => void;
  showLegend?: boolean;
  legendProps?: Omit<LegendProps, "ref">;
  onValueChange?: (value: LineChartEventProps) => void;
  legendPosition?: "left" | "center" | "right";
  referenceLineProps?: ReferenceLineProps;
  showXReferenceLine?: boolean;
  showYReferenceLine?: boolean;
}

const LineChart = React.forwardRef<HTMLDivElement, LineChartProps>(
  (
    {
      data,
      lines,
      chartProps,
      showCartesianGrid = true,
      cartesianGridProps,
      xAxisProps: userXAxisProps,
      yAxisProps: userYAxisProps,
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
      referenceLineProps,
      showXReferenceLine = true,
      showYReferenceLine = true,
      ...divProps
    },
    ref
  ) => {
    const xAxisProps = React.useMemo(
      () => ({
        interval: "equidistantPreserveStart" as const,
        ...userXAxisProps,
      }),
      [userXAxisProps]
    );
    const yAxisProps = React.useMemo(
      () => ({
        width: 56,
        ...userYAxisProps,
      }),
      [userYAxisProps]
    );

    const startEndOnly = xAxisProps.interval === "preserveStartEnd";
    const paddingValue =
      (xAxisProps?.hide && yAxisProps?.hide) ||
      (startEndOnly && yAxisProps?.hide)
        ? 0
        : 20;
    const [legendHeight, setLegendHeight] = React.useState(60);
    const [activeDot, setActiveDot] = React.useState<ActiveDot | undefined>(
      undefined
    );
    const [activeLegend, setActiveLegend] = React.useState<string | undefined>(
      undefined
    );

    function onDotClick(itemData: any, event: React.MouseEvent) {
      event.stopPropagation();
      console.log("onDotClick", itemData as ActiveDot);
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
        setActiveDot(itemData);
        onValueChange?.({
          eventType: "dot",
          categoryClicked: itemData.dataKey,
          ...itemData.payload,
        });
      }
    }

    function onCategoryClick(dataKey: string) {
      console.log("onCategoryClick", dataKey);
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
          <LineChartPrimitive
            data={data}
            margin={{ top: 2, right: showYReferenceLine ? 48: 2, left: 2, bottom: 2 }}
            {...chartProps}
          >
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
           
            {showYReferenceLine && (
              <ReferenceLine
                y={
                  activeDot &&
                  Number(
                    data[activeDot.index!][
                      activeDot.dataKey! as keyof (typeof data)[0]
                    ]
                  )
                }
                strokeDasharray="4 4"
                stroke=""
                className={cn("stroke-primary/20")}
                isFront
                ifOverflow="visible"
              >
                {activeDot && (
                  <Label
                    position="right"
                    offset={10}
                    className={cn("text-xs stroke-0 fill-text-primary ")}
                  >
                    {valueFormatter(
                      Number(
                        data[activeDot.index!][
                          activeDot.dataKey! as keyof (typeof data)[0]
                        ]
                      )
                    )}
                  </Label>
                )}
              </ReferenceLine>
            )}
            {showXReferenceLine && (
              <ReferenceLine
                x={
                  activeDot &&
                  data[activeDot.index!][
                    xAxisProps.dataKey as keyof (typeof data)[0]
                  ]
                }
                strokeDasharray="4 4"
                stroke=""
                className={cn("stroke-primary/20")}
                isFront
              >
                {activeDot && (
                  <Label
                    position="top"
                    offset={8}
                    stroke=""
                    className={cn("text-xs stroke-0 fill-text-primary")}
                  >
                    {
                      data[activeDot.index!][
                        xAxisProps.dataKey as keyof (typeof data)[0]
                      ]
                    }
                  </Label>
                )}
              </ReferenceLine>
            )}
            <XAxis
              className={cn("text-xs fill-text-muted", xAxisProps?.className)}
              padding={{ left: paddingValue, right: paddingValue }}
              ticks={
                startEndOnly &&
                typeof xAxisProps.dataKey !== "function" &&
                xAxisProps?.dataKey
                  ? [
                      data[0][xAxisProps.dataKey],
                      data[data.length - 1][xAxisProps.dataKey],
                    ]
                  : undefined
              }
              tick={{ transform: "translate(0, 6)" }}
              tickLine={false}
              axisLine={false}
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
              cursor={{ stroke: "", className: "stroke-primary/20", strokeWidth: 1 }}
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
                height={legendHeight + (showYReferenceLine ? 10 :0)}
                content={({ payload }) => {
                  return (
                    <CustomLegend
                      setLegendHeight={setLegendHeight}
                      activeLegend={activeLegend}
                      yAxisWidth={yAxisProps.width}
                      legendPosition={legendPosition}
                      onClick={(clickedLegendItem: string) =>
                        onCategoryClick(clickedLegendItem)
                      }
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
                strokeOpacity={
                  activeDot || (activeLegend && activeLegend !== id) ? 0.3 : 1
                }
                strokeWidth={2}
                strokeLinejoin="round"
                strokeLinecap="round"
                className={cn("stroke-primary cursor-pointer", className)}
                activeDot={({ fill, ...props }: any) => {
                  return (
                    <Dot
                      className={cn(
                        "stroke-background fill-primary cursor-pointer"
                      )}
                      style={{ fill }}
                      onClick={(_, event) =>
                        onDotClick({ fill, ...props }, event)
                      }
                      {...props}
                    />
                  );
                }}
                dot={({
                  index,
                  dataKey,
                  stroke,
                  fill,
                  strokeOpacity,
                  className,
                  r,
                  ...props
                }: any) => {
                  const shouldShowDot =
                    activeDot &&
                    activeDot.index === index &&
                    activeDot.dataKey === props.id;
                  if (shouldShowDot) {
                    return (
                      <Dot
                        key={index}
                        index={index}
                        style={{ fill: stroke }}
                        stroke=""
                        r={5}
                        strokeOpacity={1}
                        fill=""
                        className={cn("stroke-background fill-primary")}
                        {...props}
                      />
                    );
                  }
                  return <React.Fragment key={index}></React.Fragment>;
                }}
                onClick={(props: any, event) => {
                  event.stopPropagation();
                  const { name } = props;
                  onCategoryClick(name);
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
