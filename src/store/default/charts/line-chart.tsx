"use client";

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
  LineProps,
} from "recharts";

export interface LineConfig extends Omit<LineProps, 'ref'> {
  dataKey: string;
  stroke?: string;
  activeDot?: boolean | object;
}

export interface LineChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Array<Record<string, any>>;
  lines: LineConfig[];
  connectNulls?: boolean;
  isAnimationActive?: boolean;
  xAxisDataKey?: string;
  margin?: { top: number; right: number; bottom: number; left: number };
  height?: number;
}

const defaultLineProps = {
  type: 'monotone' as const,
  connectNulls: true,
  isAnimationActive: true,
};

const LineChart = React.forwardRef<HTMLDivElement, LineChartProps>(
  ({ 
    data, 
    lines,
    connectNulls = true, 
    isAnimationActive = true,
    xAxisDataKey = "name",
    margin = { top: 5, right: 30, left: 20, bottom: 5 },
    height = 300,
    ...props 
  }, ref) => {
    return (
      <div ref={ref} style={{ width: "100%", height }} {...props}>
        <ResponsiveContainer>
          <LineChartPrimitive
            data={data}
            margin={margin}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xAxisDataKey} />
            <YAxis />
            <Tooltip />
            <Legend />
            {lines.map((lineProps, index) => (
              <Line
                key={lineProps.dataKey || index}
                {...defaultLineProps}
                {...lineProps}
                connectNulls={connectNulls}
                isAnimationActive={isAnimationActive}
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
