"use client";
import { Progress } from "@/store/default/ui/progress";
import * as React from "react";

export default function ExampleProgress() {
  const [value, setValue] = React.useState(1);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      if (!isPaused) {
        setValue((prev) => {
          if (prev >= 100) {
            setIsPaused(true);
            return 100;
          }
          return prev + 1;
        });
      }
    }, 150);

    if (isPaused) {
      const timeout = setTimeout(() => {
        setIsPaused(false);
        setValue(1);
      }, 5000);

      return () => clearTimeout(timeout);
    }

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="flex flex-col gap-3">
      <div className="w-full flex items-center justify-between">
        <label className="font-semibold text-sm text-text-primary">
          Progress
        </label>
        <span className="font-medium text-sm text-text-primary font-mono">
          {value}%
        </span>
      </div>
      <Progress
        value={value}
        max={100}
        linear
        className="w-60"
        tone={
          value < 30
            ? "error"
            : value < 60
            ? "warning"
            : value < 90
            ? "info"
            : "success"
        }
      />
    </div>
  );
}
