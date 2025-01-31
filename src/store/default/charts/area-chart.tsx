"use client";

import { cn } from "@/lib/utils";

import React from "react";
import {
  ResponsiveContainer,
  Dot,
  AreaChart as AreaChartPrimitive,
  Area,
  AreaProps as RechartsAreaProps,
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

export interface GradientStop
  extends Omit<React.SVGAttributes<SVGStopElement>, "stopColor"> {
  stopColor?: string | ColorProps;
}

type AreaColorType =
  | { type: "gradient"; color: GradientStop[] }
  | { type: "solid"; color: string | ColorProps }
  | { type: "none" };

export interface AreaProps
  extends Omit<RechartsAreaProps, "ref" | "color" | "fill"> {
  id: string;
  fill?: AreaColorType;
  color?: string | ColorProps;
}

export interface LineChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Array<Record<string, any>>;
  chartProps?: Omit<
    React.ComponentProps<typeof AreaChartPrimitive>,
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
  areas: Array<AreaProps>;
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

const AreaChart = React.forwardRef<HTMLDivElement, LineChartProps>(
  (
    {
      data,
      areas,
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
          <AreaChartPrimitive
            data={data}
            margin={{
              top: 2,
              right: showYReferenceLine ? 48 : 2,
              left: 2,
              bottom: 2,
            }}
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
              cursor={{
                stroke: "",
                className: "stroke-primary/20",
                strokeWidth: 1,
              }}
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
                height={legendHeight + (showYReferenceLine ? 10 : 0)}
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
            {areas.map(
              ({ id, dataKey, className, fill, color, ...areaProps }) => {
                const gradientId = `gradient-${id}`;

                return (
                  <React.Fragment key={id}>
                    {fill?.type === "gradient" && (
                      <defs key={id}>
                        <linearGradient
                          id={gradientId}
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          {fill?.color.map(({offset, stopColor, stopOpacity, ...props}, index) => (
                            <stop
                              key={index}
                              offset={offset}
                              stopColor={
                                typeof stopColor === "object" &&
                                "name" in stopColor
                                  ? getTailwindColor(
                                      stopColor as ColorProps
                                    )
                                  : stopColor
                              }
                              stopOpacity={stopOpacity ?? 1}
                              {...props}
                            />
                          ))}
                        </linearGradient>
                      </defs>
                    )}
                    <Area
                      id={id}
                      name={id}
                      dataKey={dataKey ?? id}
                      type="monotone"
                      fill={
                        fill?.type === "gradient"
                          ? `url(#${gradientId})`
                          : fill?.type === "solid"
                          ? typeof fill.color === "object" &&
                            "name" in fill.color
                            ? getTailwindColor(fill.color as ColorProps)
                            : fill?.color
                          : "none"
                      }
                      stroke={
                        color
                          ? typeof color === "object" && "name" in color
                            ? getTailwindColor(color as ColorProps)
                            : (color as string)
                          : ""
                      }
                      strokeOpacity={
                        activeDot || (activeLegend && activeLegend !== id)
                          ? 0.3
                          : 1
                      }
                      fillOpacity={
                        activeDot || (activeLegend && activeLegend !== id)
                          ? 0.1
                          : 0.2
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
                      onClick={(event: React.MouseEvent<SVGElement>) => {
                        event.stopPropagation();
                        // @ts-ignore - Recharts tiplemesi eksik
                        const { name } = event.payload || {};
                        if (name) onCategoryClick(name);
                      }}
                      {...areaProps}
                    />
                  </React.Fragment>
                );
              }
            )}
          </AreaChartPrimitive>
        </ResponsiveContainer>
      </div>
    );
  }
);
AreaChart.displayName = "AreaChart";

export default AreaChart;
