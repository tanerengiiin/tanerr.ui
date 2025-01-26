"use client";
import { Progress } from "@/store/default/ui/progress";
import * as React from "react";

export default function ExampleProgress() {
  const [value, setValue] = React.useState(25);

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setValue((prev) => {
        if (prev >= 100) {
          return 1;
        }
        return prev + 25;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <Progress value={value} className="w-60" />;
}
