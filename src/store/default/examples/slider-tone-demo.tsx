import { Slider } from "@/store/default/ui/slider";
import React from "react";

export default function ToneSliderDemo() {
  return (
    <div>
      <Slider tone="success" defaultValue={25} />
      <Slider tone="info" defaultValue={50} />
      <Slider tone="warning" defaultValue={30} />
      <Slider tone="error" defaultValue={60} />
    </div>
  );
}
