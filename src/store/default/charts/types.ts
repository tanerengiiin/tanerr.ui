"use client";
import colors from "tailwindcss/colors";

export interface ColorProps {
  name: keyof typeof colors;
  degree?: keyof (typeof colors)["blue"];
}
